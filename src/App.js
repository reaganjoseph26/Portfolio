import React, { useState } from 'react';
import './App.css';
// import Nav from './components/Nav/index'
import Header from './components/Header/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Projects from './components/Projects/index'


function App() {
  const [renderedComponent, setRenderedComponent] = useState("About");

  function SelectedComponent() {
    if (renderedComponent === "About") {
      return <About></About>;
    } else if (renderedComponent === "Projects") {
      return <Projects></Projects>;
    } else if (renderedComponent === "Contact") {
      return <Contact></Contact>;
    }
  }

  return (
    <div>
      <Header setRenderedComponent={setRenderedComponent}></Header>

      <main>
         <SelectedComponent></SelectedComponent> 
        {/* <About renderedComponent={renderedComponent}></About>
        <Projects renderedComponent={renderedComponent}></Projects>
        <Contact renderedComponent={renderedComponent}></Contact> */}
      </main>

      <footer>
        <div className="flex-row">
          <a href="https://github.com/reaganjoseph26">
            <svg id="Bold" enable-background="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/reagan-joseph-10a0941b6/">
            <svg height="32pt" viewBox="0 0 512 512" width="32pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
          </a>

          <a href="https://www.facebook.com/reagan.joseph.31/">
          <svg id="Capa_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"/></svg>
          </a>
        </div>
        </footer>
    </div>
  )
}

export default App;
