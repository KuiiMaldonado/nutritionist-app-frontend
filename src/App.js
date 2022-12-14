import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import MeetUsPage from "./pages/MeetUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import React from "react";
import Divider from "./components/Divider";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import NotFound from "./components/NotFound";

let uri;
if (process.env.NODE_ENV === 'production')
    uri = process.env.REACT_APP_GRAPH_SERVER;
else
    uri = 'http://localhost:3001/graphql';

const httpLink = createHttpLink({
    uri: uri,
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

function App() {
  return (
      <ApolloProvider client={client}>
          <div className={'metpro-app'}>
              <NavigationBar/>
              <Routes>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/meet-us'} element={<MeetUsPage/>}/>
                  <Route path={'/contact-us'} element={<ContactUsPage/>}/>
                  <Route path={'/login'} element={<LoginPage/>}/>
                  <Route path={'/profile'}>
                      <Route index element={<Navigate to={'settings'}/>}/>
                      <Route path={'measures'} element={<ProfilePage section={'measures'}/>}/>
                      <Route path={'diets'} element={<ProfilePage section={'diets'}/>}/>
                      <Route path={'trainings'} element={<ProfilePage section={'trainings'}/>}/>
                      <Route path={'settings'} element={<ProfilePage section={'settings'}/>}/>
                      <Route path={'manage'}>
                          <Route index element={<ProfilePage section={'manage'}/>}/>
                          <Route path={'addUser'} element={<ProfilePage section={'addUser'}/>}/>
                          <Route path={'editUser'} >
                              <Route index element={<ProfilePage section={'editUser'}/>}/>
                              <Route path={'addMeasure'} element={<ProfilePage section={'addMeasure'}/>}/>
                          </Route>
                      </Route>
                  </Route>
                  <Route path={'*'} element={<NotFound/>}/>
              </Routes>
              <Divider/>
              <Footer/>
          </div>
      </ApolloProvider>
  );
}

export default App;
