// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Header } from './AppComponents/HeaderComponent/Header';
import { Footer } from './AppComponents/FooterComponent/Footer';
import  SurveyComponent  from './AppComponents/SurveyComponents/SurveyComponent';

import { MainLanding } from './AppComponents/MainLanding/MainLanding';
import UploadTraits from './AppComponents/UploadTraits/UploadTraits';
import UploadCandidates from './AppComponents/UploadCandidates/UploadCandidates';
import ManageSurvey from './AppComponents/ManageSurvey/ManageSurvey';
import SurveyReport from './AppComponents/SurveyReport/SurveyReport';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/360survey'>
            <MainLanding/>
          </Route>
          <Route exact path='/uploadTraits'>
            <UploadTraits/>
          </Route>  
          <Route exact path='/uploadCandidates'>
            <UploadCandidates/>
          </Route>  
          <Route exact path='/manageSurvey'>
            <ManageSurvey/>
          </Route>
          <Route exact path='/collectSurvey'>
            <SurveyComponent/>
          </Route>
          <Route exact path='/surveyReport'>
            <SurveyReport/>
          </Route>
            
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
