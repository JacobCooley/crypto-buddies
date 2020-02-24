/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import { Container } from "@theme-ui/components";

const BUDDY = gql`
  query BuddySearchQuery($id: ID!) {
    buddy(where: { id: $id }) {
      id
      name
      image
    }
  }
`;

const Details = props => {
  const { id } = props;
  const { data } = useQuery(BUDDY, { variables: { id } });
  const buddy = data && data.buddy;
  return (
    <Box sx={{ fontFamily: "heading" }}>
      <Navigation />
      <div sx={{ maxWidth: "1000px", margin: "auto" }}>
        {buddy && (
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <img
              sx={{ borderRadius: "50%" }}
              alt={buddy.name}
              src={buddy.image}
            />
            <div sx={{ marginLeft: "20px" }}>
              <div sx={{ fontSize: "80px" }}>{buddy.name}</div>
              <Button text={"Add Buddy"} />
            </div>
          </Container>
        )}
      </div>
    </Box>
  );
};

export default Details;
