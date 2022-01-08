import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const changeUsersHandler = (uName, uAge) => {
    setUsersList((prevUserslist) => {
      return [...prevUserslist, {name: uName, age: uAge, id: Math.random().toString()}]
    }
    );
  }

  return (
    <div>
      <AddUser onAddUser = {changeUsersHandler}/>
      <UsersList users ={usersList}/>
    </div>
  );
}

export default App;
