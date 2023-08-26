import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export default Container;