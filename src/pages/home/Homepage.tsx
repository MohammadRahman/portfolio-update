import  './homepage.styles.scss'
import Box from '../../components/content-box/Box';
import ExperienceList from '../../components/experience-lists/ExperienceList';
import data from '../../data.json';
import projectData from "../../projects.json";
import About from '../../components/about/About';
import Navbar from '../../components/nav-bar/Navbar';

const Homepage = () => {

  return (
    <div className="homepage-container">
      <div className="content-container" style={{ paddingTop: "100px" }}>
        <div style={{ width: "45%", height: "100%" }}>
          <Box>
            <div className="content-left" style={{ color: "white" }}>
              <span className="name">Mohammad Obaidur Rahman</span>
              <span className="title">Fullstack Engineer</span>
              <p className="intro">
                Passionate Node.js and React Developer Thriving in Startup
                Ecosystem with Expertise in Microservices and Kubernetes
              </p>
              <div className="link-container">
                <Navbar />
              </div>
            </div>
          </Box>
        </div>
        <div className="content-right">
          <Box>
            <div className="">
              <section id="about">
                <About />
              </section>
              <section id="resume">
                <div className="resume-link">
                  <a href="/resume.pdf">
                    View Resume
                  </a>
                </div>
              </section>
              <section id="experience">
                <ExperienceList expData={data} />
              </section>
              <section id="projects">
                <ExperienceList img expData={projectData} />
              </section>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Homepage
