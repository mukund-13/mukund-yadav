import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

       <div className="container experience__container">

       <div className="experience__ml">
         <h3>Machine Learning | Data Analysis</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TensorFlow / Pytorch</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Scikit-learn / Keras</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL / SQLite</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Numpy / Matplotlib / Pandas</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>
           </div>
         </div>

         {/* END OF ML */}

         <div className="experience__frontend">
           <h3>Frontend Development</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML/CSS/SASS/Bootstrap</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
             </article>
           </div>
         </div>

         {/* END OF FRONTEND */}

         <div className="experience__backend">
         <h3>Backend Development</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node.js/Express.js</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C# / .NET Core</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
           </div>
         </div>

         {/* END OF BACKEND  */}

         <div className="experience__backend">
         <h3>Cloud Computing | CI/CD</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS / GCP</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Proficient</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker / Kubernetes</h4>
                <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>IaaS / PaaS/ Saas</h4>
                <small className='text-light'>Intermediate</small>
              </div>
             </article>
           </div>
         </div>

        {/* END OF CLOUD */}
       </div>
    </section>
  )
}

export default experience