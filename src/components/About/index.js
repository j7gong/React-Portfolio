import React from 'react';
import coverImage from "../../assets/Img/About Me/0.JPG";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} 
        className="img-thumbnail mx-1" 
        // style={{ width: "100%" }} 
        alt="cover" 
        />
      <p>
        Hi, glad to meet you here. Currently I'm working as a data analyst and also enthusiastic about software development. 
      </p>
    </section>
  );
}

export default About;