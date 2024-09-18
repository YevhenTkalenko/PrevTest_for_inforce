import { Container } from "@mui/material";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  filteredArray: () => void;
}

const Header = ({ handleChange, input, filteredArray }: Props) => {
  return (
    <Container
      sx={{
        marginBottom: "20px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <label>
        <input type="text" value={input} onChange={(e) => handleChange(e)} />
        <button onClick={filteredArray}>Search</button>
      </label>
    </Container>
  );
};
export default Header;
