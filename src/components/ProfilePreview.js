/** @jsx jsx */
import { jsx } from "theme-ui";
import { navigate } from '../../.cache/gatsby-browser-entry'

const ProfilePreview = ({ ...props }) => {
  const { id, image, name, index } = props;
  const goToDetails = () => {
    navigate(`/details/${id}`)
  }
  return (
    <div
      role="button"
      tabIndex={index}
      onClick={goToDetails}
      onKeyDown={goToDetails}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&:hover": {
          opacity: "1 !important",
          '&img': {
            boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
            transition: "box-shadow 0.35s ease-in-out"
          },
          '> div': {
            fontWeight: 'bold'
          }
        }
      }}
    >
      <img
        sx={{ width: "150px", borderRadius: "50%" }}
        alt={name}
        src={image}
      />
      <div>{name}</div>
    </div>
  );
};

export default ProfilePreview;
