import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import './css/Main.css'

const App = () => {

  const [activeTab, setActiveTab] = useState("homeTab");

  useEffect(() => {
    getActiveTab();
  }, [])


  const getActiveTab = () => {
    var navList = document.getElementById("navList");
    var children = navList.childNodes;
    children.forEach(element => {
      if (element.firstChild.className === "activeTab") {
        setActiveTab(element.firstChild.nodeValue);
      }
    });
  }

  const renderContent = () => {
    console.log("ACTIVE TAB");
    console.log(activeTab);
    if (activeTab === "homeTab") {
      return <Home />
    }
    else if (activeTab === "projectsTab") {
      return <Projects />
    }
    else if (activeTab === "contactTab") {
      return <Contact />
    }
    else if (activeTab === "aboutTab") {
      return <About />
    }
  }

  return (
    <div className="containerDiv">
      <Navbar />
      <div className="contentDiv">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
