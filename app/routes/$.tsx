import type {
  ActionArgs,
  LoaderArgs,
} from "@remix-run/node"; // or cloudflare/deno
import { useParams } from "@remix-run/react";
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
			<img src={forest} className="absolute h-[100vh] -z-20 top-0 object-cover sm:w-full "/>
			<div className="text-white px-8">We are sorry the page you are looking for does not exist</div>
		</>
	)
}	
