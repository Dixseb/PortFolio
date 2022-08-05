import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'Javascript', xp:1.8},
            {id: 1, value: 'CSS', xp:1},
            {id: 1, value: 'HTML', xp:1},
            {id: 1, value: 'PHP', xp:1}
        ],
        frameworks: [
            {id: 1, value: 'React', xp:1.8},
            {id: 1, value: 'Symfony', xp:1},
            {id: 1, value: 'Sass', xp:0.8},
            {id: 1, value: 'Bootstrap', xp:1},
        ]
    }

  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className='languagesFrameworks'>
        <ProgressBar 
            languages={languages}
            className='languagesDisplay'
            title='languages'
        />
        <ProgressBar
            languages={frameworks}
            title='frameworks & bibliothèques'
            className='frameworksDisplay'
        />
      </div>
    )
  }
}
