import {Box, styled} from "@mui/material";

const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  gap: 4rem;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export default MainContent;