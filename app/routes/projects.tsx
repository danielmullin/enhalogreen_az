import { useLoaderData } from '@remix-run/react';
import { list, SubProject } from '../models/subProject';
import Cta from '../components/Cta';


export const loader = async ({ request }) => {
	const subProjects = await list();

	return ({
		subProjects
	});
};

export default function Projects() {
	const { subProjects } = useLoaderData<typeof loader>();
	const content = require('app/content/projects.json');
	let optimisticProjectId = subProjects[0].uuid;

	return (
		<div className='px-8 sm:max-w-screen-lg sm:mx-auto'>
			<h1 className='mb-8 text-3xl leading-none '>{content.h1}</h1>
				<section className="mb-4 sm:mb-20">
					<div className='pb-4 border-b-2 border-black sm:pb-16'>
						<p className='text-2xl leading-tight font-light mb-4 sm:w-3/5'>{content.p[0]}</p>
						<select 
								className="inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none"
								defaultValue={optimisticProjectId}
								id="uuid" 
								name="uuid">
								{
									subProjects.map((subProject: SubProject) => {
										return (
											<option value={subProject.uuid}>{subProject.name}</option>
										)
									})
								}
							</select>
					</div>
				</section>
				<section className="mb-4 sm:mb-20">
					<div className='pb-6 border-b-2 border-black sm:pb-16'>
						<div className='sm:flex sm:items-center'>
							<p className='text-2xl leading-tight font-light mb-4 sm:w-3/5'>{content.p[1]}</p>
							<div className='sm:w-2/5 sm:text-right'>
								<Cta linkTo={`/offset-products?subProjectId=${optimisticProjectId}`} text={content.cta.offsetYourProducts}/>
							</div>
						</div>
					</div>
				</section>
				<section className='sm:max-w-screen-lg sm:mx-auto '>
				<div className='pb-6 sm:pb-16'>
						<div className='sm:flex sm:items-center'>
							<p className='text-2xl leading-tight font-light mb-4 sm:w-3/5'>{content.p[2]}</p>
							<div className='sm:w-2/5 sm:text-right'>
								<Cta linkTo={`/offset-products?subProjectId=${optimisticProjectId}`} text={content.cta.offsetYourCarbon}/>
							</div>
						</div>
					</div>
				</section>
		</div>
	)
}

// EOF!
