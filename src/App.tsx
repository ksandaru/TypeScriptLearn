import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Greet from "./Components/Greet";
import Login from "./Components/Login";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import {Button} from "./Components/Button";
import {LoggedIn} from "./Components/state/LoggedIn";
import {User} from "./Components/state/User";
import {Counter} from "./Components/useReducer/Counter";
import {ThemeContextProvider} from "./Components/context/ThemeContext";
import Box from "./Components/context/Box";
import {PrivateComp} from "./Components/auth/PrivateComp";
import {Profile} from "./Components/auth/Profile";
import {List} from "./Components/generics/List";
import {ObjectList} from "./Components/generics/ObjectList";
import {RandomNumbers} from "./Components/props-restrictions/RandomNumbers";


function App() {
    const nameList = [
        {
            first: 'John',
            last: 'sophia'
        },
        {
            first: 'Jonathan',
            last: 'jahangeer'
        },
        {
            first: 'Lincoln',
            last: 'nilodan'
        },
        {
            first: 'Amiloden',
            last: 'asfa'
        }

    ];
        const items = [
        {
            id: 1,
            first: 'Hawk',
            last: 'Eye'
        },
        {
            id:2,
            first: 'Captain',
            last: 'Marvel'
        }

    ]

    const loggedinUser = {
        userid: 'Kanishka123',
        token: 'fa2jk466gib78d8r7467wrui4h3',
    }

    return (
        <div className="App">
            <Header title='I am new title'/>
            <Greet firstname={'kanishka'} age={26} isLoggedin={true}/>
            <Login user={loggedinUser}/>
            <PersonList names={nameList}/>
            <Status status={'success'}/>
            <Heading>I am new to Heading</Heading>
            <Oscar>
                <Heading>I came from Heading (Now on OSCAR)</Heading>
                <Heading>I also came from Heading (Now on OSCAR)</Heading>
            </Oscar>
            <Button handleClick={(event, id) => {
                console.log('Btn-Clicked', event, id)
            }}/>
            <LoggedIn/>
            <User/>
            <Counter/>
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
            <PrivateComp isLoggedin={true} component={Profile}/>
            <List
                items={['Hulk','WonderWoman','CaptainAmerica','Dr.Strange','AntMan']}
                onClick={(item)=> console.log(item)}/>
            <ObjectList
                items={items}
                onClick={(item)=>console.log(item)}/>
            <RandomNumbers value={10}  isPositive/>
        </div>
    );
}

export default App;
