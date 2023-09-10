import { json, LoaderArgs } from '@remix-run/node';

export async function loader({ params, request }: LoaderArgs) {
	const url = new URL(request.url);
	const transactionUuid = url.searchParams.get('transactionUuid') ?? null;
	const response = {
		OffsetProduct: [
			{
				productid: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
				name: "Coffee",
				offsetunits: 3
			},
			{
				productid: '8ef575a9-fe3f-ee11-bdf3-000d3ad4d529',
				name: 'Jsy-London flight',
				offsetunits: 500
			},
			{productid: 'aaa8ddbb-fe3f-ee11-bdf3-000d3ad4d529',
				name: 'Washing Maching',
				offsetunits: 350
			}
		],
		Project: [
			{
				subprojectid: 'e02ddf8e-b640-ee11-be6d-000d3ad4d529',
				name: 'MVP Project',
				carbonavailable: 100,
				toncost:{
					value: 50.0000000000
				}
			},
			{
				subprojectid: '0878da95-dfb6-ed11-b596-00224801935c',
				name: 'BioChar Machine Test',
				carbonavailable: 10,
				toncost: {
					value: 10.0000000000
				}
			},
			{
				subprojectid: 'e6f67f63-3ba3-ed11-aad0-6045bdf1d6af',
				name: 'Jersey Test Subproject 1',
				carbonavailable: 20,
				toncost:{
					value: 10.0000000000
				}
			}
		],
		Transaction: [
		{
			transactionId: "a9ace233-0149-ee11-be6f-000d3ad4d529", 
			productId: 
			{
				id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529", 
				logicalName: "new_offsetproducts", 
				name: "Coffee", 
				keyAttributes: [], 
				rowVersion: null 
			}, 
			quantity: 100, 
			totalCarbon: 1.0000000000, 
			contact: { 
				id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529", 
				logicalName: "contact", 
				name: "Christos Valerkou", 
				keyAttributes: [], 
				rowVersion: null 
			},
			project: { 
				id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529", 
				logicalName: "cr93c_subproject", 
				name: "MVP Project",
				keyAttributes: [],
				rowVersion: null 
			}, "transactionDate": null 
		},
		{
			transactionId: "c8225370-b749-ee11-be6f-000d3ad4d529",
			productId: {
				id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
				logicalName: "new_offsetproducts", "name": "Coffee", "keyAttributes": [], "rowVersion": null
			}, 
			quantity: 300,
			totalCarbon: 1.0000000000,
			contact: 
			{
				id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
				logicalName: "contact",
				name: "Christos Valerkou",
				keyAttributes: [], "rowVersion": null }, 
				project:
				{
					id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
					logicalName: "cr93c_subproject",
					name: "MVP Project", 
					keyAttributes: [],
					rowVersion: null 
				}, "transactionDate": null
			}, 
			{
				transactionId: "6071d4c2-b749-ee11-be6f-000d3ad4d529",
				productId: 
				{
					id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
					logicalName: "new_offsetproducts",
					name: "Coffee",
					keyAttributes: [],
					rowVersion: null 
				},
				quantity: 400,
				totalCarbon: 1.0000000000, 
				contact:
				{
					id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
					logicalName: "contact", 
					name: "Christos Valerkou", 
					keyAttributes: [],
					rowVersion: null 
				}, 
				"project":
				{
					id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
					logicalName: "cr93c_subproject",
					name: "MVP Project",
					keyAttributes: [],
					rowVersion: null
				},
				transactionDate: null 
			}
		],
		'Transactiona9ace233-0149-ee11-be6f-000d3ad4d529':
		{
			transactionId: "a9ace233-0149-ee11-be6f-000d3ad4d529", 
			productId: 
			{
				id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529", 
				logicalName: "new_offsetproducts", 
				name: "Coffee", 
				keyAttributes: [], 
				rowVersion: null 
			}, 
			quantity: 100, 
			totalCarbon: 1.0000000000, 
			contact: { 
				id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529", 
				logicalName: "contact", 
				name: "Christos Valerkou", 
				keyAttributes: [], 
				rowVersion: null 
			},
			project: { 
				id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529", 
				logicalName: "cr93c_subproject", 
				name: "MVP Project",
				keyAttributes: [],
				rowVersion: null 
			}, "transactionDate": null 
		},
	};

	switch (request.method) {
		case 'GET':
			let responseKey: string = String(params.action);
			if(params.action === 'Transaction' && transactionUuid !== null) {
				responseKey = `Transaction${transactionUuid}`;
			}
			return json(response[responseKey]);
		case 'PATCH':
			console.log('post');
			break;
		case 'POST':
			console.log('post');
			break;
	}
	return json({ message: 'Method not allowed', ok: true }, 405);
}

// EOF!