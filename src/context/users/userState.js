import { useState } from 'react';
import UserContext from './UserContext';

import axios from 'axios';

const UserListProvider = (props) => {
  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    const data = await response.data;
    setUsers(data.items);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        searchUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserListProvider;
