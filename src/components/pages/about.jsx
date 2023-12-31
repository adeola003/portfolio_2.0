import LevelSkills from '../LevelSkills';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io';
import pic from '../../assets/my_pic.jpg';
import wellfound from '../../assets/Wellfound.svg'
import resume from '../../assets/Abdel_khafid_resume.pdf'
import '../../styles/about.css';

const About = () => {
  const iconStyle = {
    height: '0.7em',
    width: '0.7em',
    background: '#d9832e',
    color: '#fff',
    padding: '0.3em',
  };

  return (
    <>
      <section id="about-me">
        <h2 className="section-header">About me</h2>
        <hr />
        <div className="my-infos">
          <div className="pic-social">
            <img src={pic} alt="my photo" />
          </div>
          <div className="details">
            <h4>I&apos;m Abdel-Khafid</h4>
            <h6>A software Developer based in Africa</h6>
            <p>Hello, I&apos;m Abdel-Khafid, a passionate Software Developer based in Africa. I embarked on a unique journey, transitioning from a water engineer to a full-stack developer after completing the Microverse program.

</p>
            <p>
            My journey has equipped me with a diverse skill set and valuable experiences. I am proactive in my approach and fluent in languages such as JavaScript, Ruby, and SQL. I specialize in utilizing frameworks and technologies like Ruby on Rails and React to create innovative solutions.
            </p>
            <p>
            Throughout my development journey, I&apos;ve actively engaged in pair programming and collaborated with remote teams, honing both my technical and non-technical communication skills. These experiences have made me an effective collaborator, whether working remotely or on-site.
            </p>
            <p>
            I&apos;m enthusiastic about the endless possibilities of software development, and I&apos;m always excited to take on new challenges and contribute to impactful projects.
            </p>
          </div>
        </div>
      </section>
      <section id="skills">
        <h2 className="section-header">Skills</h2>
        <hr />
        <h4>Front end</h4>
        <ul className="skill-container">
          <li><LevelSkills skill="React-Redux" percentage={80} /></li>
          <li><LevelSkills skill="Javascript" percentage={70} /></li>
          <li><LevelSkills skill="jQuery" percentage={70} /></li>
          <li><LevelSkills skill="HTML5" percentage={90} /></li>
          <li><LevelSkills skill="CSS3" percentage={70} /></li>
          <li><LevelSkills skill="Bootstrap" percentage={50} /></li>


        </ul>
        <h4>Back end</h4>
        <ul className="skill-container">
        <li><LevelSkills skill="Ruby" percentage={60} /></li>
          <li><LevelSkills skill="Ruby on rails" percentage={60} /></li>
          <li><LevelSkills skill="PostgreSQL" percentage={50} /></li>
          <li><LevelSkills skill="MySQL" percentage={30} /></li>
          <li><LevelSkills skill="Node.js" percentage={20} /></li>
          <li><LevelSkills skill="Python" percentage={5} /></li>
        </ul>
        <h4>Other skills</h4>
        <ul>
          <li>Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools.</li>
          <li>Professional: Remote Pair-Programming, Teamwork, Mentoring, Problem-solving.</li>
        </ul>
      </section>
      <section id="experience">
        <h2 className="section-header">Experience</h2>
        <hr />
        <div className="experience-item">
          <h4>Full Stack Web Developer & Mentor</h4>
          <p>February 2023 - Present</p>
          <ul>
            <li>Mastered intermediate and advanced topics in full-stack development (including Rails, Git, and DS&A challenges) while building 50+ projects both independently and via pair programming.</li>
            <li>Engaged in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>SONEB</h4>
          <p>Cotonou, Benin</p>
          <p>February 2018 - September 2022</p>
          <ul>
            <li>Assured both the conception (drawing, modeling) and the realization of 1000+ water supply systems.</li>
            <li>Temporarily acted as the head of the distribution department for 2 months during holidays.</li>
            <li>Conducted feasibility studies for over 500 projects related to potable water supply and supervised the implementation of more than 100 of them.</li>
            <li>Developed an Excel program for hydraulic calculations and simulations.</li>
          </ul>
        </div>
      </section>
      <section id="education">
        <h2 className="section-header">Education</h2>
        <hr />
        <div className="education-item">
          <h4>MICROVERSE</h4>
          <p>February 2023 - Present</p>
          <p>Remote Full Stack Web Development Program, Full Time</p>
          <ul>
            <li>Spent 1300+ hours mastering algorithms, data structures, and full-stack development with Ruby, Rails, JavaScript, React, and Redux.</li>
            <li>Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.</li>
          </ul>
        </div>
        <div className="education-item">
          <h4>University of Abomey-Calavi</h4>
          <p>October 2013 - September 2016</p>
          <p>Bachelor in Hydrology and Water Resources Management</p>
          <ul>
            <li>Studied Hydrology, modeling, CAD, data management, and statistics with the R programming language.</li>
          </ul>
        </div>
      </section>
<section id="contact">
  <h2 className="contact-section-header">Contact</h2>
  <hr className='contact-line' />
  <ul className="contact-info">
    <li className="contact-item">
      <a href="mailto:khadaf3@gmail.com" className="contact-icon">
        <FaEnvelope style={iconStyle} />
      </a>
      <span className="contact-text">khadaf3@gmail.com</span>
    </li>
    <li className="contact-item">
      <a href="tel:+22966416740" className="contact-icon">
        <FaPhone style={iconStyle} />
      </a>
      <span className="contact-text">+229 66 41 67 40</span>
    </li>
    <li className="contact-item">
      <a href="https://github.com/adeola003" className="contact-icon" target="blank">
        <FaGithub style={iconStyle} />
      </a>
      <span className="contact-text">adeola003</span>
    </li>
      <li className="contact-item"><a className='contact-icon' href="https://twitter.com/khadaf6" target='blank'><IoLogoTwitter style={iconStyle} /></a>
      <span className="contact-text">khadaf6</span>
      </li>
      <li className="contact-item"><a className='contact-icon' href="https://www.linkedin.com/in/abdel-khafid-salaou/" target='blank'><FaLinkedin style={iconStyle} /></a>
      <span className="contact-text">Abdel-Khafid SALAOU</span>
      </li>
      <li className="contact-item"><a className='contact-icon' href="https://wellfound.com/profile/edit/overview" target='blank'><img className='wellfnd' src={wellfound} alt="wellfound logo" /></a>
      <span className="contact-text">Abdel-Khafid SALAOU</span>
      </li>
      <li className="contact-item"><a className='contact-icon' href="https://www.facebook.com/elkhadaf.salaou/" target='blank'><IoLogoFacebook style={iconStyle} /></a>
      <span className="contact-text">Adeola SALAOU</span>
      </li>
      <li className="contact-item"><a className='contact-icon' href="https://wa.me/+22966416740" target='blank'><IoLogoWhatsapp style={iconStyle} /></a>
      <span className="contact-text">+229 66 41 67 40</span>
      </li>
  </ul>
  <div className="cv-download-button">
    <a href={resume} download>
      <button className="download-button">Download CV</button>
    </a>
  </div>
</section>

    </>
  )
}

export default About;
