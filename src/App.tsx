import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Greet from "./Components/Greet";
import Login from "./Components/Login";
import PersonList from "./Components/PersonList";



function App() {
    const nameList =[
        {
            first:'John',
            last:'sophia'
        },
        {
            first:'Jonathan',
            last:'jahangeer'
        },
        {
            first:'Lincoln',
            last:'nilodan'
        },
        {
            first:'Amiloden',
            last:'asfa'
        }

    ]
    const loggedinUser ={
        userid: 'Kanishka123',
        token: 'fa2jk466gib78d8r7467wrui4h3',
    }

    return (
        <div className="App">
            <Header title='I am new title'/>
            <Greet firstname={'kanishka'} age={26}/>
            <Login user={loggedinUser}/>
            <PersonList names={nameList}/>
        </div>
    );
}

export default App;
