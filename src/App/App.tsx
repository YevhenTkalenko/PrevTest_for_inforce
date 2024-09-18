import { useState } from "react";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import { Post_Interface, useFetch } from "./Hooks/useFetch";

interface Props {}

const App = (props: Props) => {
  const [input, setInput] = useState<string>("");
  const { postData } = useFetch("posts");
  const [filteredPostData, setFilteredPostData] = useState<Post_Interface[]>(
    []
  );

  const [isErrorSearch, setIsErrorSearch] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value.toLowerCase());
  };

  const filteredArray = () => {
    if (!input) {
      return setFilteredPostData([]);
    }

    if (!filteredPostData.length) {
      return setIsErrorSearch(true);
    }

    setIsErrorSearch(false);
    setFilteredPostData(
      postData.filter((el) => el.body.toLowerCase().startsWith(input))
    );
  };

  return (
    <>
      <Header
        handleChange={handleChange}
        input={input}
        filteredArray={filteredArray}
      />
      <Main
        postData={postData}
        filteredPostData={filteredPostData}
        isErrorSearch={isErrorSearch}
      />
    </>
  );
};
export default App;
