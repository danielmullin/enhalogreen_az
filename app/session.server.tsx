import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import type { User } from '~/models/user.model';
import { getUserByToken } from '~/models/user.model';
invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set');

let USER_SESSION_TOKEN = '';
let USER_SESSION_UUID = '';

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: '__session',
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		secrets: [process.env.SESSION_SECRET],
		secure: process.env.NODE_ENV === 'production',
	},
});

export async function createUserSession({ request, token, uuid, remember, redirectTo }: { request: Request; uuid?: string; token?: string; remember: boolean; redirectTo: string }): Promise<Response> {
	const session = await getSession(request);
	session.set(USER_SESSION_TOKEN, token);
	session.set(USER_SESSION_UUID, uuid);

	const commitResult = await sessionStorage.commitSession(session, {
		maxAge: remember ? 60 * 60 * 24 * 7 : undefined,
	});

	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': commitResult,
		},
	});
}

export async function getSession(request: Request): Promise<Session> {
	const cookie = request.headers.get('Cookie');
	return await sessionStorage.getSession(cookie);
}

export async function getUser(request: Request): Promise<User | null> {
	const userToken = await getUserToken(request);
	if (userToken === undefined) return null;

	const user = await getUserByToken(userToken);
	if (user !== undefined) {
		return user;
	}

	throw await logout(request);
}

export async function getUserToken(request: Request): Promise<User['token'] | undefined> {
	try {
		const session = await getSession(request);
		const userToken = session.get(USER_SESSION_TOKEN);
		return userToken;
	} catch (e) {
		return null;
	}
}

export async function getUserUuid(request: Request): Promise<User['uuid'] | undefined> {
	const session = await getSession(request);
	const userUuid = await session.get(USER_SESSION_UUID);
	return userUuid;
}

export async function setUserUuid(request: Request, uuid: string, redirectTo: string): Promise<Response> {
	const session = await getSession(request);
	session.set(USER_SESSION_UUID, uuid);
	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await sessionStorage.commitSession(session, {
				maxAge: 60 * 60 * 24 * 7,
			}),
		},
	});
}

export async function logout(request: Request): Promise<Response> {
	const session = await getSession(request);
	return redirect('/', {
		headers: {
			'Set-Cookie': await sessionStorage.destroySession(session),
		},
	});
}

export async function requireUserToken(request: Request, redirectTo: string = new URL(request.url).pathname): Promise<string> {
	const userToken = await getUserToken(request);
	if (userToken === undefined) {
		const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
		redirect(`/`);
	}
	return userToken ?? '';
}
