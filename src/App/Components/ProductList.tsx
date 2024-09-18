import { Container, Grid } from "@mui/material";
import { Post_Interface, useFetch } from "../Hooks/useFetch";
import { BallTriangle } from "react-loader-spinner";
import ProductListItem from "./ProductListItem";
import ForwardBackButtons from "./ForwardBackButtons";
import { Fragment } from "react/jsx-runtime";

interface Props {
  slice: Array<number>;
  sliceForward: () => void;
  sliceBack: () => void;
  postData: Post_Interface[];
  filteredPostData: Post_Interface[];
  isErrorSearch: boolean;
}

const ProductList = ({
  slice,
  sliceForward,
  sliceBack,
  postData,
  filteredPostData,
  isErrorSearch,
}: Props) => {
  const { isLoading, isError } = useFetch("posts");

  if (isError) {
    return (
      <Container>
        <h2>Sorry, something went wrong</h2>
      </Container>
    );
  }

  return (
    <Container>
      <ForwardBackButtons
        slice={slice}
        sliceForward={sliceForward}
        sliceBack={sliceBack}
        postData={postData}
      />
      {isErrorSearch ? (
        <h2>Sorry, no posts. Try again</h2>
      ) : (
        <Grid container spacing={2}>
          {isLoading ? (
            <BallTriangle />
          ) : (
            <>
              {filteredPostData.length
                ? filteredPostData.map((post: Post_Interface) => (
                    <Fragment key={post.id}>
                      <ProductListItem
                        id={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                      />
                    </Fragment>
                  ))
                : postData
                    .slice(slice[0], slice[1])
                    .map((post: Post_Interface) => (
                      <Fragment key={post.id}>
                        <ProductListItem
                          id={post.id}
                          userId={post.userId}
                          title={post.title}
                          body={post.body}
                        />
                      </Fragment>
                    ))}
            </>
          )}
        </Grid>
      )}
    </Container>
  );
};
export default ProductList;
