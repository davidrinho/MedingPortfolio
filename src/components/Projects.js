import React, {useState, useEffect} from 'react';
import '../css/Projects.css';
import colors from '../constants/theme';



const languageColors = {
    "javascript": "#f1e05a",
    "python": "#3572A5",
}


const Projects = () => {
    const [projects, setProjects] = useState(null);


    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        console.log("getting projects");
        fetch("https://api.github.com/users/davidrinho/repos")
            .then(response => response.json())
            .then(data => setProjects(data));    
    }

    const renderProjects = () => {
        if (projects !== null) {
            return (
                <div className="projectsContainer" style={{backgroundColor: colors["magic mint"]}}>
                    {Object.keys(projects).map((item, index) => {
                        let languageColor = languageColors[projects[item].language.toLowerCase()];
                        return [
                            <div className="projectDiv" key={index} style={{backgroundColor: languageColor}}>
                                <h2 
                                    key={projects[item].id}
                                    style={{color: languageColor}}>{projects[item].name}</h2>
                                <h4 key={projects[item].description}>{projects[item].description}</h4>
                                <h4 
                                    key={projects[item].name}>Language used: 
                                        <span key={index+item} style={{marginLeft: '20px', color: languageColor}}>{projects[item].language}</span></h4>
                            </div>]

                    })}
                </div>
            )
        } else {
            return (
                <div className="projectsContainer">
                </div>
            )
        }
    }

    return (
        <div style={{flex: 1}}>
            {renderProjects()}
        </div>
    )
}


export default Projects;