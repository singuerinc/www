import { IProject } from "@/lib/project";
import { getYear } from "date-fns";

const isTypeAllowed = ({ type }: { type: IProject["type"] }) =>
  type === "blog-post" ||
  type === "story" ||
  type === "current-stack" ||
  type === "random-colors" ||
  type === "pairs" ||
  type === "repo" ||
  type === "terminal" ||
  type === "tic-tac-toe" ||
  type === "timer" ||
  type === "website";

export function Timeline({ projects }: { projects: IProject[] }) {
  let lastYear: string | null = null;
  return (
    <div className="hidden mx-12 gap-x-24 lg:flex">
      <div className="w-full h-2 shrink-0"></div>
      <div className="h-2 mx-48 w-[40rem] shrink-0"></div>
      <div className="flex items-center text-xl border-b border-gray-700 gap-x-24">
        {projects.filter(isTypeAllowed).map((project, idx) => {
          const projectYear = getYear(project.date).toString();
          const showYear = projectYear !== lastYear;
          lastYear = projectYear;

          let size;

          if (project.type === "website") {
            size = "w-[40rem]";
          } else if (project.type === "random-colors") {
            size = "w-[10rem]";
          } else if (project.type === "blog-post" || project.type === "story") {
            size = "w-[30rem]";
          } else if (project.type === "terminal") {
            size = "w-[24rem]";
          } else if (
            project.type === "current-stack" ||
            project.type === "tic-tac-toe" ||
            project.type === "timer" ||
            project.type === "pairs" ||
            project.type === "repo"
          ) {
            size = "w-[20rem]";
          }

          return (
            <div
              key={idx}
              className={`shrink-0 text-gray-700 pb-4 top-2 relative pl-4 ${size} ${
                showYear && "border-l border-gray-700"
              }`}
            >
              {showYear && projectYear}
            </div>
          );
        })}
      </div>
    </div>
  );
}
