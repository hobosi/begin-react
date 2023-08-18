import React, { useState, useRef } from 'react';

function InputSample() {

  const userNameInput = useRef();

  const [inputs, setInputs] = useState({
    userName: '',
    nickName: ''
  });

  const {userName, nickName} = inputs;

  const onReset = () => {
    setInputs({
      userName: '',
      nickName: ''
    });
    userNameInput.current.focus();
  }

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  return (
    <div>
      <input name='userName' placeholder='이름' onChange={onChange} value={userName} ref={userNameInput}/>
      <input name='nickName' placeholder='닉네임' onChange={onChange} value={nickName}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {userName} ({nickName})
      </div>
    </div>
  );
}

export default InputSample;
