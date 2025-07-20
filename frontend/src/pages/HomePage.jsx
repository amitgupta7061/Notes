import React from 'react'
import GreenBar from '../components/GreenBar'
import Menu from '../components/Menu'
import Items from '../components/Items'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
  return (
    <>
      <GreenBar />
      <Banner />
      <Menu />
      <Items />
      <AboutSection />
    </>
  )
}

export default HomePage
