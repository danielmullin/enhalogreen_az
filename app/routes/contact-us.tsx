import { useLoaderData } from "@remix-run/react";
import ContactForm from "../components/ContactForm";
import forest from "../images/enhalo_forest.jpg";
import { retrieve } from "~/models/account.model";

export const loader = async ({}) => {
  const account = await retrieve(
    "b005e055-5343-ee11-be6d-000d3ad4d529",
    null,
    null,
  );

  return {
    account,
  };
};

export default function Contact() {
  const { account } = useLoaderData<typeof loader>();
  const content = require("app/content/contact-us.json");

  return (
    <>
      <img
        src={forest}
        className="absolute h-[100vh] -z-20 top-0 object-cover sm:w-full "
      />
      <div className="text-white px-8 sm:max-w-screen-sm sm:mx-auto">
        <h1 className="mb-8 text-3xl leading-none ">{content.h1}</h1>
        <ContactForm account={account} content={content} />
      </div>
    </>
  );
}
