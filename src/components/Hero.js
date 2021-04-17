import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson }) => {
  return (
    <header className="hero">
      {showPerson && (
        <StaticImage
          src="../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person typing"
        />
      )}
    </header>
  )
}

export default Hero
