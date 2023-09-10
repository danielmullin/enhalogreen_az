import { api } from '~/helpers/api';

// User object
export interface OffsetProduct {
  name: string,
  units: number,
  uuid: string
}

export async function list() {
	console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`)
	// @todo error handling
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const data = await response.json();

  return data.map(item => ({
    uuid: String(item.productid),
    name: String(item.name),
    units: Number(item.offsetunits)
   }));
}

// EOF!
