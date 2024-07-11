import React from 'react'
import '../Style/portfolio.css'
import links from '../Images/link.png'


const Portfolio = () => {
  return (
    <div className='port-container'>
      <div className='port-content'>
        <div className='port-projects port-projects1'>
          <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              
              <a href="https://pokedex-cris.netlify.app/" target='blank'><p>View page</p><img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects2'>
          <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href="https://quotes-cris.netlify.app/" target='blank'><p>View page</p><img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects3'>
          <div className='port-projects-paragraph'>
            <p>Moya's Project</p>
            <label className='port-label'>
              
              <a href="https://moya.us/maritime"><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects4'>
        <div className='port-projects-paragraph'>
            <p>Moya's Project</p>
            <label className='port-label'>
              
              <a href="https://template-website-moya.netlify.app/" target='black'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects5'>
          <div className='port-projects-paragraph'>
            <p>Nobara's Project</p>
            <label className='port-label'>
            <a href='' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
        <div className='port-projects port-projects6'>
         <div className='port-projects-paragraph'>
            <p>Personal Project</p>
            <label className='port-label'>
              <a href='https://weatherapp-cris.netlify.app/' target='blank'><p>View page</p> <img src={links} alt="enlace"/></a>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio