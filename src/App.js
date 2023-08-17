import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    id: ''
  })

  const {username, email, id} = inputs;

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    // setUsers([...users, user]); // spread 연산자
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
      id: ''
    })
    nextId.current += 1;
  };

  const onModify = user => {
    setInputs({
      username: user.username,
      email: user.email,
      id: user.id
    });
  }

  const onUpdate = () => {
    setUsers(users.map( user => user.id === id ? {...user, username: username, email: email} : user));

    setInputs({
      username: '',
      email: '',
      id: ''
    })
    
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active}: user)
    )
  }

  return (
    <>
      <CreateUser userName={username} email={email} onChange={onChange} onUpdate={onUpdate} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onModify={onModify} onToggle={onToggle}/>
    </>
  )
}

export default App;
