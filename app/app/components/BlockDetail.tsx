import { Form } from "@remix-run/react";
import Button from "./Button";

export interface BlockDetailProps {
  name: string;
  quantity: number;
  sequence: number;
  units: number;
}

const BlockDetail = (props: BlockDetailProps) => {
  const { name, quantity, sequence, units } = props;

  return (
    <Form>
      <div className="w-40 h-40 bg-white bg-opacity-70 absolute top-[calc(10vh+2.5rem)] left-[calc(50vw-5rem)] text-center p-4 flex justify-between flex-col sm:w-80">
        <div className="flex justify-between">
          <p>{name}</p>
          <p>
            {sequence}/{quantity}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Units</p>
          <p>{units}</p>
        </div>
        <div>
          <Button type={"submit"} text={"Close"} />
          <input id="blockDetailShow" name="blockDetailShow" type="hidden" value="false" />
        </div>
      </div>
    </Form>
  );
};

export default BlockDetail;
