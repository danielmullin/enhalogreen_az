export default function validateString(string: string): boolean
{
  //chatgpt for valid message up to 255 characters
const pattern = /^[\s\S]{1,255}$/;
  return !!pattern.test(string);
}

// EOF
