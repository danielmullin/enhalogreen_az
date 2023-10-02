import { Link, useMatches } from '@remix-run/react';

export default function Footer(): JSX.Element {
	return (
		<footer className="min-h-20 sm:min-h-10 w-full bg-black text-base text-white">
			<div className="min-h-20 sm:min-h-10 m-auto max-w-960 flex-wrap justify-between sm:flex sm:items-center">
				<div className="py-8">
					<ul id="id" className="flex px-4">
						<li id="id" className="mr-2">
							<Link to="https://twitter.com/" className="nav-link">
								<a href="#" className="text-gray-500 hover:text-gray-900 dark:text-black dark:hover:text-white">
									<svg
										className="h-10 w-10 rounded-full border bg-white p-1"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
									</svg>
								</a>{' '}
							</Link>
						</li>
						<li id="menu-item-91" className="">
							<Link to="https://www.linkedin.com/" className="nav-link">
								<a href="#" className="text-gray-500 hover:text-gray-900 dark:text-black dark:hover:text-white">
									<svg
										className="h-10 w-10 rounded-full border bg-white p-1"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{' '}
									</svg>
								</a>{' '}
							</Link>
						</li>
					</ul>
				</div>
				<div className="pb-8 sm:py-8">
					<ul id="menu-terms-links" className="px-4">
						<li id="menu-item-179" className="className">
							<Link to="https://enhalogreen.com/privacy-policy/" aria-current="page">
								Privacy Policy &amp; Terms of Use
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
{
	/* <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg> */
}
