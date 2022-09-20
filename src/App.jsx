import React, { useState } from 'react'
import { Container } from '@mui/system';
import Searcher from './components/Searcher';

const App = () =>{
//creando estados
const [inputUser, setInputUser] = useState('octocat');//estado inicial
const [userStater, userState] = useState('inputUser');//esto escucha constantemente cuando se llama a la consulta
// console.log('valueInput',valueInput);

  return(
    <Container sx={{
      background: 'whitesmoke',
      width:'80vw',
      height:'500px',
      borderRadius: '19px',
      marginTop: '40px',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} /> {/* aqui existe unas props y son dos */}
      
    </Container>
  )
};

export default App;

// import React from "react";

// const App= ()=>{
//   return(
//     <div>Soy Jonatan</div>
//   )
// };

// export default App;