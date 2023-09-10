import { Form } from '@remix-run/react';

export interface ContactFormProps {
  // actionData:null;
}

export default function ContactForm(props: ContactFormProps):JSX.Element
{
// const { actionData } = props;

  return (
      <Form action="" method="post" className="w-full rounded bg-transparent flex flex-wrap px-8">
        <div className='w-47.5 mr-[5%]'>
          <label>
            <input name="firstName" placeholder="First name" type="text" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    placeholder
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='w-47.5'>
          <label>
            <input name="lastName" placeholder="Last name" type="text" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='w-full'>
          <label>
            <input name="organisation" placeholder="Organisation" type="text" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='w-full'>
          <label>
            <input name="position" placeholder="Position" type="text" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='w-full'>
          <label>
            <input name="emailAddress" placeholder="Email address" type="opportunityType" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='w-full'>
          <label>
            <textarea name="message" placeholder="How can we help you?" className="
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-20
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none"/>
          </label>  
        </div>
        <div className='flex items-center mb-2'>
          <input type='checkbox' className='mr-4'></input>
          <p className='text-[14px]'>Keep me up to date with developments at</p>
        </div>
        <p className='text-[14px] mb-2'>EnhaloGreen</p>
        <div className='w-full'>
          <button className='bg-blue-500'>SUBMIT</button>
        </div>
      </Form>
  );
}
