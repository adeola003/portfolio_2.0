import '../../styles/home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoFacebook, IoLogoGoogle, IoLogoWhatsapp } from 'react-icons/io';

const Home = () => {
  return (
    <section className='sections'>
      <h2 className='section-header'>Hello There!</h2>
      <h1>I&apos;m Abdel-Khafid SALAOU</h1>
      <div className='social-media-container'>
      <a  className='social-icon' href="https://github.com/adeola003" target='blank'><FaGithub /></a>
      <a  className='social-icon' href="https://www.linkedin.com/in/abdel-khafid-salaou/"target='blank'><FaLinkedin /></a>
      <a  className='social-icon' href="https://twitter.com/khadaf6"target='blank'><IoLogoTwitter /></a>
      <a  className='social-icon' href="https://www.facebook.com/elkhadaf.salaou/"target='blank'><IoLogoFacebook /></a>
      <a  className='social-icon' href="mailto:khadaf3@gmail.com"target='blank'><IoLogoGoogle /></a>
      <a  className='social-icon' href="https://wa.me/+22966416740"target='blank'><IoLogoWhatsapp /></a>
      </div>
      <div className='actions'>
        <button ><a href="/about">More about me</a></button>
        <button><a href="/contact">Get in touch</a></button>
      </div>
    </section>
  )
}

export default Home
