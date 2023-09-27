import type { ActionArgs, LoaderArgs } from '@remix-run/node'; // or cloudflare/deno
import { useParams } from '@remix-run/react';
import forest from '../images/enhalo_forest.jpg';

// export const loader = async ({ params }: LoaderArgs) => {
//   console.log(params["*"]);
// };

// export const action = async ({ params }: ActionArgs) => {
//   console.log(params["*"]);
// };

export default function PostRoute() {
	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			<div className="px-8 text-white">We are sorry the page you are looking for does not exist</div>
		</>
	);
}
