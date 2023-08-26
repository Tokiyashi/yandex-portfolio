import {Box, styled} from "@mui/material";

const HelperText = styled(Box)`
  display: flex;
  border: 0.3rem solid black;
  border-radius: 0.8rem;
  background-color: #F4D738;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -2.5rem;
  margin-left: -3rem;
  padding: 1rem 1.5rem;

  @media (max-width: 1000px) {
    margin-left: -1rem;
  }
  
`;
export default HelperText;