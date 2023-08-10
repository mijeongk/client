import React from "react";
import './App.css';
import R20_PropsObj from './R20_PropsObj';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R20_PropsObj Obj={{react:"리액트",two:"200"}}/>
    </div>
  );
}

export default App;
