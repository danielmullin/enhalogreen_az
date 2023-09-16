import { useLoaderData } from '@remix-run/react';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import ContactForm from '../components/ContactForm';
import contactBg from '../images/contact_bg.jpg';


export const action: ActionFunction = async ({ params, request }) => {
      return ({ 
   })
}

export const loader = async ({ params, request }) => {
  return ({
  });
};

export default function Contact() {
  const  actionData = useActionData();
  return (
    <section className="text-white">
    <img src={contactBg} className="absolute z-[-1] h-full"/>
      <div className='pt-20 px-8 mb-8'>
        <h1 className="text-3xl mb-6">Let’s build a carbon ecosystem</h1>
        <p className='text-xl leading-tight'>Join us to build a credible, secure and transparent carbon ecosystem. Whether you are planning a project, seeking to verify carbon capture or looking for certified carbon credits, we can help – and together we can bring trust to carbon markets and help them fulfil their world-saving potential.</p>
      </div>
      <div>
          <ContactForm />
      </div>
    </section>
  );
}
