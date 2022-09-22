import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system';
import Searcher from './components/Searcher';

import {getGitHubUser} from './services/users';
import UserCard from './containers/userCard';

const App = () =>{
//creando estados
const [inputUser, setInputUser] = useState('octocat');//estado inicial
const [userState, setUserState] = useState('inputUser');//esto escucha constantemente cuando se llama a la consulta
const [notFound, setNotFound] = useState(false);
// console.log('valueInput',valueInput);

const gettingUser = async (user) => {
  const userResponse = await getGitHubUser(user);
  
  if(userState === 'octocat'){
    localStorage.setItem('octocat', userResponse);//aqui se mostrara com primer dato el octocat y asi en caso de malas peticiones solo muestre octocat
  }

  if(userResponse.message === 'Not Found'){//en caso de no existir un usuario
    const {octocat} = localStorage;
    setInputUser(octocat);
    setNotFound(true);
  } else {
    setUserState(userResponse);//encontrado
  }
}

console.log(userState);

useEffect(() => {
  gettingUser(inputUser)
},
 [inputUser]);

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
      <UserCard userState={userState}/>

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