/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { navigate } from "../../.cache/gatsby-browser-entry";

const Navigation = ({ ...props }) => (
  <Box onClick={() => navigate("/")} sx={{ padding: "40px" }}>
    <img src="/logo.png" alt="Logo" sx={{ height: "24px", width: "auto" }} />
  </Box>
);

export default Navigation;
