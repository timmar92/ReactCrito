import React from 'react'
import SectionTitle from './generics/SectionTitle';
import ProjectCase from './generics/ProjectCase';

const ProjectCaseSection = () => {
  return (
    <section className="project-case-section">
    <div className="container">
        <div className="section-title">
            <SectionTitle title='Project & Case Studies' description='Let’s Look At Our Global Projects' />
        </div>
        <div className="projects-cases">
            <ProjectCase title='case1' to='/blabla' />
            <ProjectCase title='case2' to='/blabla' />
            <ProjectCase title='case3' to='/blabla' />
            <ProjectCase title='case4' to='/blabla' />
        </div>
        <div className="center-content">
            <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default ProjectCaseSection