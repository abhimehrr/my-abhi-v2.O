import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import ProjectViewHeader from "../components/ProjectViewHeader";
import ProjectViewFooter from "../components/ProjectViewFooter";
import ImageSlider from "../components/projects/ImageSlider";
import ErrorPage from "../pages/404";

// Assets
// import Project from "../assets/data/project";

// Icons
import stack from "../assets/logos/stack.png";
import gallery from "../assets/logos/gallery.png";
import info from "../assets/illustrator/info.svg";

export default function ProjectView() {
  const { slug } = useParams();
  const [Project, setProject] = useState([]);
  const currentProject = Project?.filter((p) => p.slug === slug)[0];

  useEffect(() => {
    fetch("https://abhi.shre.in/assets/data/project.json")
      .then((res) => res.json())
      .then((res) => setProject(res));
    window.scrollTo({ top: "0", behavior: "smooth" });
    window.document.title = "Project | Abhishek";
  }, []);

  if (!currentProject) return <ErrorPage />;
  else
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="px-2 lg:w-4/5 md:w-11/12 sm:w-full xl:w-9/12 m-auto">
          <ProjectViewHeader />
          <div className="mt-4 min-h-screen">
            <div className="mb-10">
              <h1 className="text-3xl text-gray-200 font-bold tracking-wide">
                {currentProject?.title}
              </h1>
              <div className="mt-2 text-lg flex items-center gap-4">
                <p className="text-gray-400">{currentProject?.period}</p>
                <Link
                  to={currentProject?.liveLink}
                  target="_blank"
                  className="text-pink-400 hover:text-pink-500 font-semibold hover:tracking-wide transition-all"
                >
                  😍
                  <span className="underline ml-2">See how it looks!</span>
                </Link>
              </div>
            </div>
            <div className="my-10">
              <h2 className="flex items-center gap-4 text-4xl max-sm:text-center text-gray-200 mb-10 font-medium tracking-wide">
                Gallery
                <img
                  className="w-10 aspect-square hover:scale-110 cursor-pointer transition-all"
                  src={gallery}
                  alt="gallery"
                />
              </h2>
              <ImageSlider images={currentProject?.screenshots} />
            </div>

            <div className="mt-20">
              <h2 className="flex items-center gap-4 text-4xl max-sm:text-center text-gray-200 mb-10 font-medium tracking-wide">
                Info
                <img
                  className="w-10 aspect-square hover:scale-110 cursor-pointer transition-all"
                  src={info}
                  alt="information"
                />
              </h2>
              <div className="relative">
                <div className="absolute left-0 h-full w-1 bg-purple-500 rounded-full"></div>
                {currentProject?.desc.map((p, i) => (
                  <p
                    key={i}
                    className={`text-xl ml-8 my-2 text-gray-400 ${p.class}`}
                  >
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2 text-lg flex items-center gap-1">
              <p className="text-gray-400">Find full source code on</p>
              <Link
                to={currentProject?.github}
                target="_blank"
                className="text-purple-400 hover:text-purple-500 font-semibold hover:tracking-wide transition-all"
              >
                <span className="underline ml-2">GitHub.com</span>
              </Link>
            </div>
            <div className="my-10">
              <h2 className="flex items-center gap-4 text-4xl text-gray-200 mb-10 font-medium tracking-wide">
                Stack
                <img
                  className="w-10 aspect-square hover:scale-110 cursor-pointer transition-all"
                  src={stack}
                  alt="tech stack statckoverflow"
                />
              </h2>
              <div className="flexs gap-4 flex-wrap">
                {currentProject?.tech.map((tech, i) => (
                  <div className="my-8" key={i}>
                    <h3 className="text-2xl mb-4 text-pink-500 tracking-wide">
                      {tech.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 rounded">
                      {tech.tools.map((t, index) => (
                        <button
                          key={index}
                          className="w-[48%] group flex items-center gap-4 border border-pink-500 text-left text-xl px-5 py-8 text-gray-200 hover:bg-pink-800 tracking-wide transition-all rounded-md"
                        >
                          <div className="w-8 h-8 bg-pink-500 group-hover:bg-gray-200 group-hover:text-pink-600 grid place-items-center text-2xl font-semibold rounded transition-all">
                            {t.charAt(0)}
                          </div>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-20 flex">
              <Link
                className="text-2xl font-semibold flex items-center group gap-4"
                to="mailto:hloo.abhi@gmail.com"
              >
                <span className="text-pink-500 group-hover:text-gray-300 transition-all">
                  Let's
                </span>
                <span className="text-gray-300 group-hover:text-pink-600 transition-all">
                  Talk
                </span>
                <i className="fa-solid fa-arrow-right text-gray-300 group-hover:text-pink-600 group-hover:translate-x-2 transition-all"></i>
              </Link>
            </div>
          </div>
          <ProjectViewFooter />
        </div>
      </div>
    );
}
