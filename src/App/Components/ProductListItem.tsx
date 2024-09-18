import { Card, CardContent, Grid } from "@mui/material";

interface Props {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const ProductListItem = ({ id, userId, title, body }: Props) => {
  return (
    <>
      <Grid item key={userId} md={3}>
        <Card>
          <CardContent>
            <div>{title}</div>
            <div>id: {userId}</div>
            <hr />
            <div>
              <b>{body}</b>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default ProductListItem;
