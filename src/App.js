import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/Layout/Header';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import TestLifeCycle from './components/Test/TestLifeCycle';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
       <BrowserRouter>
        <div className="App">
          <Header branding = "Contact Manager" />
          <div className="container">
            <Routes>
              <Route exact path='/'            element={<Contacts />} />
              <Route exact path='/contact/add' element={<AddContact />} />
              <Route exact path='/contact/edit/:id' element={<EditContact />} />
              <Route exact path='/about'       element={<About />} />
              <Route exact path='/test'        element={<TestLifeCycle favColor = 'yellow'/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
       </BrowserRouter> 
      </Provider>
    );
  }
}
 
export default App;