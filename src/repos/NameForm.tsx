import React, { Dispatch, FormEvent, SetStateAction } from 'react';

interface NameProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const NameForm: React.FC<NameProps> = ({ username, setUsername }) => {
  return (
    <label>
      Digite o url:
      <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
    </label>
  );
};

export default NameForm;
