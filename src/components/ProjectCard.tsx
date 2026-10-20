import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types/site'
import { ProjectArt } from './ProjectArt'
import { Reveal } from './Reveal'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={index * 100} className="project-card">
      <a href="/projects" aria-label={`View ${project.name} project`}>
        <div className="project-image">
          <ProjectArt art={project.art} />
          <span className="project-hover">Explore<br />concept <ArrowUpRight size={20} /></span>
        </div>
        <div className="project-meta">
          <div>
            <span className="project-number">{project.number} / {project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>
          <span className="project-arrow"><ArrowUpRight size={21} strokeWidth={1.6} /></span>
        </div>
      </a>
    </Reveal>
  )
}
