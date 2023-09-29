import { useLoaderData } from '@remix-run/react';
import type { V2_MetaFunction } from '@remix-run/node';
import { list, OffsetProduct } from '~/models/offsetProduct';
import { Contact } from '~/models/contact.model';
import { SubProject, retrieve } from '../models/subProject';
import OffsetProductsForm from '~/components/OffsetProductsForm';
export const loader = async ({ request }) => {
	const baseUrl: string = String(process.env.BASE_URL),
		urlParams = new URL(request.url),
		subProjectId = String(urlParams.searchParams.get('subProjectId'));

	const offsetProducts: OffsetProduct[] = await list();

	const subProject = await retrieve(subProjectId);
	const contact: Contact = {
		emailAddress: 'email@danielmullin.com',
		uuid: '0ba59923-0efb-4ea2-a3f5-cccb551bfc6b',
	};

	return {
		contact,
		offsetProducts,
		subProject,
	};
};

export default function OffsetProducts() {
	const { contact, offsetProducts, subProject } = useLoaderData<typeof loader>();
	const content = require('app/content/offset-products.json');

	return (
		<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
			<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
			<section className="mb-4">
				<p className="mb-4 text-2xl font-light leading-tight sm:mr-2 sm:w-1/2">{content.p[0]}</p>
			</section>
			<OffsetProductsForm contact={contact} content={content} subProject={subProject} offsetProducts={offsetProducts} />
		</div>
	);
}

// EOF!
