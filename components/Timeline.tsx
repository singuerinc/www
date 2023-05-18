import { IProject } from "@/lib/project";
import getYear from "date-fns/getYear";

const isTypeAllowed = ({ type }: { type: IProject["type"] }) =>
  type === "blog-post" ||
  type === "story" ||
  type === "current-stack" ||
  type === "random-colors" ||
  type === "repo" ||
  type === "terminal" ||
  type === "tic-tac-toe" ||
  type === "website";

export function Timeline({ projects }: { projects: IProject[] }) {
  let lastYear: string | null = null;
  return (
    <div className="hidden mx-12 gap-x-24 lg:flex">
      <div className="w-full h-2 shrink-0"></div>
      <div className="h-2 mx-48 w-[40rem] shrink-0"></div>
      <div className="flex items-center pb-4 text-xl text-gray-700 border-b border-gray-900 gap-x-24">
        {projects.filter(isTypeAllowed).map((project, idx) => {
          const projectYear = getYear(project.date).toString();
          const showYear = projectYear !== lastYear;
          lastYear = projectYear;

          if (project.type === "website" || project.type === "random-colors") {
            return (
              <div key={idx} className="shrink-0 w-[40rem]">
                {showYear && projectYear}
              </div>
            );
          } else if (project.type === "blog-post" || project.type === "story") {
            return (
              <div key={idx} className="shrink-0 w-[30rem]">
                {showYear && projectYear}
              </div>
            );
          } else if (project.type === "terminal") {
            return (
              <div key={idx} className="shrink-0 w-[24rem]">
                {showYear && projectYear}
              </div>
            );
          } else if (
            project.type === "current-stack" ||
            project.type === "tic-tac-toe" ||
            project.type === "repo"
          ) {
            return (
              <div key={idx} className="shrink-0 w-[20rem]">
                {showYear && projectYear}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
