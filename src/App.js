import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from './Sidebar';
import Chat from './Chat';
import Collab from './Collab';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import Dashboard from "./Dashboard";
import Announcements from "./Announcements";
import bgvideo from './bgvideo.mp4'
import AnnouncementDisplay from './AnnouncementDisplay';
import AnnouncementLogin from './AnnouncementLogin';
import Unauthorized from './Unauthorized.js';
import { signInWithGoogle } from './firebase';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        console.log("user is ", authUser);
        if (authUser) {
          // user logged in
          dispatch(
            login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName,
            })
          );
        } else {
          // user logged out
          dispatch(logout());
        }
      });

  }, [dispatch]);

  return (
    
    <div className="app">
      {user ? (
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/video-group-call" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/collab" component={Collab} />
          <Route path="/announcements" component={AnnouncementDisplay} />
          <Route path ="/announcement-create" component={Announcements} />
          <Route path ="/announcement-login" component={AnnouncementLogin} />
          <Route path ="/unauthorized" component={Unauthorized} />
          <Route path ="/signingoogle" component={signInWithGoogle} />
          <Route exact path="/simaster" render={() => (window.location = "https://simaster.ugm.ac.id/")} />
          <Route exact path="/elok" render={() => (window.location = "https://elok.ugm.ac.id/")} />
          <Route exact path="/mTeams" render={() => (window.location = "https://teams.microsoft.com/_#/conversations/newchat?ctx=chat")} />
          <Route exact path="/gMeet" render={() => (window.location = "https://meet.new/")} />
          <Route exact path="/zoomus" render={() => (window.location = "https://zoom.us/start/videomeeting")} />
          <Route exact path="/forum" render={() => (window.location = "https://ugm-connect.web.app/")} />

          <>         
            <Sidebar />
            <Chat />
          </>
        </Switch>
      </BrowserRouter>
      ) : (
          <Login />
      )}
    </div>

    
  );
}

export default App;
