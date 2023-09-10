import Block from './Block';

export interface ProductVisualisationProps {
  error: boolean;
  sequence: number;
  units: number;
  total: number;
}

const ProductVisualisation = (props: ProductVisualisationProps): React.ReactElement => {
  const { sequence, total, units} = props;
  const beginAllocation = Number(sequence - 1 ) * Number(units);
  let opacity = 100;
  
  return (
    <>
      <div className="{error? null: ' hidden'}">An Error has occurred</div>
      <div className='flex flex-wrap px-8'>
        {Array.from ({ length: 100 }, (_, index) => (
          // (index > 200) ? opacity = 50
          // :
          (index + 1 <= (beginAllocation)) ?
          //less than begin, green
          <Block endAllocation={false} opacity={opacity} startAllocation={false} beginAllocation={beginAllocation}></Block> 
          :
          //in between begin + units, gold
            ((index + 1) <= Number(beginAllocation) + Number(units)) ?
            <Block endAllocation={false} opacity={opacity} startAllocation={true} beginAllocation={beginAllocation}></Block> 
            : 
            //above begin+units
              <Block endAllocation={true} opacity={opacity} startAllocation={false} beginAllocation={beginAllocation}></Block> 
        ))}
      </div>
    </>
    );
  };

export default ProductVisualisation;

// EOF!