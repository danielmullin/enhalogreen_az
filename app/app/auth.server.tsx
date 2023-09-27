import { redirect } from '@remix-run/node';
import { userAuthenticate } from '~/models/user.model';
import { createUserSession, getUserToken } from '~/session.server';

const sessionSecret: string | undefined = process.env.SESSION_SECRET;
const cognitoDomain: string | undefined = process.env.COGNITO_DOMAIN;
const cognitoClientId: string | undefined = process.env.COGNITO_CLIENT_ID;
const cognitoClientSecret: string | undefined = process.env.COGNITO_CLIENT_SECRET;

if (sessionSecret === null) {
	throw new Error('SESSION_SECRET must be set');
}
if (cognitoDomain === null) {
	throw new Error('COGNITO_DOMAIN must be set');
}
if (cognitoClientId === null) {
	throw new Error('CLIENT_ID must be set');
}

export async function authenticate(request) {
	const url = new URL(request.url);
	let redirectUri = url.origin + url.pathname;
	if (redirectUri === 'http://targetmy.cv/authenticate') {
		redirectUri = 'https://targetmy.cv/authenticate';
	}
	const code: null | string = url.searchParams.get('code'); // returned code from asuth process
	//const state = (url.searchParams.get('state') ?? '/cvs/list');
	const redirectTo = url.searchParams.get('redirectTo') ?? '/cvs/list';

	const cognitoUrl = `https://${String(cognitoDomain)}/login?client_id=${String(
		cognitoClientId
	)}&response_type=code&scope=email+openid&redirect_uri=${String(redirectUri)}&state=${redirectTo}`;
	let user = null;
	if (code !== undefined || code === null) {
		const tokenResponse = await getToken(code, redirectUri);
		if (tokenResponse.status === 200) {
			const json = await tokenResponse.json();
			const { access_token, id_token, refresh_token } = json;
			const user: User = await userAuthenticate(access_token);
			return await createUserSession({
				request,
				token: user.token,
				uuid: user.uuid,
				remember: true,
				redirectTo,
			});
		}
	}

	if (user === null) {
		user = await hasValidAccessToken(request);
		if (user === null) {
			// Then try to refresh the access token from a refresh token saved as a cookie
		}

		if (user === null) {
			return redirect(cognitoUrl);
		}
	}

	if (user) {
		return redirect('/');
	}

	// All failed, return to login
	return redirect(`/login?redirect=${redirectTo}`);
}

// Make the call to cognito to get the token
async function getToken(code, redirectUri) {
	const uri = `https://${cognitoDomain}/oauth2/token`;
	const body = {
		grant_type: 'authorization_code',
		client_id: cognitoClientId,
		client_secret: cognitoClientSecret,
		redirect_uri: redirectUri,
		code,
	};
	//console.log(body);
	return await fetch(uri, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(body),
	});
}

// Get the user info. If this call succeeds, the user is authenticated
async function getUser(access_token) {
	const uri = `https://${cognitoDomain}/oauth2/userInfo`;

	const response = await fetch(uri, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	if (response.status === 200) {
		return await response.json();
	} else {
		return null;
	}
}

async function hasValidAccessToken(request) {
	try {
		const access_token = getUserToken(request);
		if (access_token) {
			return await getUser(access_token);
		}
		return null;
	} catch (e) {
		//console.log(e);
		return null;
	}
}

async function refreshAccessToken(request, redirectUri) {
	const ret = {
		accessToken: undefined,
		idToken: undefined,
		refreshToken: undefined,
	};

	return ret;
}
