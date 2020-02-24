/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import ProfilePreview from "../components/ProfilePreview";
import { useState } from "react";

const BUDDIES = gql`
  query BuddiesSearchQuery($filter: String!) {
    buddies(where: { name_contains: $filter }) {
      id
      name
      image
    }
  }
`;

const Index = ({ ...props }) => {
  const [filter, setFilter] = useState("");
  const { data } = useQuery(BUDDIES, { variables: { filter } });
  const buddies = data ? data.buddies : [];
  return (
    <Box sx={{ fontFamily: "heading" }}>
      <Navigation />
      <Search onChange={e => setFilter(e.target.value)} />
      <div sx={{ maxWidth: "1000px", margin: "auto" }}>
        <h1 sx={{ paddingLeft: "100px" }}>Fresh cryptobuddies</h1>
        <div
          sx={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fill, 200px)",
            justifyContent: "center",
            "&:hover div": {
              opacity: 0.5,
              transition: "opacity 0.5s ease-in-out"
            }
          }}
        >
          {buddies.map((buddy, i) => (
            <ProfilePreview key={i} {...buddy} index={i} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Index;
