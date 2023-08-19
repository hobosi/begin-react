import React, { useState, useRef, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length;
}

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

  // useMemo()를 사용하여 바뀌는 대상을 특정하여 원하는 연산을 실행한다.
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser userName={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </>
  )
}

export default App;
