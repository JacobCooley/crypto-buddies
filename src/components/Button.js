/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = props => (
  <button
    sx={{
      height: "50px",
      width: "200px",
      backgroundColor: "purple",
      color: "white",
      fontSize: '20px',
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      border: 0,
    }}
  >
    {props.text}
  </button>
);

export default Button;
