import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  padding: 3rem;
  border-radius: 1.5rem;
  background-color: ${({theme}) => theme.palette.primary.light};
  filter: drop-shadow(8px 8px 0px #000);
`;
export default Container;