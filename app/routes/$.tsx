import forest from '../images/enhalo_forest.jpg';

export default function PostRoute() {
	return (
		<>
			<img src={forest} className="absolute top-0 -z-20 h-[100vh] object-cover sm:w-full " />
			<div className=" min-h-80 px-8 pt-20 text-white sm:min-h-[90vh]">We are sorry the page you are looking for does not exist</div>
		</>
	);
}
