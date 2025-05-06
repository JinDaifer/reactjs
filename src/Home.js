import React, { useState, useEffect } from 'react';
import './App.css';
import { LinkBorderLineRouter, LinkBorderLine, ContentCard } from './components/Utils.js';
import ContactForm from './components/ContactForm';

const AboutMe = () => {
  return (
    <p>
      Passionate <span style={{ fontWeight: 'bold', color: 'gold' }}>web developer</span>, <span style={{ fontWeight: 'bold', color: 'gold' }}>
        digital designer</span>, and <span style={{ fontWeight: 'bold', color: 'gold' }}>game developer</span> with experience
      in <span style={{ color: 'white' }}>HTML/CSS</span>, <span style={{ color: 'white' }}>JavaScript</span>, <span style={{ color: 'white' }}>
        React</span>, <span style={{ color: 'white' }}>jQuery</span>, <span style={{ color: 'white' }}>PHP</span>, <span style={{ color: 'white' }}>
        Laravel</span>, <span style={{ color: 'white' }}>Java</span>, and <span style={{ color: 'white' }}>WordPress</span>.
      Skilled in <span style={{ fontStyle: 'italic' }}>graphic design</span> with <span style={{ fontWeight: 'bold' }}>
        Photoshop</span> and proficient in managing <span style={{ fontWeight: 'bold', color: 'white' }}>Linux systems</span>,
      version control with <span style={{ color: 'aquamarine' }}>Git/GitHub</span>, and handling <span style={{ color: 'aquamarine' }}>
        CRM/Excel</span>.
      <br></br><br></br> Currently developing an exciting game using <span style={{ fontWeight: 'bold', color: 'aquamarine' }}>GDScript</span>,
      expanding my expertise in <span style={{ fontWeight: 'bold', color: 'aquamarine' }}>game development</span>
      alongside web and digital design. Always eager to explore new opportunities, apply my diverse skill set,
      and stay up-to-date with emerging technologies in <span style={{ fontWeight: 'bold', color: 'aquamarine' }}>
        web development</span> and <span style={{ fontWeight: 'bold', color: 'aquamarine' }}>digital design</span>.
    </p>
  );
};

const TypingText = ({ texts, typingSpeed = 100, pauseTime = 2000, cursorBlinkSpeed = 500 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // índice del texto actual
  const [displayedText, setDisplayedText] = useState(''); // texto que se muestra
  const [isTyping, setIsTyping] = useState(true); // estado de escritura
  const [showCursor, setShowCursor] = useState(true); // cursor parpadeante

  // Efecto para escribir el texto letra por letra
  useEffect(() => {
    const fullText = texts[currentTextIndex]; // texto completo a mostrar
    let currentCharIndex = 0; // comienza en 0 para mostrar la primera letra
    setDisplayedText(''); // reinicia el texto mostrado

    // Intervalo para mostrar cada letra una por una
    const typingInterval = setInterval(() => {
      if (currentCharIndex < fullText.length) {
        currentCharIndex++;
        setDisplayedText((prev) => prev + fullText[currentCharIndex - 1]);
      } else {
        clearInterval(typingInterval);
        setIsTyping(false); // termina el efecto de escritura
      }
    }, typingSpeed);

    // Limpieza del intervalo cuando cambia el texto o el componente se desmonta
    return () => clearInterval(typingInterval);
  }, [currentTextIndex, texts, typingSpeed]);

  // Efecto para alternar entre textos después de una pausa
  useEffect(() => {
    if (!isTyping) {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(true); // vuelve a escribir
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // cambia al siguiente texto
      }, pauseTime);

      return () => clearTimeout(pauseTimeout);
    }
  }, [isTyping, pauseTime, texts.length]);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  return (
    <div style={{ "color": "gold" }}>
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </div>
  );
};

