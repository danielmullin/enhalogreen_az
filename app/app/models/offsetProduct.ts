import { api } from '~/helpers/api';

// User object
export interface OffsetProduct {
	name: string;
	units: number;
	uuid: string;
}

export async function list() {
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();

		return data.map((item) => ({
			uuid: String(item.productid),
			name: String(item.name),
			units: Number(item.offsetunits),
		}));
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function retrieve(uuid: string) {
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();
		return data.find((offsetProduct) => offsetProduct.productid == uuid);
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		console.log(error);
		return console.error;
	}
}

// EOF!
