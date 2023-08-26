import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 8rem;
  height: 100%;
  
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export default Container;