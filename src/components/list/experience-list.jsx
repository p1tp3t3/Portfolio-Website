import { useState } from "react";
import ContentList from "./content-list";

const ExperienceList = ({ list = ['data 1', 'data 2', 'data 3'] }) => {
  const [expanded, setExpanded] = useState(false); // track expanded state

  const toggleExpand = () => setExpanded(!expanded);

  const visibleProjects = expanded ? list : list.slice(0, 2);

  return (
    <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
        <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[1.5em] items-center flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                    <b>Experiences</b>
                </h1>
                {list.length > 2 && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={toggleExpand}
                            className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-blue-700 transition"
                        >
                            {expanded ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
            <div className="w-full">
                <div className="relative pl-5 border-l grid gap-5 border-white border-l-2 w-full">
                    {visibleProjects.map((project, i) => (
                    <Row key={i} data={project} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

const Row = ({ data }) => {
  const { title, description, content = ['data 1'], repoUrl, demoUrl } = data;

  return (
    <div className="grid gap-3 border-b border-gray-700 border-b-1 pb-4 w-full">
      {/* Circle */}
      <div className="absolute left-[-9px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white mt-2"></div>

      {/* Project Card */}
      <div className="text-white flex w-full">
        {/* Project Content */}
        <div className="w-full flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center w-full justify-between">
                <h3 className="text-lg font-bold">{title || "Experience Title"}</h3>
                <div className="text-[0.8em]">
                    <p>2025</p>
                </div>
            </div>
            <p className="text-gray-300 text-[0.9em]">
              {description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam reiciendis tempora in! Minus odit magni vitae corrupti dolorem veritatis libero illum, earum laboriosam debitis perspiciatis provident ipsa nobis eum."}
            </p>
            <div className="py-2">
                <ul className="list-disc pl-5 text-[0.8em] text-gray-500 grid gap-2 text-justify">
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, autem porro. Officia provident reprehenderit, libero natus possimus eveniet optio inventore nulla impedit similique? Perspiciatis rerum fugit consequuntur excepturi delectus corrupti.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, autem porro. Officia provident reprehenderit, libero natus possimus eveniet optio inventore nulla impedit similique? Perspiciatis rerum fugit consequuntur excepturi delectus corrupti.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, autem porro. Officia provident reprehenderit, libero natus possimus eveniet optio inventore nulla impedit similique? Perspiciatis rerum fugit consequuntur excepturi delectus corrupti.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, autem porro. Officia provident reprehenderit, libero natus possimus eveniet optio inventore nulla impedit similique? Perspiciatis rerum fugit consequuntur excepturi delectus corrupti.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
