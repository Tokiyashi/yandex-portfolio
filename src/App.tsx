import {Route, Router, Routes} from 'react-router-dom';
import Main from "@/pages/Main";
import GuessTheNumber from "@/pages/GuessTheNumber";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/guess-the-number' element={<GuessTheNumber/>}/>
      </Routes>
  )
}

export default App
