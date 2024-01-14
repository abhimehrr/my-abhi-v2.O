import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Assests
import project from '../../assets/illustrator/project.svg'
// import Project from '../../assets/data/project'

export default function Projects() {
  const [Project, setProject] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = parseInt(searchParams.get('project'))
  const projectCount = query > Project?.length ? Project.length : query || 2

  const [projectIndex, setProjectIndex] = useState(projectCount)

  const [loader, setLoader] = useState(false)

  const [elements, setElements] = useState(() => {
    var arr = []
    for(var i = 0; i < projectCount; i++) {
      arr.push(Project[i])
    }
    return arr
  });

  const loadMore = () => {
    if(projectIndex === Project.length) return
    setLoader(true)
    setTimeout(() => {
      setElements([...elements, Project[projectIndex]])
      setProjectIndex(i => i + 1)
      setSearchParams(`project=${projectIndex + 1}`)
      setLoader(false)
    }, 500);
  };

  useEffect(() => {
    fetch('https://abhi.shre.in/assets/data/project.json')
    .then(res => res.json())
    .then(res => setProject(res))
  }, [])

  return (
    <div className='px-4'> 
      <div className='relative text-4xl min-h-screen min-w-full flex items-center justify-center flex-col sm:text-6xl font-bold tracking-wider text-gray-800'>
        <div className="absolute sm:w-72 w-64 sm:h-72 h-64 opacity-40 blur-3xl rounded-full bg-pink-500s"></div>
        <div className="relative w-5/6 max-sm:w-full">
          <img className='object-cover' src={project} alt="developer" />
        </div>
      </div>
      
      <div className="mb-10s flexflex-col">
        <div className="flex min-[1170px]:justify-center justify-start">
          <h2 className='bg-white text-gray-700 px-16 py-4 text-2xl font-semibold shadow shadow-purple-400 rounded-lg'>Project</h2>
        </div>
        <VerticalTimeline>
          {elements.map((p, i) => (
            <React.Fragment key={p.id}>
              <VerticalTimelineElement
              contentStyle={{
                background: "white",
                boxShadow: "1px 1px 5px #c084fc",
                borderRadius: '6px',
                textAlign: "left",
                padding: "1rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:  "0.5rem solid #9ca3af",
              }}
              date={p.period}
              icon={<i className={p.icon}></i>}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: ' #9ca3af'
              }}
            >
              <h3 className="font-bold text-2xl text-gray-600">{p.shortTitle}</h3>
              <p className="!mt-2 !font-normal text-gray-600">
                {p.shrotDesc}
              </p>
              <div className="mt-4 flex items-center max-sm:items-start max-sm:flex-col gap-4">
                <Link to={p.liveLink} target='_blank' className="font-semibold text-gray-800 bg-gray-100 hover:scale-105 py-1 px-3 transition-all rounded-full inline-flex items-center gap-2">
                  <i className="fa-solid fa-link"></i>
                  Live Link
                </Link>
                <Link to={`/project-view/${p.slug}`} className="font-semibold text-purple-500 border border-purple-500 hover:scale-105 py-1 px-3 transition-all rounded-full inline-flex items-center gap-2">
                  View Project
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </VerticalTimelineElement>
            </React.Fragment>
          ))}
          <VerticalTimelineElement
            iconOnClick={loadMore}
            icon={loader ? <span className='loader-round-dot'></span> : projectIndex < Project.length ? <i className='fa-solid fa-plus'></i> : <i className="fa-solid fa-ban"></i>}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateY(-20px)',
              color: projectIndex < Project.length ? '#9ca3af' : 'red',
              cursor: projectIndex < Project.length ? 'pointer' : 'not-allowed'
            }}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}