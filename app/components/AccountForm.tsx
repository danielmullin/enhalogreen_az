import { FetcherWithComponents, Form, useFetcher } from '@remix-run/react';
import { Account } from '~/models/account.model';
import Button from './Button';

export interface AccountFormProps {
  account: Account;

}

export default function AccountForm(props: AccountFormProps):JSX.Element
{
const { account } = props;
const fetcher:FetcherWithComponents<any> = useFetcher();
let optimisticEmailAddress: string = account.contact.emailAddress;
let optimisticFirstName: string = account.contact.firstName;
let optimisticLastName: string = account.contact.lastName;
let optimisticPhoneNumber: string = account.contact.phoneNumber;
let optimisticEdit = false;

if(fetcher.formData) {
  optimisticEmailAddress = String(fetcher.formData.get('emailAddress'));
  optimisticFirstName = String(fetcher.formData.get('firstName'));
  optimisticLastName = String(fetcher.formData.get('lastName'));
  optimisticPhoneNumber = String(fetcher.formData.get('phoneNumber'));
  optimisticEdit = Boolean(fetcher.formData.get('edit') == 'true' ? 'false' : 'true' );
}

  return (
    <>
    <fetcher.Form 
      action="/account-update"
      className="w-full flex flex-wrap px-8 sm:max-w-screen-lg sm:mx-auto text-light-black "
      method="post"
      onSubmit={(e) => { if(optimisticEdit == true) fetcher.submit(e.currentTarget, { replace: true }) } }
    >
      <input name="accountUuid" type="hidden" defaultValue={account.uuid} />
      <div className='mb-8'>
        <label>Email Address</label>
        {optimisticEdit ?
          <input
            className={ (fetcher.state === 'submitting' ) ?
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none text-black" }              
            name="emailAddress" type="text" defaultValue={optimisticEmailAddress} />
          : 
          <div className='pt-4 pl-2 mb-2'>
            {optimisticEmailAddress}
          </div>
        } 
      </div>
      <div className='w-47.5 mr-[5%] mb-8'>
        <label>First name</label>
        {optimisticEdit ?
          <input
            className={ (fetcher.state === 'submitting' ) ?
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none" }              
            name="firstName" type="text" defaultValue={optimisticFirstName} />
          : 
          <div className='pt-4 pl-2 mb-2'>
            {optimisticFirstName}
          </div>
        } 
      </div>
      <div className='w-47.5 mb-8'>
      <label>Last name</label>
        {optimisticEdit ?
          <input
            className={ (fetcher.state === 'submitting' ) ?
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none" }              
            name="lastName" type="text" defaultValue={optimisticLastName} />
          : 
          <div className='pt-4 pl-2 mb-2'>
            {optimisticLastName}
          </div>
        } 
      </div>
      <div className='mb-8'>
      <label>Phone number</label>
        {optimisticEdit ?
          <input
            className={ (fetcher.state === 'submitting' ) ?
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none":
            "bg-gray-50/50 inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none" }              
            name="phoneNumber" type="text" defaultValue={optimisticPhoneNumber} />
          : 
          <div className='pt-4 pl-2 mb-2'>
            {optimisticPhoneNumber}
          </div>
        } 
      </div>
      <div className='w-full'>
      </div>
      <div className='w-full flex justify-center sm:h-14'>
      {optimisticEdit ?
        <div className='w-1/2'>
          <Button text="Submit" type="submit"/>
          <input name="edit" title="edit" type="hidden" value="false"/>
        </div> 
        :
        <div className='w-1/2'>
          <Button text="Edit" type="submit"/>
        </div>
      }
    </div>
    </fetcher.Form>
  </>
  );
}
