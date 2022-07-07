import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" path="/about/" />
      <p className="text mt-0">Hi, I am Nahuel Scotti.</p>
      <p className="text">
        I started my training early in the world of creativity, at age 20,
        combining Graphic Design studies with endless hours to an agency in
        Argentina, getting to know the hardest advertising.
      </p>
      <p className="text">
        In 2004, I traveled to Italy, where I worked in a small studio and I
        learned what HTML and Javascript are.
      </p>
      <p className="text">
        In 2008, I started working at DoubleYou as Flash developer. I had the
        opportunity to work with very capable people, from which I learned a
        lot.
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
        </a>{" "}
        (Forbes #37 America's Most Promising Companies), where I worked as a
        senior developer with some of the most creative people around the world,
        for clients such as Google, Facebook, and Spotify.
      </p>
      <p className="text">
        In 2016, I moved to Stockholm, Sweden to work in a highly-skilled Agile
        team as a developer within the Framework department at{" "}
        <a
          href="https://www.netent.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NetEnt
        </a>
        , a premium supplier of digitally distributed gaming systems. Working
        building internal tools (dashboards, CLI programs), applications,
        libraries, and UI components built with technologies such as React,
        Redux, Node.js, Typescript, etc. After a couple of years, I got promoted
        to Tech Lead within the Player Tech department.
      </p>
      <p className="text">
        Currently, I work as Head of Frontend and Engineering Manager at{" "}
        <a
          href="https://www.dietdoctor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diet Doctor
        </a>
        , a company that “Empowers people everywhere to dramatically improve
        their health.”
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
