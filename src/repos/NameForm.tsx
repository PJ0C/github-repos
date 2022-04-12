import React, { Dispatch, SetStateAction } from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

interface NameProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  buttonDisabled: boolean;
}

const NameForm: React.FC<NameProps> = ({ username, setUsername, buttonDisabled }) => {
  return (
    <TextField
      label="Pesquisa"
      placeholder="Digite o nome do usuário"
      margin="normal"
      value={username}
      onChange={event => setUsername(event.target.value)}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit" disabled={buttonDisabled}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default NameForm;
