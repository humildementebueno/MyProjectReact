import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
    //funcion para q corra
    const{ setInputUser } = props;

    const [valueInput, setValueInput] = useState('');

    const onSearchValueChange = (event) =>{
        const inputValue= event.target.value;
        setValueInput(inputValue);
    }

    // console.log('valueInput',valueInput);
    
    const handleSubmit = ()=>{
        setInputUser(valueInput);
    }


    return (
        <Stack 
        direction = 'row'
        sx={{
            
            marginTop: '30px',
            width:'80%'
        }}>
            <TextField 
            id="outlined-basic"
            label="Github user"
            placeholder='Octocat'
            variant="outlined"
            value={valueInput}//valor inicial
            onChange={onSearchValueChange}//para que valla cambiando
            size='small'//ajusta todo a una sola altura
            sx={{
                width: '90%',
            }}
            
            />
            <IconButton 
            onClick={handleSubmit}
            size='small'
            sx={{
                left:'-45px'
            }}>
                <SearchIcon/>
            </IconButton>
        </Stack>
    )
}

export default Searcher;
