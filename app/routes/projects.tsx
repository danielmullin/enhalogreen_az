import { useLoaderData } from '@remix-run/react';
import { list, SubProject } from '../models/subProject';
import Cta from '../components/Cta';

export const loader = async ({}) => {
	const subProjects = await list();

	return {
		subProjects,
	};
};

export default function Projects() {
	const { subProjects } = useLoaderData<typeof loader>();
	const content = require('app/content/projects.json');
	let optimisticProjectId = subProjects[0].uuid;

	return (
		<div className="min-h-70 sm:min-h-80 mt-110 px-8 pt-8 sm:mx-auto sm:max-w-screen-lg">
			<h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
			<section className="mb-4 sm:mb-20">
				<div className="border-b-2 border-black pb-4 sm:pb-16">
					<p className="mb-4 text-2xl font-light leading-tight sm:w-3/5">{content.p[0]}</p>
					<select
						className="text-md mt-2 box-border inline-flex h-10 w-full items-center justify-center rounded-xl pl-2 focus:outline-none sm:h-14"
						defaultValue={optimisticProjectId}
						id="uuid"
						name="uuid"
					>
						{subProjects.map((subProject: SubProject) => {
							return <option value={subProject.uuid}>{subProject.name}</option>;
						})}
					</select>
				</div>
			</section>
			<section className="mb-4 sm:mb-20">
				<div className="border-b-2 border-black pb-6 sm:pb-16">
					<div className="sm:flex sm:items-center">
						<p className="mb-4 text-2xl font-light leading-tight sm:w-3/5">{content.p[1]}</p>
						<div className="sm:w-2/5 sm:text-right">
							<Cta
								linkTo={`/offset-products?subProjectId=${optimisticProjectId}`}
								text={content.cta.offsetYourProducts}
								type="primary"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="sm:mx-auto sm:max-w-screen-lg">
				<div className="pb-6 sm:pb-16">
					<div className="sm:flex sm:items-center">
						<p className="mb-4 text-2xl font-light leading-tight sm:w-3/5">{content.p[2]}</p>
						<div className="sm:w-2/5 sm:text-right">
							<Cta linkTo={`/offset-products?subProjectId=${optimisticProjectId}`} text={content.cta.offsetYourCarbon} type="primary" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// EOF!
