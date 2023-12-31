import Cta from '~/components/Cta';

export default function CartSuccess() {
	const content = require("app/content/cart-success.json");

	return (
		<div className="min-h-screen text-light-black">
			<div className="px-8 sm:mx-auto sm:max-w-screen-lg">
				<section className="mb-4 sm:mx-auto sm:max-w-screen-lg">
					<div className="">
						<h1 className="mb-6 text-3xl leading-none sm:mb-8">{content.h1}</h1>
						<p className="mb-8 text-xl">{content.p[0]}</p>
						<p className="mb-8 text-xl">{content.p[1]}</p>
						<p className="mb-8 text-xl">{content.p[2]}{" "}
							<a className="text-xl hover:text-blue-800" href="mailto:someone@example.com">
							{content.a}
							</a>
						</p>
					</div>
				</section>
				<section className="mx-auto mb-8 flex w-full justify-around sm:mx-auto sm:w-full sm:max-w-screen-lg sm:flex-row">
					<div className="mb-4 w-2/5">
						<Cta linkTo={`/offset-products?subProjectId`} text={'Account'} type={'secondary'} />
					</div>
					<div className="mb-4 w-2/5">
						<Cta linkTo="/accounts/8f25fdff-6705-ee11-8f6d-000d3ad4d529/transactions/" text={'Account Transactions'} type={'primary'} />
					</div>
				</section>
			</div>
		</div>
	);
}
