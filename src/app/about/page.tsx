import React from 'react'
import AboutHero from '../components/aboutpage-sections/AboutHero'
import OurStory from '../components/aboutpage-sections/OurStory'
import WhyChoose from '../components/aboutpage-sections/WhyChoose'
import Statistics from '../components/aboutpage-sections/Statistics'

const AboutPage = () => {
  return (
    <div>
        <AboutHero></AboutHero>
        <OurStory></OurStory>
        <WhyChoose></WhyChoose>
        <Statistics></Statistics>
    </div>
  )
}

export default AboutPage