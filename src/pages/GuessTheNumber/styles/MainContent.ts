import {Box, styled} from "@mui/material";

const MainContent = styled(Box)`
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export default MainContent;