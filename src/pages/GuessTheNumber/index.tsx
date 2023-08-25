import Page from "@/common/styles/Page";
import TaskDescription from "@/pages/GuessTheNumber/TaskDescription";
import {Typography} from "@mui/material";
import NumberGuesser from "./NumberGuesser";
import MainContent from "./styles/MainContent";

const GuessTheNumber = () => {
  return (
    <Page sx={{backgroundColor:'#87CEEB'}}>
      <Typography fontWeight='bold' fontSize='4rem' margin='4rem auto'>Игра "Угадай число"</Typography>
      <MainContent>
        <TaskDescription/>
        <NumberGuesser/>
      </MainContent>
    </Page>
  );
};

export default GuessTheNumber;