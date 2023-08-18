import React from 'react';

/**
 * 함수 - arrow function에 대해 공부해보자
 * onClick={ someFunction() } 는 렌더링이 되는 것과 동시에 someFunction함수를 실행한다.
 * onClick={ onRemove(user.id) } 과 같이 작성하면 렌더링과 동시에 삭제되기 때문에
 * onClick={ () => onRemove(user.id) } 와 같이 콜백함수로 처리하여 렌더링과 동시에 삭제되는 것을 방지한다.
 */
function User({user, onRemove, onToggle}) {
  return (
    <div>
      
      <b style={{
        cursor: 'pointer',
        color: user.active? 'green' : 'gray'
      }} onClick={() => onToggle(user.id)}> {user.username}</b> 
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
        // <User user={user} key={index} />
      ))}
    </div>
  )
}

export default UserList;
