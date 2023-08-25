import Container from "./styles/Container";
import {Box, Typography} from "@mui/material";
import Image from "@/common/styles/Image";
import coloredArrow from "@/assets/Vector 8.svg";
import arrow from "@/assets/Vector 7.svg";

const TaskDescription = () => {

  return (
    <Container>
      <Box>
        <Typography fontSize='3rem'>Задание</Typography>
        <Typography width='80%' fontSize='1.6rem' textAlign='justify'>Ваша задача - создать приложение, которое
          генерирует
          случайное
          число, а пользователь должен попробовать угадать его. Приложение проверяет, было ли угадано число и сообщает
          пользователю, правильно ли он угадал, или же подсказывает, какое число было загадано.
        </Typography>
      </Box>
      <Image width='35rem' height='20rem' src={coloredArrow}>
        <Image width='35rem' height='20rem' src={arrow}/>
      </Image>
    </Container>
  );
};

export default TaskDescription;