import DesignCard from './DesignCard';
import WebCard from './WebCard';
import './projects.css'

function Projects() {
    return (
        <div id="projects" className="projects">
            <h1>PROJECTS</h1>
            <div className="projects-container">
                <WebCard/>

                <div className="vertical-divider"></div>

                <DesignCard/>
            </div>
        </div>
    );
}

export default Projects;
