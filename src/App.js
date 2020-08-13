import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import Register from "./modules/register";
import { BrowserRouter } from 'react-router-dom';
import SignIn from "./modules/signIn";

function App() {
  return ( 
    <BrowserRouter history={window.routerHistory}>
      <div className ='app'>
        <SignIn />
        <Register />
      </div>
    </BrowserRouter>
  );
}

export default App;