import { api } from '~/helpers/api';

export interface SubProject {
	tonCost: {
		value: number;
	}
	name: string;
	uuid: string;
}
	
export async function list(): Promise<SubProject[]> {
	console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=${api.key}`)
	// @todo error handling
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=$https://carbonregistrytransaction.azurewebsites.net/api/Project?code=nnEJyQ7YYeS6Bo--53PhK1T5KJW3gOL-wHGKxfL3gmcvAzFuPAEKBQ==`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const data = await response.json();

	return data.map(item => ({
		name: String(item.name),
		tonCost: {
			value: Number(item.toncost.value)
		},
		uuid: String(item.subprojectid)
	 }));
}

export async function retrieve(subProjectId: string):Promise<SubProject> {
	return {
			tonCost: {
				value: 50
			},
			name: 'MVP Project',
			subProjectId: '68d9e429-3cae-4e09-ab90-cc40cc54142c'
	}
	const response = await fetch(`${api.protocol}://${api.base}${api.port}/subProjects/${subProjectId}?api_key=${api.key}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	const jsonn = await response.json();
	return json;
}

// EOF!
