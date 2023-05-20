import { AboutMe } from "@/components/AboutMe";
import { BlogPost } from "@/components/BlogPost";
import { CurrentStack } from "@/components/CurrentStack";
import { Pairs } from "@/components/Pairs";
import { RandomColor } from "@/components/RandomColor";
import { Repo } from "@/components/Repo";
import { Story } from "@/components/Story";
import { Terminal } from "@/components/Terminal";
import { TicTacToe } from "@/components/TicTacToe";
import { Timeline } from "@/components/Timeline";
import { Timer } from "@/components/Timer";
import { Title } from "@/components/Title";
import { Website } from "@/components/Website";
import { getAll } from "@/lib/project";

export default async function Page() {
  const projects = getAll();

  return (
    <>
      <Timeline projects={projects} />
      <ul className="flex flex-col items-center mx-6 my-12 select-none lg:mx-12 gap-y-6 lg:gap-y-0 lg:gap-x-24 lg:flex-row">
        <Title />
        {projects.map((project, idx) => {
          return (
            <>
              {project.type === "website" && (
                <Website key={idx} project={project} />
              )}
              {project.type === "about-me" && <AboutMe key={idx} />}
              {project.type === "blog-post" && (
                <BlogPost key={idx} post={project} />
              )}
              {project.type === "story" && <Story key={idx} post={project} />}
              {project.type === "repo" && <Repo key={idx} repo={project} />}
              {project.type === "random-colors" && <RandomColor key={idx} />}
              {project.type === "tic-tac-toe" && <TicTacToe key={idx} />}
              {project.type === "pairs" && <Pairs key={idx} />}
              {project.type === "timer" && (
                <Timer key={idx} project={project} />
              )}
              {project.type === "terminal" && <Terminal key={idx} />}
              {project.type === "current-stack" && <CurrentStack key={idx} />}
            </>
          );
        })}
      </ul>
    </>
  );
}
