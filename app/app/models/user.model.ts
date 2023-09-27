import { api } from '~/helpers/api';

// User object
interface IUser {
	email?: string;
	password?: string;
	token: string;
	uuid?: string;
}
const user: IUser = {
	token: '',
};

export interface setting {
	userSettingId: null | number;
	automationSetting: number;
	cvSetting: number;
	opportunitySetting: number;
	setting: null | number;
	value: null | string;
}

export async function postUser(user) {
	try {
		//console.log(JSON.stringify(user));
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/users/?api_key=${api.key}`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function getUserByToken(token: User['token']): Promise<IUser> {
	const user: IUser = {
		token,
	};

	return user;
}
export async function getUserSettings(token: string, userUuid: string) {
	try {
		// console.log(`${api.protocol}://${api.base}${api.port}/users/${userUuid}/settings/?&api_key=${api.key}`);
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/users/${userUuid}/settings/?&api_key=${api.key}`, {
			headers: {
				Authentication: `Bearer ${token}`,
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const userSettings = await response.json();
		return userSettings;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function patchUsersSettings(token: string, userUuid: string, setting: object) {
	// console.log(setting);
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/users/${userUuid}/settings/?api_key=${api.key}`, {
		method: 'PATCH',
		body: JSON.stringify(setting),
		headers: {
			Authentication: `Bearer ${token}`,
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	// console.log(response)
	if (response?.ok) {
		const patchUsersSettings = await response.json();
		return patchUsersSettings;
	} else {
		const error = new Error();
		error.error.code = response.status;
		error.message = response.statusText;
		throw error;
	}
}

export async function userAuthenticate(token: string): Promise<IUser> {
	// console.log(token);
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/users/authenticate/?api_key=${api.key}`, {
			method: 'POST',
			body: JSON.stringify({ accessToken: token }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const user = await response.json();
		return user;
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

// EOF!
