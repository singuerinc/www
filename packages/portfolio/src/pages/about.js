import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h2 className="title">I am Nahuel Scotti. This is my portfolio.</h2>

      <p>
        <img src="/images/yo.png" alt="singuerinc" width="150" height="150" />
      </p>

      <p className="text">
        I started my training early in the world of creativity, at age 20,
        combining Graphic Design studies with endless hours to an agency in
        Argentina, getting to know the hardest advertising.
      </p>
      <p className="text">
        In 2004, in search of new opportunities, I travelled to Italy, where I
        worked in Studio Leonardo and I learnt what HTML and Javascript are. In
        2008, I was hired in DoubleYou as Flash developer. I had the opportunity
        to work with very capable people, from which I learnt a lot.
      </p>
      <p className="text">
        In 2013, after five years in DoubleYou, I changed to an international
        top production company,{" "}
        <a
          href="https://www.b-reel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          B-REEL
        </a>
        , where I worked as a Senior Developer with some of the most creative
        people around the World, for clients such as Google, Facebook and
        Spotify.
      </p>
      <p className="text">
        In 2016 I moved to Stockholm, Sweden. Currently, I’m working in a highly
        skilled Agile team as Tech Lead within the Game Bussiness Components
        department at{" "}
        <a
          href="https://www.netent.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NetEnt
        </a>
        , a premium supplier of digitally distributed gaming systems.
      </p>
      <p className="text">
        I make apps in HTML, CSS and Javascript (ES6/Typescript, React, Node.js)
        among others technologies.
      </p>

      <blockquote>
        <p>
          Disclaimer
          <br />
          This website contains thoughts, ideas, and opinions that are my own
          and they don't necessarily reflect those of my current or past
          employers.
        </p>
      </blockquote>
    </Layout>
  )
}

export default AboutPage
