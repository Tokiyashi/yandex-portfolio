import Container from "./styles/Container";
import {Typography} from "@mui/material";

const TaskDescription = () => {

  return (
    <Container>
      <Typography fontWeight='bold' fontSize='2rem'>Игра "Угадай число"</Typography>
      <Typography fontSize='1rem' textAlign='justify'>Цель вашего задания - разработать приложение, которое будет загадывать случайное
        число, игрок должен
        ввести число, которое, на его взгляд загадала игра, а игра в свою очередь должна написать верно ли угадано
        число, в случае если нет, то сравнить число с загаданным</Typography>
    </Container>
  );
};

export default TaskDescription;