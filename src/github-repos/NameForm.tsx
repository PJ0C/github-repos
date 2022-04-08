import React, { Dispatch, FormEvent, SetStateAction } from 'react';

interface NameProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const NameForm: React.FC<NameProps> = ({ username, setUsername }) => {
  return (
    <form>
      <label>
        Digite o url:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
    </form>
  );
};

export default NameForm;
