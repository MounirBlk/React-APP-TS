/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { HeaderBar } from './components/HeaderBar/HeadearBar';
import { Inscription } from './components/Inscription/Inscription';
import { Login } from './components/Login/Login';


export class App extends React.PureComponent {
  state = { 
    user:{
      name: 'Ryu', 
      age: 30, 
      belt: 'black'
    }
  }

  render(){
    console.log('app: ',this.state.user)
    return (
      <div className="App">
        {/*<HeaderBar.Display user={this.state.user} />*/}
        <Login.Display />
        {/*<Inscription.Display />*/}
      </div>
    );
  }
}
