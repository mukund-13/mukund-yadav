import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/URC.jpeg'
import IMG2 from '../../assets/GMMR.png'
import IMG3 from '../../assets/crossword.png'
import IMG4 from '../../assets/snake.png'
import IMG5 from '../../assets/baseball.jpeg'
import IMG6 from '../../assets/va.jpeg'
import IMG7 from '../../assets/face.png'
import IMG8 from '../../assets/home.jpeg'
import IMG9 from '../../assets/stock.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'University Rover Challenge, 2020',
    github: 'https://github.com/mukund-13/Team-Vyadh',
    description: "Participated in URC 2020, where the team's responsibiltiy was to design a function Rover. Qualified as one of the thirty two teams out of five thousand."
  },
  {
    id: 2,
    image: IMG2,
    title: 'Great Marble Map of Rome',
    github: 'https://github.com/mukund-13/GMMR',
    description: "Developed a webapp using Django for the GMMR. A user could visit the app and perform basic functions like search/view data. The app was used by the Department of Liberal Arts at my school"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crossword',
    github: 'https://github.com/mukund-13/Crossword-Pygame',
    description: "Created a Crossword puzzle using Pygame."
  }, 
  {
    id: 4,
    image: IMG4,
    title: 'Snake-Hamilton Cycle Solver',
    github: 'https://github.com/mukund-13/Snake-Hamilton-Solver',
    description: "Created a Snake game solver where I implemented the Hamiltonian cycle to find the nearest accessible node using Pygame."
  }, 
  {
    id: 5,
    image: IMG5,
    title: 'Baseball Stats Analyst',
    github: 'https://github.com/mukund-13/Baseball-Stats-Analysis',
    description: "Engineered a baseball stats analysing model where the model fetches data from an API and converts it into a sqlite table. The user can then run sql queries on it to perfom data analysis."
  }, 
  {
    id: 6,
    image: IMG6,
    title: 'Voice Assistant',
    github: 'https://github.com/mukund-13/Voice-Assistant-AssemblyAI',
    description: "Developed a Voice Assistant using AssemblyAI and Deep Learning. The User can talk to the software and expect answers as text in return."
  },
  {
    id: 7,
    image: IMG7,
    title: 'Face Recognition App',
    github: 'https://github.com/mukund-13/Face-Recognition',
    description: "Developed a face recognition app using Siamese Neural Networks. Using the app, the user can add extra authentication to their phones."
  },
  {
    id: 8,
    image: IMG8,
    title: 'House Value Predictor',
    github: 'https://github.com/mukund-13/House-Value-Predictor',
    description: "Created a Machine Learning model using Scikit-learn which would predict the value of a house based on different factors like number of rooms, size, vicinity to a school etc."
  },
  {
    id: 9,
    image: IMG9,
    title: 'Stock Predictor',
    github: 'https://github.com/mukund-13/Stock-prediction',
    description: "Created a Neural Network using Keras which would predict the value of a stock for the following month, using the data from previous five years."
  }
]
  

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some Of My</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, description}) => {
           return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
            <a href={github} className='btn btn-primary'>Github</a>
            {/* <a href={demo}className='btn btn-primary' target='_blank'>Video Demo</a> */}
            </div>
            
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default portfolio