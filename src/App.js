import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <>
      <AwesomeSlider animation='cubeAnimation' buttons={true} fillParent={true}  >
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
        <div><First/></div>
        <div><Second/></div>
        <div><Third/></div>
      </AwesomeSlider>
    </>
    </div>
  );
}

export default App;
