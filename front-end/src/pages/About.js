import React from "react";
import "./About.css"; // Import your About.css file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <div className="highlight-section">
          <p className="highlight-sentence">
            Over <span className="highlight-number">500,000</span> Americans travel to receive medical treatment each year.
          </p>
          <div className="highlight-text">
            <span>Expensive.</span> <span>Long Wait.</span> <span>Similar Culture.</span>
          </div>
        </div>
        <div className="two-column-section">
          <div className="column">
          </div>
        </div>
        <div className="two-column-section">
          <div className="column">
            <div className="picture-column">
              <img src="https://i.imgur.com/6Dk0p5P.jpg" alt="Francis" />
            </div>
          </div>
          <div className="column">
            <div className="text-column">
              <h2>Francis Cruz</h2>
              <h4>Release Manager/Backend developer</h4>
              <p>
                {"I am a Software Engineer who crafts code with precision and passion. In my previous career, I was a Customer Service agent at the US Open while also doing background acting on the side and directing a series of short films. I excel at client experience and collaboration to ensure an effective product for the company and client. I want to bring my skills of communication, problem solving and active listening to provide sophisticated solutions to software development’s never-ending challenges"}
              </p>
            </div>
          </div>
        </div>
        <div className="two-column-section">
          <div className="column">
            <div className="picture-column">
             <img src="https://i.imgur.com/oOYLTh5.jpg" alt="Anna" />
            </div>
          </div>
          <div className="column">
            <div className="text-column">
              <h2>Anna Bilan</h2>
              <h4>Product Manager/Frontend developer</h4>
              <p>
                {"I am a seasoned technology consultant who can build, design, brand and sell your digital products to the right group of users. With a background in national gymnastics, I've embraced determination, discipline, and excellence, channeling these qualities into transforming innovative ideas into tangible and marketable solutions. 'Your dreams are my goals.'"}
              </p>
            </div>
          </div>
        </div>
        <div className="two-column-section">
          <div className="column">
            <div className="picture-column">
             <img src="https://i.imgur.com/FBkdaAk.jpg" alt="Haroon" />
            </div>
          </div>
          <div className="column">
            <div className="text-column">
              <h2>Haroon Khan</h2>
              <h4>Frontend Lead</h4>
              <p>
                {"I am a Software Engineer who loves adapting to different challenges and creating software through various different platforms. In my previous career, I worked as a stretch therapist who adhered to my client's specific needs by creating specific programs for them to follow while also working with them and my team to perform 1:1 assisted stretches. I plan to use my teamwork and creativity to handle web development projects."}
              </p>
            </div>
          </div>
        </div>
        <div className="two-column-section">
          <div className="column">
            <div className="picture-column">
             <img src="https://i.imgur.com/W60pBMt.png" alt="Matt" />
            </div>
          </div>
          <div className="column">
            <div className="text-column">
              <h2>Matt Herrera</h2>
              <h4>Backend Lead</h4>
              <p>
                {"I am a software engineer who excels at analyzing large batches of data to optimize business sales. In my previous career I improved conversion rates to help brands determine their catalog assortment based on profitability. As a team leader or an independent worker I believe in collaborating to break down intricate problems to come up with effective solutions. I can build a website, fix code with the intention of helping a company reach their key goals."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;