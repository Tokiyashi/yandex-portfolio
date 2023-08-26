import {Typography} from "@mui/material";
import Container from "./styles/Container";
import {useIsMobile} from "@/utils/hooks/useIsMobile";

const MainText = () => {
  const isMobile = useIsMobile()

  return (
    <Container>
      <Typography fontWeight='bold' fontSize='3rem'>Почему именно IT?</Typography>
      <Typography width='100%' textAlign='justify' fontSize={isMobile ? '0.9rem' : '1.6rem'}>
        Я выбрал программирование в качестве любимого занятия потому, что я всегда любил создавать что-то новое. Мне
        нравится изучать интересные вещи и воплощать свои идеи в реальность. С раннего детства я проводил много времени
        за
        компьютером, а позже начал интересоваться программированием и WEB-разработкой в частности. Я также люблю
        работать в команде, совместно решая задачи и находя эффективные решения. Программирование
        стало для меня увлекательной и динамичной работой, которая постоянно вызывает любопытство и дает возможность
        учиться чему-то новому.
      </Typography>
    </Container>

  );
};

export default MainText;