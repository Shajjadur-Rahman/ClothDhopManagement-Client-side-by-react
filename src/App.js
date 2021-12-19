import React , { useState } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './App.css';
import '../../frontend2/node_modules/react-datetime-picker/dist/DateTimePicker.css'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Main from './components/MainContent'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'






function App({access}) {

  // axios globas configuration !
  axios.defaults.baseURL = 'http://localhost:8000/'
  axios.defaults.timeout = 5000
  axios.defaults.headers.common = {
    Authorization:  access ? "Bearer " + access : null,
            'Content-Type': 'application/json',
            'accept': 'application/json',
  }

  const [hide, setHide] = useState(false)
  const [login, setLogin] = useState(false)
  const togglehide = () => setHide(!hide)
  const toggleLogin = () => setLogin(!login)

  return (
    <Layout>
      <Router>
        <Header togglehide={togglehide} toggleLogin={toggleLogin}/>
         <Main togglehide={togglehide} hide={hide}/>
        <Footer/>
      </Router>
    </Layout>
  );
}
const mapStateToProps = state => ({
  access: state.AuthReducer.access
})
export default connect(mapStateToProps, {})(App);
