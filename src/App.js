import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import SignIn from "./modules/signIn";

function App() {
  return (
    <div className='app-wrapper'>
      <SignIn />
    </div>
  );
}

export default App;
