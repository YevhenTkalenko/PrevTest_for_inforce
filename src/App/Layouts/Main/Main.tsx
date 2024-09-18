import { useState } from "react";
import ProductList from "../../Components/ProductList";
import { Post_Interface } from "../../Hooks/useFetch";

interface Props {
  postData: Post_Interface[];
  filteredPostData: Post_Interface[];
  isErrorSearch: boolean;
}

const Main = ({ postData, filteredPostData, isErrorSearch }: Props) => {
  const [slice, setSlice] = useState<Array<number>>([0, 9]);
  const step: number = 10;

  const sliceForward = () => {
    setSlice((prevState) => [prevState[0] + step, prevState[1] + step]);
  };

  const sliceBack = () => {
    setSlice((prevState) => [prevState[0] - step, prevState[1] - step]);
  };

  return (
    <>
      <hr />
      <ProductList
        isErrorSearch={isErrorSearch}
        postData={postData}
        slice={slice}
        sliceForward={sliceForward}
        sliceBack={sliceBack}
        filteredPostData={filteredPostData}
      />
    </>
  );
};
export default Main;
