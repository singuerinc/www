import { AboutMe } from "@/components/AboutMe";
import { BlogPost } from "@/components/BlogPost";
import { CurrentStack } from "@/components/CurrentStack";
import { RandomColor } from "@/components/RandomColor";
import { Repo } from "@/components/Repo";
import { Terminal } from "@/components/Terminal";
import { TicTacToe } from "@/components/TicTacToe";
import { Title } from "@/components/Title";
import { Website } from "@/components/Website";
import { getAll } from "@/lib/project";

export default async function Page() {
  const projects = getAll();

  return (
    <ul className="flex items-center mx-12 gap-x-24">
      <Title />
      {projects.map((project) => {
        return (
          <>
            {project.type === "website" && <Website project={project} />}
            {project.type === "about-me" && <AboutMe about={project} />}
            {project.type === "blog-post" && <BlogPost post={project} />}
            {project.type === "repo" && <Repo repo={project} />}
            {project.type === "random-colors" && <RandomColor />}
            {project.type === "tic-tac-toe" && <TicTacToe />}
            {project.type === "terminal" && <Terminal />}
            {project.type === "current-stack" && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
