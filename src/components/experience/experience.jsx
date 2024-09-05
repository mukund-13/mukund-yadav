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
         <h3>Machine Learning Researcher [Jan 2023-Present]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Computer Vision/LLMs</h4>
                <small className='text-light'>VLMs, Transformers, Diffusion Models</small>
              </div>
             </article>
             
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Published Research</h4>
                <small className='text-light'>PyTorch, CNN, Biomedical Imaging, Image Enhancement</small>
              </div>
             </article>


             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Parallel Computation</h4>
                <small className='text-light'>Parallelization with speed-up by 45%, DDP, CUDA, GPU</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Data Processing</h4>
                <small className='text-light'> Preprocessing, Pandas, Seaborn, Numpy</small>
              </div>
             </article>
           </div>
         </div>

         {/* END OF ML */}

         <div className="experience__frontend">
           <h3>Software Engineer [May 2023 - August 2023]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Backend Engineering</h4>
                <small className='text-light'>RESTful API, Node.js, Express, Kubernetes</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Database Management</h4>
                <small className='text-light'>AWS RDS, indexing, caching, normalization</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Frontend Engineering</h4>
                <small className='text-light'>React, TypeScript</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cloud Computing</h4>
                <small className='text-light'>AWS, EKS, Docker containers, 1000+ new users.</small>
              </div>
             </article>
           </div>
         </div>

         {/* END OF SWE */}

         <div className="experience__backend">
         <h3>ML in Wireless Signals[Jan 2023 - Dec 2023]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Reinforcement Learning</h4>
                <small className='text-light'>RL agent for sinusoidal signal detection, Proximal Policy Optimization</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Stochastic Analysis</h4>
                <small className='text-light'>Generalized Likelihood Ratio Test, Addititve White Gaussian Noise, Derived formula for threshold of Pfa</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Multithreading</h4>
                <small className='text-light'>C++, mutex, eigen, reducing training time by 45%</small>
              </div>
             </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Results</h4>
                  <small className='text-light'>70% increase in SNR, 30% increase in detection-false alarm ratio </small>
                </div>
              </article>
           </div>
         </div>

         {/* END OF WIRELESS */}

         <div className="experience__backend">
         <h3>ML Engineer[Aug 2022 - Dec 2022]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Natural Language Processing</h4>
                <small className='text-light'>Python, NLTK, Automatic Speech Recognition</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Deep Learning</h4>
                <small className='text-light'>LSTM, PyTorch, Data Augmentation, accuracy of 98%</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MLOps</h4>
                <small className='text-light'>Launched model on AWS, EC2, S3, Lambda</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Impact</h4>
                <small className='text-light'>Helped 100+ senior citizes, allowing accuracte and timely medical info</small>
              </div>
             </article>
           </div>
         </div>

        {/* END OF NLP */}

          <div className="experience__backend">
         <h3>Full Stack Developer[May 2021 - Aug 2021]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Backend Development</h4>
                <small className='text-light'>Django, Python</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Frontend Development</h4>
                <small className='text-light'>React, JavaScript</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Database</h4>
                <small className='text-light'>SQLite3, AWS RDS</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cloud</h4>
                <small className='text-light'>AWS, Lambda, EC2, nginx, gunicorn</small>
              </div>
             </article>
           </div>
         </div>
         {/* END OF FULL STACK */}
         <div className="experience__backend">
         <h3>Tutor/Teaching Assistant[March 2019 - Present]</h3>
           <div className="experience__content">
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Advanced Mathematics</h4>
                <small className='text-light'>Multivariate Calculus, Linear Algebra, Differential Equations, Statistics</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>VLSI, Comp Architecture</h4>
                <small className='text-light'>C/C++, Assembly, Verilog, Multiprocessor Programming</small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Embedded Systems</h4>
                <small className='text-light'>C/C++, ARM processors </small>
              </div>
             </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Physics</h4>
                <small className='text-light'>Electrodynamics, Quantum Mechanics, Relativity</small>
              </div>
             </article>
           </div>
         </div>
         {/* END OF FULL STACK */}
         
       </div>
    </section>
  )
}

export default experience