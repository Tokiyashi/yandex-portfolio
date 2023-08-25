import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  width: 30%;
  position: relative;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
  border-radius: 1rem;
  border: 0.3rem solid black;
  box-shadow: 0.5rem 0.5rem 0 black;
  background-color: ${({theme}) => theme.palette.primary.light};
  height: 20rem;
  flex-direction: column;
`;
export default Container;