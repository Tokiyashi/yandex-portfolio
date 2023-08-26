import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 5%;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export default Container;