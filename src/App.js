import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

// TODO: 수정 버튼을 만들어서 이름과 이메일을 변경하는 기능을 추가해보자
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs;

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
      email: ''
    })
    nextId.current += 1;
  };

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
      <CreateUser userName={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  )
}

export default App;
