export default function validateNumberOfProducts(numberOfProducts: number): boolean
{
  if(Number.isInteger(numberOfProducts) && numberOfProducts > 0) {
    return true;
  }
  return false;
}

// EOF