const Curriculum = () => {
  return (<div className="container"> 
        <div className="left-column">
          <div className="experience">
          <h3>Experience <hr/> </h3> <p><strong>Web Application Developer</strong> (Jan 2022 - Present)</p>
          
          <ul> <li>Development and maintenance of web applications in WordPress.</li> <li>Implementation of bioinformatics solutions.</li> </ul>

          <p><strong>Technical Support</strong> (Mar 2020 - Dec 2021)</p>
          
          <ul> <li>Customer service and resolution of technical incidents.</li>
          <li>Configuration of computer systems and networks.</li> 
          </ul> 
          
          </div> <div className="education"> <h3>Education</h3> <p><strong>
          Higher Technician in Web Application Development</strong></p> <p>2022-2024</p> <p><strong> Technician in Microcomputing and Networks</strong></p>
          <p>2020-2022</p>
          </div>
            
        </div>
            
        <div className="right-column">
          <div className="languages">
            <h3>Languages <hr/> </h3>
            <SkillBar skill="Spanish" width="100%"/>
            <SkillBar skill="Catalan" width="75%"/>
            <SkillBar skill="English" width="50%" />
          </div>
          <div className="skills"> <h3>Skills <hr/> </h3>
            <SkillBar skill="HTML" width="100%"/>
            <SkillBar skill="CSS" width="100%"/>
            <SkillBar skill="JavaScript" width="80%" />
            <SkillBar skill="PHP" width="75%" />
            <SkillBar skill="MySQL" width="75%" />
            <SkillBar skill="React" width="75%" />
            <SkillBar skill="JS" width="80%" />
            <SkillBar skill="Java" width="75%" />
          </div> 
          </div>
            
        </div>);
};
const SkillBar = ({ skill, width}) => (<div className="skill-bar" > <span style={{width}}>{skill}</span> </div>);



