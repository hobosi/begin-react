import React, {useContext, useEffect} from 'react';
import { UserDispatch } from './App';

/**
 * 함수 - arrow function에 대해 공부해보자
 * onClick={ someFunction() } 는 렌더링이 되는 것과 동시에 someFunction함수를 실행한다.
 * onClick={ onRemove(user.id) } 과 같이 작성하면 렌더링과 동시에 삭제되기 때문에
 * onClick={ () => onRemove(user.id) } 와 같이 콜백함수로 처리하여 렌더링과 동시에 삭제되는 것을 방지한다.
 */
const User = React.memo(function User({user}) {
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    console.log('user 값이 설정됨');
    // console.log(user);
    return () => {
      console.log('user가 바뀌기 전');
      // console.log(user);
    }
  }, [user]);
  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: user.active? 'green' : 'gray'
      }} onClick={() => { dispatch({ type: 'TOGGLE_USER', id: user.id })}}> {user.username}</b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => { dispatch({ type: 'REMOVE_USER', id: user.id })}}>삭제</button>
    </div>
  );
});

function UserList({users}) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default React.memo(UserList,
    // TODO: 아래의 코드는 좀 더 공부해봐야겠다.
    /** 이걸 잘못사용한다면 오히려 의도치 않은 버그들이 발생하기 쉽습니다. 예를 들어서,
     * 함수형 업데이트로 전환을 안했는데 이렇게 users 만 비교를 하게 된다면,
     * onToggle 과 onRemove 에서 최신 users 배열을 참조하지 않으므로 심각한 오류가 발생 할 수 있습니다. */
    (prevProps, nextProps) => prevProps.users === nextProps.users
  );
