/** @jsx jsx */
import { jsx } from "theme-ui";

const Search = ({ ...onChange }) => (
  <div
    sx={{
      paddingLeft: "100px",
      width: "90px",
      "&:hover": { color: "grey" },
    }}
  >
    <input
      {...onChange}
      sx={{ fontSize: "50px", height: "100px", border: "0" }}
      placeholder={"Crypto buddies"}
    />
  </div>
);

export default Search;
