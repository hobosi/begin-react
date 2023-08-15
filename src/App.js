import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      {/* 이 주석은 화면에 보이지 않는다 */}
      /* 이 주석은 화면에 보인다 */

      <Wrapper>
        <Hello name={name} color='red' isSpecial/>
        <Hello color='pink'/>
      </Wrapper>
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </>
  );
}

export default App;
