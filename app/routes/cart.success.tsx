import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUserUuid, requireUserToken } from '~/session.server';
import Cta from '~/components/Cta';

export async function loader({ request }: LoaderArgs) {
	const token = await requireUserToken(request),
		userUuid = await getUserUuid(request);

	return { userUuid };
}

export default function CartSuccess() {
	const { userUuid } = useLoaderData<typeof loader>();
	const content = require('app/content/cart-success.json');

	return (
		<div className="mt-110 min-h-70 pt-8 sm:mx-auto sm:min-h-80 sm:max-w-screen-lg">
			<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
				<section className="mb-4 sm:mx-auto sm:max-w-screen-lg">
					<div className="">
						<h1 className="mb-6 text-3xl leading-none sm:mb-8">{content.h1}</h1>
						<p className="mb-8 text-xl">{content.p[0]}</p>
						<p className="mb-8 text-xl">{content.p[1]}</p>
						<p className="mb-8 text-xl">
							{content.p[2]}{' '}
							<a className="text-xl hover:text-blue-800" href="mailto:someone@example.com">
								{content.a}
							</a>
						</p>
					</div>
				</section>
				<section className="mx-auto mb-8 flex w-full justify-around sm:mx-auto sm:w-full sm:max-w-screen-lg sm:flex-row">
					<div className="mb-4 w-5/12">
						<Cta linkTo={`/account?accountUuid=${userUuid}`} text={'Account'} type={'secondary'} />
					</div>
					<div className="mb-4 w-5/12 ">
						<Cta linkTo={`/accounts/${userUuid}/transactions/`} text={'Transactions'} type={'primary'} />
					</div>
				</section>
			</div>
		</div>
	);
}
