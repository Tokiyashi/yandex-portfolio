import Page from "@/common/styles/Page";
import TaskDescription from "@/pages/GuessTheNumber/TaskDescription";
import {Typography, useTheme} from "@mui/material";
import NumberGuesser from "./NumberGuesser";
import MainContent from "./styles/MainContent";

const GuessTheNumber = () => {
  const theme = useTheme()

  return (
    <Page sx={{backgroundColor: theme.palette.background.paper}}>
      <Typography fontWeight='bold' fontSize='4rem' margin='4rem auto'>Игра "Угадай число"</Typography>
      <MainContent>
        <TaskDescription/>
        <NumberGuesser/>
      </MainContent>
    </Page>
  );
};

export default GuessTheNumber;