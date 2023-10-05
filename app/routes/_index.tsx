//import { redirect } from '@remix-run/node';
//import { requireUserToken } from '~/session.server';
import Cta from '../components/Cta';
import accelerating from '../images/intro_accelerating.jpg';
import attributing from '../images/intro_attributing.jpg';
import forest from '../images/enhalo_forest.jpg';
import modelling from '../images/intro_modelling.jpg';
import providing from '../images/intro_providing.jpg';
import tracking from '../images/intro_tracking.jpg';
import trading from '../images/intro_trading.jpg';
import ricky from '../images/ricky_magalhaes.png';
import manuel from '../images/manuel_saenz.png';
import paul from '../images/paul_atherton.png';
import carl from '../images/carl_corbel.png';
import cristos from '../images/cristos_valerkou.png';
import darkBlackCarbon from '../images/dark_black_carbon.gif';
import darkGreenCarbon from '../images/dark_green_carbon.gif';
import stabiliti from '../images/stabiliti.gif';
import regenerationEarth from '../images/regeneration_earth.gif';
import { useEffect, useRef, useState } from 'react';

export function meta({ matches }) {
	const rootMeta = matches[0].meta;
	const charset = rootMeta.find((m: { charset: string }) => m.charset);
	const name = rootMeta.find((m: { name: string }) => m.name);
	const siteName = rootMeta.find((m: { property: string }) => m.property);
	const locale = rootMeta.find((m: { property: string }) => m.property === 'og:locale');

	return [
		charset,
		name,
		{ title: 'EnhaloGreen - Building trust in the carbon ecosystem' },
		{ name: 'description', content: 'Building trust in the carbon ecosystem' },
		{
			tagName: 'link',
			rel: 'canonical',
			href: 'https://enhalogreen.com',
		},
		locale,
		{ property: 'og:type', content: 'website' },
		{ property: 'og:title', content: 'Enhalo Green' },
		{
			property: 'og:description',
			content:
				'We develop and share digital tools that deliver agility and credibility to carbon initiatives, and build confidence in the carbon ecosystem.',
		},
		{ property: 'og:url', content: 'https://enhalogreen.com/' },
		siteName,
		{
			'script:ld+json': {
				context: 'https://schema.org',
				name: 'Enhalo Green',
				type: 'Organization',
				url: 'https://enhalogreen.com',
			},
		},
	];
}

export const loader = async ({ params, request }) => {
	return [];
};

