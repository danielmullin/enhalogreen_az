export default function validateEmailAddress(emailAddress: string): boolean
{
  //chatgpt for valid email address needed
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return !!pattern.test(emailAddress);
}

// EOF
