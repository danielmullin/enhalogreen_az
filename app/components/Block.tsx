import { FetcherWithComponents, Form, useFetcher } from "@remix-run/react";

export interface BlockProps {
  allocation: string;
  opacity: number;
  units: number;
}

const Block = (props: BlockProps) => {
  const { allocation, opacity, units } = props;
  const opacityClass = opacity;
  return (
    <>
      {"green" == allocation ? (
        <div className={`bg-block-green w-3u h-3u m-2 opacity-${opacityClass}`}></div>
      ) : "gold" == allocation ? (
        <Form method="post">
          <button type="submit" className={`bg-block-gold w-${units}u h-${units}u m-2 opacity-${opacityClass} flex`}></button>
          <input id="blockDetailShow" name="blockDetailShow" type="hidden" value="true" />
        </Form>
      ) : (
        <div className={`bg-block-grey w-${units}u h-${units}u m-2 opacity-${opacityClass}`}></div>
      )}
    </>
  );
};

export default Block;