export default function Index() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [count, setCount] = useState('0');
	const [scrollY, setScrollY] = useState(0);
	const ref = useRef(null);
	const [counterFlag, setCounterFlag] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			ref.current.dataset.scroll = window.scrollY;
			setScrollY(window.scrollY);
		});
		const skillsIntersectObserver = new IntersectionObserver(([entry]) => {
			ref.current.dataset.clients = ref.current.getBoundingClientRect().y;
			ref.current.dataset.intersecting = entry.isIntersecting;
			setIsIntersecting(entry.isIntersecting);
		});
		skillsIntersectObserver.observe(ref.current);
		return () => {
			skillsIntersectObserver.disconnect();
		};
	}, []);

	const number = '75',
		duration = 1,
		counter = () => {
			let start = 0;
			const end = parseInt(number.substring(0, 3));
			// if (start === end) return;
			let incrementTime = (duration / end) * 1000;

			let timer = setInterval(() => {
				start += 1;
				setCount(String(start) + number.substring(3));
				if (start === end) clearInterval(timer);
			}, incrementTime);
			setCounterFlag(false);
		};

	if (isIntersecting && counterFlag) {
		counter();
	}

	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			{/* <div className="sm:mx-auto sm:max-w-screen-lg"> */}
			<section className="mb-8 flex min-h-[100vh] flex-wrap px-8 pb-4 text-white sm:mx-auto sm:max-w-screen-lg sm:pr-36">
				<div className="mb-8">
					<div className="mb-40 pt-20 sm:mb-28 sm:pt-32">
						<h1 className="mb-6 text-3xl sm:mb-24 sm:text-6xl">Building trust in the carbon ecosystem</h1>
						<p className="mb-4 text-xl leading-tight">
							EnhaloGreen develops and shares digital tools that deliver agility and credibility to carbon initiatives, and build
							confidence in the carbon ecosystem.
						</p>
						<p className="mb-4 text-xl leading-tight sm:mb-16">
							Our complete carbon solution gives users anywhere in the world – from governments and corporates to landowners, charities
							and individuals – transparency, accountability and compliance.
						</p>
					</div>
					<div className="mb-4 sm:mb-20">
						<Cta linkTo="/projects" text={'Reduce your footprint now'} type="primary" />
					</div>
				</div>
			</section>
			<section className="relative z-[-30] flex flex-wrap bg-white px-8 pt-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:max-w-screen-lg sm:px-0 sm:pt-0">
				<h2 className="mb-8 text-2.5xl font-medium leading-7">
					EnhaloGreen empowers organisations to commit to carbon offsetting and play their part in addressing climate change.
				</h2>
				<p className="mb-4">
					For carbon offsetting to be an effective tool in decarbonisation, carbon markets need infrastructure that is secure, transparent
					and trusted. And they need it now. Our digital platform enables organisations to robustly measure, verify and track carbon
					sequestration, and to extract additional value through the commercialisation of carbon credits.
				</p>
			</section>
			<section className="relative z-[-30] mb-8 flex flex-wrap bg-white px-8 pt-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:max-w-screen-lg sm:px-0">
				<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
					Accelerating verification and certification
				</h3>
				<div className="sm:flex sm:border-b sm:border-grey sm:pb-8">
					<div className="mb-4 pr-4 sm:w-1/2">
						<p className="mb-4 text-xl leading-tight">
							Friction and red tape are among the greatest obstacles to the adoption and mainstreaming of climate-positive initiatives.
						</p>
						<p className="text-1">
							EnhaloGreen’s digital platform automates and dramatically accelerates key steps in the carbon verification and
							certification process, giving near real-time analysis to capture and certify carbon for the voluntary market. This reduces
							the cost of entry for landowners, farmers and project developers, democratising the market and opening the door to smaller
							projects. We partner with licensed independents to rigorously validate and verify that producers are adhering to the
							relevant codes, including the UK Carbon Code in the UK.
						</p>
					</div>
					<div className="sm:w-1/2 sm:pl-8">
						<img src={accelerating} />
					</div>
				</div>
			</section>
			<section className="mb-8 flex flex-wrap px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:max-w-screen-lg sm:px-0">
				<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
					Providing a reliable, secure carbon registry
				</h3>
				<div className="sm:flex sm:border-b sm:border-grey sm:pb-8">
					<div className="mb-4 sm:mb-0 sm:w-1/2 sm:pr-8">
						<p className="mb-6 text-xl leading-tight">
							What is it, where is it and who owns it? Carbon credits can only succeed when the answers to these questions are
							definitively captured, stored and made accessible.
						</p>
						<p className="mb-4 text-1">
							EnhaloGreen’s Carbon registry delivers transparency and security, giving stakeholders certainty of the fidelity and
							provenance of captured carbon.
						</p>
						<p className="text-1">
							Certified and registered carbon is visible and traceable, providing the assurance that corporates require before
							purchasing carbon credits or engaging with offsetting programmes and putting their money and their reputations on the
							line. Our platform supports carbon credit transactions of all sizes, as well as long-term subscriptions, giving users
							complete control over their offsetting strategies.
						</p>
					</div>
					<div className="sm:w-1/2 sm:pl-8">
						<img src={providing} />
					</div>
				</div>
			</section>
			{/* <div className="sm:pb sm:mx-auto sm:mb-12 sm:flex sm:max-w-screen-lg sm:border-b sm:border-grey sm:pb-8"> */}
			<div className="sm:mx-auto sm:mb-8 sm:flex sm:max-w-screen-lg sm:border-b sm:border-grey sm:pb-8">
				<section className="mb-8 px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:mb-0 sm:w-1/2 sm:max-w-screen-lg sm:pl-0 sm:pr-8">
					<div className="flex flex-wrap sm:flex sm:justify-between">
						<h3 className="mb-6 whitespace-pre-wrap text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
							Trading carbon credits in a secure, accessible marketplace
						</h3>
						<div>
							<p className="mb-4 text-1">
								EnhaloGreen’s online carbon marketplace enables users to see, purchase and retire verified carbon credits with full
								transparency and traceability.
							</p>
							<p className="mb-4 text-1">
								We create project-specific marketplaces for individual carbon sequestration projects, countries and regions as
								required. Users can offset their carbon footprint against carbon credits in our registry with functionality allowing
								them to select and review project details, locations and the relevant certification process. Our marketplaces also
								feature full settlement functionality, ensuring that project developers and landowners receive revenues they have
								earned through climate-positive activities.
							</p>
						</div>
						<div>
							<img src={trading} />
						</div>
					</div>
				</section>
				<section className="mb-8 px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:mb-0 sm:w-1/2 sm:max-w-screen-lg sm:pl-8 sm:pr-0 ">
					<div className="flex flex-wrap sm:flex sm:h-full sm:justify-between ">
						<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:mb-0 sm:text-2xl">
							Tracking carbon on the blockchain
						</h3>
						<div>
							<p className="mb-4 text-1">
								EnhaloGreen uses CarbonTracker – software developed with Stabiliti, a sister company and blockchain provider – to
								accurately capture carbon origin and location, asset value, and ownership and transfer across complex carbon
								ecosystems at scale. CarbonTracker guarantees the integrity of the carbon capture process, providing immutability and
								transparency to market participants.
							</p>
						</div>
						<div className=" self-end">
							<img src={tracking} />
						</div>
					</div>
				</section>
			</div>
			{/* <div className="w-full sm:mx-auto sm:mb-8 sm:max-w-[calc(1024px-4rem)] sm:border-b sm:border-grey"></div> */}
			<section className="mb-8 flex flex-wrap px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:max-w-screen-lg sm:px-0">
				<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
					Carbon code compliance
				</h3>
				<div className="sm:pb sm:mx-auto sm:flex sm:max-w-screen-lg sm:border-b sm:border-grey sm:pb-8">
					<div className="sm:w-1/2 sm:pr-8">
						<p className="mb-4 text-1">
							EnhaloGreen’s digital platform delivers rapid and robust certification in line with all reputable carbon codes, including:
						</p>
						<ul className="mb-8 list-disc pl-8 text-1 sm:mb-0">
							<li>UK Carbon Code</li>
							<li>UK Woodland Carbon Code</li>
							<li>UK Peatland Code</li>
							<li>Soil Carbon Code</li>
							<li>Congo Brazzaville Carbon Code</li>
						</ul>
					</div>
					<div className="sm:w-1/2 sm:border-l sm:border-grey sm:pl-8">
						<p ref={ref} className="mb-4 text-center text-9xl font-medium">
							{count}%
						</p>
						<p className="mb-4 text-1">
							of SMEs agreed employees care that the business behaves sustainably and reduces its impact on the climate
						</p>
					</div>
				</div>
			</section>
			<div className=" sm:mx-auto sm:flex sm:max-w-screen-lg sm:pb-8">
				<section className="mb-8 flex flex-wrap px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:w-1/2 sm:max-w-screen-lg sm:pl-0 sm:pr-8">
					<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
						Attributing carbon per product
					</h3>
					<div className="sm:flex sm:flex-col sm:justify-between sm:pb-8">
						<div>
							<p className="mb-4 text-1">
								As emissions reporting requirements become more exacting – and carbon comes to play a larger role in consumer
								decision-making – accounting for carbon at the per-product level will become both more important and more attractive.
							</p>
							<p className="mb-4 text-1">
								EnhaloGreen’s platform supports carbon fractionalisation – the accurate attribution of offset carbon to a specific
								product or unit throughout the entire supply chain. Consumers at both the corporate and retail level can see and
								reliably report the carbon that was sequestered to offset their purchase – whether that’s a mile of electric cable for
								a home builder or a can of beer for a student.
							</p>
						</div>
						<div>
							<img src={attributing} />
						</div>
					</div>
				</section>
				<section className="mb-8 flex flex-wrap px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:w-1/2 sm:max-w-screen-lg sm:pl-8 sm:pr-0">
					<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
						Modelling carbon capture in real time
					</h3>
					<div className="sm:flex sm:flex-col sm:justify-between sm:pb-8">
						<div>
							<p className="mb-4 text-1">
								EnhaloGreen’s CarbonTracker software, delivered with Stabiliti, gives users real-time understanding of carbon capture,
								including the potential for digital-twin desktop views. Combining unique geo-location with complex sampling and
								forecasting, users can track carbon from end to end – from traded credits to carbon in the ground, biomass or any
								other form of sequestration.
							</p>
						</div>
						<img src={modelling} />
					</div>
				</section>
			</div>
			<section className=" mb-8 bg-intro-about pb-8 pt-4 text-xl font-light leading-tight text-black" id="about">
				<div className="px-8 sm:mx-auto sm:max-w-screen-lg ">
					<div>
						<h3 className="mb-6 text-2xl font-medium underline decoration-intro decoration-2 underline-offset-8 sm:text-2xl">
							About EnhaloGreen
						</h3>
						<p className="mb-4 text-xl leading-tight">
							EnhaloGreen was born out of a recognition that technology can play a vital enabling role in accelerating the acceptance
							and mainstreaming of carbon markets. By eliminating the obstacles and delays that have beset the sector to date,
							EnhaloGreen to supports new entrants and builds confidence in the fidelity of carbon available for sale to organisations
							looking to credibly offset their emissions.
						</p>
						<p className="mb-4 text-1">
							Organisations, individuals and the media will only truly believe in carbon offsetting as a viable climate-change strategy
							when the markets can demonstrate their integrity and security. With our origins in cyber-security, supporting banks,
							financial institutions and others, Enhalo is well-placed to deliver the tools necessary to bring these markets to maturity
							and to encourage new entrants by providing infrastructure that is easy to access, reliable and trusted. So we established
							EnhaloGreen and set out to partner with organisations across the carbon ecosystem and around the world – from soil
							scientists and laboratories to landowners and innovative corporates – to help realise the potential of carbon offsetting
							in addressing the urgent issues of climate change and decarbonisation.
						</p>
						<h3 className="mb-6 text-2xl leading-tight">Our mission</h3>
						<p className="mb-8 text-1">
							To develop and share digital tools that support an agile, credible and secure carbon ecosystem, accelerating the
							normalisation of carbon offsetting and encouraging more participants to enter the carbon markets.
						</p>
						<h3 className="mb-6 text-2xl leading-tight">The EnhaloGreen team</h3>
					</div>
					<div className="mb-4 text-center">
						<div className="flex flex-wrap justify-between">
							<div className="w-5/12 sm:w-1/6">
								<a>
									<img src={ricky} className="mb-2"></img>
									<p className="mb-1 text-1 underline">Ricky Magalhaes</p>
									<p className="mb-12 text-1 underline">Founder and CEO</p>
								</a>
							</div>
							<div className="w-5/12 sm:w-1/6">
								<a>
									<img src={manuel} className="mb-2 w-full"></img>
									<p className="mb-1 text-1 underline">Manuel Saenz</p>
									<p className="mb-12 text-1 underline">Founder and Director</p>
								</a>
							</div>
							<div className="w-5/12 sm:w-1/6">
								<a>
									<img src={paul} className="mb-2"></img>
									<p className="mb-1 text-1 underline">Paul Atherton</p>
									<p className="mb-12 text-1 underline">Founder and Director</p>
								</a>
							</div>
							<div className="w-5/12 sm:w-1/6">
								<a>
									<img src={carl} className="mb-2"></img>
									<p className="mb-1 text-1 underline">Carl Corbel</p>
									<p className="mb-12 text-1 underline">Director</p>
								</a>
							</div>
							<div className="w-5/12 sm:w-1/6">
								<a>
									<img src={cristos} className="mb-2"></img>
									<p className="mb-1 text-1 underline">Cristos Valerkou</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-8 flex flex-wrap px-8 text-xl font-light leading-tight text-intro sm:mx-auto sm:max-w-screen-lg">
				<h3 className="mb-6 text-2xl font-medium text-intro-underline underline decoration-intro-underline decoration-2 underline-offset-8 sm:text-2xl">
					Our Partners
				</h3>
				<div className="sm:flex sm:flex-wrap">
					<div className="sm:w-1/4 sm:pr-4">
						<img src={darkGreenCarbon} className="mb-8" />
						<p className="mb-4 text-1">
							DarkGreen Carbon (DGC) is an end-to-end carbon removal solution focusing on soil carbon. It combines consultancy in
							regenerative land management practices that accelerate and amplify carbon sequestration with robust measurement and
							verification and an EnhaloGreen carbon registry and marketplace that allows corporate offsetters to purchase certified
							carbon credits.
						</p>
					</div>
					<div className="sm:w-1/4 sm:px-4">
						<img src={stabiliti} className="mb-8" />
						<p className="mb-4 text-1">
							Stabiliti has created a straightforward and low-friction approach to tokenising carbon, extending reach to new markets and
							creating new revenue opportunities. Carbon is tracked across the ecosystem from source, through the whole lifecycle,
							including the downstream supply chain, ensuring confidence, accuracy and integrity. Participants in our ecosystem can
							realise a new level of assurance and attain unprecedented quality guarantees.
						</p>
						<p className="mb-2 text-1">• Stabiliti has developed powerful decentralised tracking and tracing in realtime</p>
						<p className="mb-4 text-1">
							• Offset management, insight and reporting for business across your organisation with our decentralised platform
						</p>
					</div>
					<div className="sm:w-1/4 sm:px-4">
						<img src={darkBlackCarbon} className="mb-8" />
						<p className="mb-4 text-1">
							EnhaloGreen’s CarbonTracker software, delivered with Stabiliti, gives users real-time understanding of carbon capture,
							including the potential for digital-twin desktop views. Combining unique geo-location with complex sampling and
							forecasting, users can track carbon from end to end – from traded credits to carbon in the ground, biomass or any other
							form of sequestration.
						</p>
					</div>
					<div className="sm:w-1/4 sm:pl-4">
						<div>
							<img src={regenerationEarth} className="mb-8" />
						</div>
						<p className="mb-4 text-1">
							Re-generation Earth works with land managers to help them unlock the potential in their land, help them build more
							financially and environmentally resilient businesses and help them benefit from the new income streams through carbon
							offset and biodiversity net gain (BNG) sales.
						</p>
					</div>
				</div>
			</section>
			{/* </div> */}
		</>
	);
}
