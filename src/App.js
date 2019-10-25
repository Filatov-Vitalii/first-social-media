import React from 'react';
import './App.css';
import './MainField.css';
import './Sidebar.css';
import './Header.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import './Images.css';
import './Dialogs.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Sidebar/>
                <Route path = '/images' component = {Images} />
                <Route path = '/main'  component = {MainField} />
                <Route path = '/dialogs' component = {Dialogs} />
                <Route path = '/dialogs/1' component = {Opened}/>
            </div>
        </BrowserRouter>
    );
}

const Images = () => {
            return (
                <img src = 'https://www.w3schools.com/w3css/img_lights.jpg' className = 'polarImage'/>
            );
}

const Header = () => {
  return (
    <div className = 'Header'>
        <NavLink to = '/main'>Main</NavLink>
        <NavLink to = '/images'>Images</NavLink>
        <NavLink to = '/dialogs'>Dialogs</NavLink>
    </div>
  );
}


const Dialogs = () => {
    return (
        <div>
            <Message From='Tom' Text="That's what I'm saying" id='1'/>
            <Message From='Peter' Text="he introduced me a fucking ladder wtf" id='2'/>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className='Dialogs'>
            <NavLink to={'/dialogs/' + props.id}>
                <div className='Dialog'>
                    <div className='From'>
                        From: {props.From}
                    </div>
                    <div className='Text'>
                        {props.Text}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

const Opened = () => {
    return(
        <div>
            <div className = 'OpenedDialog'>
                The message will be here
            </div>
        </div>
    );
}



const Sidebar = () => {

    let alertMessage = () => {
        alert('The button was clicked');
    }

  return (
      <div className = 'Sidebar'>
          <SidebarContent articleName = 'First' articleContent = 'Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of. Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young. ' />
          <SidebarContent articleName = 'Second' articleContent = 'Random gibberish text to use in web pages, site templates and in typography demos.Get rid of Lorem Ipsum forever. A tool for web designers who want to save time.New! Are you already coding the HTML for your web design ? Select HTML output from the box bellow.' />
          <SidebarContent articleName = 'Third' articleContent = 'Goooooooogle or Yaaaaaandex? Wich way to search things is more handy foe you?' />
          <button onClick={ alertMessage }>Click me</button>
          <div className = 'aniMain'>
              <div className = 'aniItem' id = 'first'>
              </div>
              <div className = 'aniItem' id = 'second'>
              </div>
              <div className = 'aniItem' id = 'third'>
              </div>
              <div className = 'aniItem' id = 'fourth'>
              </div>
          </div>
      </div>
  );
}

const SidebarContent = (props) => {
    return (
        <div className = 'sidebarContent'>
            <div className = 'articleName'>
                {props.articleName}
            </div>
            <div className = 'articleContent'>
                {props.articleContent}
            </div>
        </div>
    );
}

const MainField = () => {
    return (
        <div className = 'MainField'>
            <Posts userName = 'Carl' postText = "Hello! Do anybody know how to use React?" postDate = '12.08.2019' />
            <Posts userName = 'Lenny' postText = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
            postDate = '14.08.2019' />
            <Posts userName = 'Homer' postText = "hey guys want some beer?" postDate = '15.08.2019' />
            <Posts userName = 'Bart' postText = "Could you please call Du Mbass?" postDate = '15.08.2019' />
            <Posts userName = 'Mr. Berns' postText = "Good." postDate = '16.08.2019' />
        </div>
    );
}

const Posts = (props) => {
     return (
         <div className = 'postMain'>
             <img src = 'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg' className = 'avatar'/>
             <div className = 'userName'>
                 {props.userName} <div className = 'speaks'>speaks:</div>
             </div>
            <div className = 'postText'>
                {props.postText}
            </div>
             <div className = 'postDate'>
                 Posted on {props.postDate}
             </div>
         </div>
     );
}

export default App;
