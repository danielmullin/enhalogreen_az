import { api } from '~/helpers/api';

export interface SubProject {
	subprojectid: string;
	name: string;
	carbonAvailable: Number;
	tonCost: {
		value: number;
	};
	uuid: string;
}

export async function list(): Promise<SubProject[]> {
	console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=${api.key}`)
	try {
		const response = await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=${api.key}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();
		// console.log(data);
		return data.map((item) => ({
			subprojectid: String(item.subprojectid),
			name: String(item.name),
			carbonAvailable: Number(item.carbonavailable),
			tonCost: {
				value: Number(item.toncost.value),
			},
			uuid: String(item.subprojectid),
		}));
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

export async function retrieve(subProjectId: string): Promise<SubProject> {
	try {
		const listProjects = await list();
		return listProjects.find((project) => project.uuid === subProjectId);
	} catch (error) {
		console.error(`Error occured: ${String(error)}`);
		return { error };
	}
}

// EOF!