function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <side className='side-icon'>
          <img src= {process.env.PUBLIC_URL + '/img/Icon.png'} className='use-icon' alt='Profile icon'></img>
        </side>
        <nav className="Navigation-container">
          <LinkBorderLine href="#home-title" content="Home" />
          <LinkBorderLine href="#cv-title" content="CV" />
          <LinkBorderLine href="#features-title" content="Features" />
          <LinkBorderLine href="#project-title" content="Projects" />
          <LinkBorderLine href="#art-title" content="Art" />
          <LinkBorderLine href="#contact-title" content="Contact" />
        </nav>
      </header>

      <main className="app-main">
        <section className='sections-contents-home' id='home-title'>
          <h1>Home <hr className="hr-golden-shine"/> </h1>

          <section className='profile-contents'>
            <side className='side-icon-profile'>
              <section className='social-profile'>
                <LinkBorderLine href="https://www.linkedin.com/in/daifer-ant-ramirez-ramirez-23a409326/" content="LinkedIn" />
                <LinkBorderLine href="https://github.com/JinDaifer" content="GitHub" />
              </section>
              <section className='icon-profile'>
                <img src={process.env.PUBLIC_URL + '/img/mi_s_face.jpg'} className='use-icon' alt='Profile icon'></img>
              </section>
            </side>
            <side>
              <h1>
                Hi, I'm Daifer Ramirez.
                <span>
                  <TypingText
                    texts={["Web Developer", "Digital Designer", "Digital Artist", "Game Developer", "GDScript Enthusiast"]}
                    typingSpeed={100} // velocidad de escritura en milisegundos
                    pauseTime={2000} // pausa entre cambios de texto
                    cursorBlinkSpeed={500} // velocidad de parpadeo del cursor
                  />
                </span>

              </h1>
              <AboutMe />
            </side>
          </section>
        </section>

        <section className='sections-contents' id='cv-title'>
          <h1>Curriculum <hr className="hr-golden-shine"/> <span className='high-span'>My experience and knowledge</span>  </h1>
          <section className='cd-section'>
            <Curriculum />
          </section>
        </section>


        <section className='sections-contents' id='features-title'>
          <h1>Features <hr className="hr-golden-shine"/> <span className='high-span'>What I know</span>  </h1>

          <section>
            <ContentCard imgPath="/img/godot_icon.png" title="Godot Engine" content="Creating immersive, high-performance games and interactive experiences with Godot Engine, leveraging GDScript for dynamic gameplay, 2D rendering, and intuitive scene management. Designed for rapid prototyping and scalable project development." useInterFiles={true} />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/11096/11096817.png" title="Web App Development" content="Building robust and scalable web applications tailored to your business needs using modern frameworks like React and Laravel." />
            <ContentCard imgPath="https://nyusoft.com/wp-content/themes/twentytwentyone-child/images/services/UI-UX-design-services/banner-image-ui-ux.png" title="UX/UI Design" content="Designing intuitive and engaging user interfaces and experiences that align with your brand and improve customer satisfaction." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/6220/6220416.png" title="Database Management" content="Ensuring efficient and secure database management with expertise in MySQL, MongoDB, and data optimization techniques." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/16990/16990245.png" title="API Development" content="Creating and integrating RESTful APIs to enable seamless communication between various services and applications." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/6213/6213731.png" title="Backend Development" content="Building solid backend infrastructures with PHP, Laravel, and MySQL to support your applications and ensure smooth operation." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/2835/2835542.png" title="SEO Optimisation" content="Enhancing your website's visibility on search engines with best practices in SEO to drive organic traffic and improve rankings." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/15015/15015925.png" title="WordPress Development" content="Building powerful and customizable websites using WordPress. From theme customization to plugin development, creating seamless experiences for users." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/2721/2721279.png" title="PHP Programming" content="Developing dynamic, database-driven websites and applications using PHP. Focused on server-side functionality and efficient code execution." />
            <ContentCard imgPath="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" title="React Development" content="Creating interactive UIs and responsive web applications using React. Building reusable components for efficient and scalable development." />



          </section>
        </section>

        <section className='sections-contents' id='project-title'>
          <h1>Projects <hr className="hr-golden-shine"/> <span className='high-span'>What I Do</span>  </h1>
          <section>
            <ContentCard imgPath="/img/acce_leralia.png" title="Mentoring Management" content="Connect mentors and mentees through streamlined scheduling and mentorship management. Book sessions, track progress, and maximize growth with tailored mentor-mentee interactions." useInterFiles={true}/>
            <ContentCard imgPath="/img/f_run.gif" title="Journey to be a god: Tower of time" content="An RPG I'm working on, set in a Chinese fantasy world. I don't think I'll finish it anytime soon, but I believe I'm on the right track." useInterFiles={true}/>
            <ContentCard imgPath="/img/chess.png" title="Chess" content="It was the first project I completed, where you can finish a game normally. I believe I remember that you can't even restart the game without closing it, and that the AI is broken and enabled by default. !Click to play¡" href='Chess' useInterFiles={true}/>
          </section>
        </section>

        <section className='sections-contents' id='art-title'>
          <h1>Art <hr className="hr-golden-shine"/> <span className='high-span'>My drawing collection</span>  </h1>
          <section>
            <ContentCard imgPath="/img/Han li.png" title="Han li" content="A fanart of 'Record of a Deadly Journey to Immortality'" useInterFiles={true}/>
            <ContentCard imgPath="/img/Lady Lin.png" title="Lady Lin" content="A fanart of... It was a long time ago" useInterFiles={true}/>
            <ContentCard imgPath="/img/Rage_luo_feng_V2.png" title="Luo Feng" content="My OC" useInterFiles={true}/>
            <ContentCard imgPath="/img/Liu Lian - sleeping.png" title="Liu Lian - sleeping" content="My OC of a random character" useInterFiles={true}/>
            <ContentCard imgPath="/img/TimeDoghuter2.png" title="Time Doghuter" content="My OC of a random character" useInterFiles={true}/>
            <ContentCard imgPath="/img/XenaPrincess.png" title="Xena Princess" content="Random character" useInterFiles={true}/>
            <ContentCard imgPath="/img/the_frozen_queen.png" title="The frozen queen" content="My OC of a random character" useInterFiles={true}/>
            <ContentCard imgPath="/img/Liu Lian.png" title="Liu Lian" content="My OC of a random character" useInterFiles={true}/>
            <ContentCard imgPath="/img/emperatriz_Ren Zhihao.png" title="Empress Ren Shihao" content="My OC of a random character" useInterFiles={true}/>
          </section>
        </section>

      <section className='sections-contents' id='contact-title'>
        <h1>Contact <hr className="hr-golden-shine"/> <span className='high-span'>If you are interested, contact me here.</span>  </h1>
          <ContactForm />
      </section>


      </main>

      <footer>
        <div class="footer-content">
          <p>&copy; 2024. All rights reserved by Daifer Ramirez</p>
          <section className='contact-data'>
            <LinkBorderLine href="" content="daiferramirez@gmail.com" />
            <LinkBorderLine href="" content="+34 653 84 81 46" />
            <LinkBorderLine href="" content="Barcelona, PG. Urrutia 94-96, 08031" />
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Home;
