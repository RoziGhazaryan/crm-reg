import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import SignIn from "./modules/signIn";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter history={window.routerHistory}>
      <div className ='app'>
       <SignIn />
      </div>
    </BrowserRouter>
  );
}

export default App;