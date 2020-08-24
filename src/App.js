import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import './css/Main.css'

const App = () => {

  const [activePage, setActivePage] = useState("homeTab");

  useEffect(() => {
    getactivePage();
  }, [activePage])


  const getactivePage = () => {
    var navList = document.getElementById("navList");
    var children = navList.childNodes;
    children.forEach(element => {
      if (element.firstChild.className === "activePage") {
        setActivePage(element.firstChild.nodeValue);
      }
    });
  }

  const renderContent = () => {
    if (activePage === "homeTab") {
      return <Home />
    }
    else if (activePage === "projectsTab") {
      return <Projects />
    }
    else if (activePage === "contactTab") {
      return <Contact />
    }
    else if (activePage === "aboutTab") {
      return <About />
    }
  }

  return (
    <div className="containerDiv">
      <Navbar
        setActivePage={setActivePage} />
      <div className="contentDiv">
        {activePage !== null ? renderContent() : "error"}
      </div>
    </div>
  );
}

export default App;
