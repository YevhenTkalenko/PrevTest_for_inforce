import { Post_Interface } from "../Hooks/useFetch";
import "./ForwardBackButtons.css";

interface Props {
  sliceForward: () => void;
  sliceBack: () => void;
  slice: Array<number>;
  postData: Post_Interface[];
}
const ForwardBackButtons = ({
  slice,
  sliceForward,
  sliceBack,
  postData,
}: Props) => {
  return (
    <>
      <div className="container_btn">
        <button onClick={sliceBack} disabled={slice[0] < 10}>
          Back
        </button>
        <button
          onClick={sliceForward}
          disabled={slice[1] > postData.length - 10}
        >
          Forward
        </button>
      </div>
    </>
  );
};
export default ForwardBackButtons;
