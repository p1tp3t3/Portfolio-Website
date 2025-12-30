import { useState } from "react";
import ContentList from "./content-list";

const ProjectList = ({ list = ['data 1', 'data 2', 'data 3'] }) => {
  const [expanded, setExpanded] = useState(false); // track expanded state

  const toggleExpand = () => setExpanded(!expanded);

  const visibleProjects = expanded ? list : list.slice(0, 4);

  return (
    <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
        <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[1.5em] items-center flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg>
                    <b>My Projects</b>
                </h1>
            </div>
            <div className="relative pl-5 border-l grid gap-5 border-white border-l-2 w-full">
                {visibleProjects.map((project, i) => (
                <Row key={i} data={project} />
                ))}
            </div>
        </div>
      

      {list.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={toggleExpand}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

const Row = ({ data }) => {
  const { name, description, category, repo_link, date_started, date_finished } = data;

  return (
    <div className="grid gap-3 border-b border-b-1 border-gray-700 pb-4 w-full">
      {/* Circle */}
      <div className="absolute left-[-9px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white mt-2"></div>

      {/* Project Card */}
      <div className="text-white flex w-full">
        {/* Project Content */}
        <div className="w-full flex flex-col justify-between">
          <div>
            <div className="mb-3">
                <h3 className="text-lg font-bold">{name || "Project Title"}</h3>
                <div className="text-sm">
                    <p>Started Since {new Date(date_started).toDateString()}</p>
                    <p>Finished Since {new Date(date_finished).toDateString()}</p>
                </div>
                <div className="text-[0.8em] mt-2">
                    <div className="flex items-center gap-1 flex-wrap w-full whitespace-nowrap">
                        {category.item.map((e, i) => 
                        <span className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400">
                            {e}
                        </span>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-gray-300 text-sm">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam reiciendis tempora in! Minus odit magni vitae corrupti dolorem veritatis libero illum, earum laboriosam debitis perspiciatis provident ipsa nobis eum."}
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-4 flex gap-4">
            <a
              href={repo_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
