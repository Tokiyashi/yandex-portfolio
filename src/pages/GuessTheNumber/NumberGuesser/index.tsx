import Container from "./styles/Container";
import {Button, Popover, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import Inputs from "./styles/Inputs";
import GameMessage from "@/pages/GuessTheNumber/NumberGuesser/styles/GameMessage";
import HelperText from "@/pages/GuessTheNumber/NumberGuesser/styles/HelperText";

const NumberGuesser = () => {
  const [userGuess, setUserGuess] = useState(0)
  const [desiredNumber, setDesiredNumber] = useState(0)
  const [gameMessage, setGameMessage] = useState('')
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
    setGameMessage('')
  };
  useEffect(() => {
    const randomNumber = Math.round(Math.random() * 50) + 1
    setDesiredNumber(randomNumber)
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.replace(/^0+/, '');
    setUserGuess(parseInt(inputValue, 10) || 0)
  }

  function compareValues(): string {
    if (!userGuess) return ''

    const compareResult = desiredNumber > userGuess ? 'больше' : 'меньше'

    return `Ответ неверный! моё число ${compareResult} чем ${userGuess}`
  }

  function handleGuess(event: React.MouseEvent<HTMLButtonElement>) {
    const result = userGuess === desiredNumber ? 'Вы отгадали!' : compareValues()
    setGameMessage(result)
    setAnchorEl(event.currentTarget);
  }

  return (
    <Container>
      <HelperText>
        <Typography noWrap fontWeight='bold' fontSize='2rem'>Пример игры</Typography>
      </HelperText>
      <Inputs>
        <TextField variant='outlined' placeholder='Введи число!' value={userGuess}
                   onChange={handleChange}/>
        <Button color='secondary' disabled={!userGuess} onClick={handleGuess} variant='contained'>Отгадать</Button>
      </Inputs>
      <Popover
        open={!!gameMessage}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <GameMessage>
          <Typography>{gameMessage}</Typography>
        </GameMessage>
      </Popover>
    </Container>
  );
};

export default NumberGuesser;