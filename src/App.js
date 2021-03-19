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
    </div>
  )
}

export default App;
