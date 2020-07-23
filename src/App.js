import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Foot from "./components/Footer/Foot";
import Messages from "./components/Dialogs/Message/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialog/Dialogs";
import {updateNewPostText} from "./redux/store";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => (<Profile state={props.state.profilePage.posts}
                                                               newPostMessageText={props.state.profilePage.newPostMessageText}
                                                               dispatch={props.dispatch}/>)}/>
                <Route path='/dialogs'
                       render={() => (<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>)}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>

            </div>
            <Foot/>
        </div>
    );
}

export default App;