import React, { useContext } from 'react'
import NavBar from './NavBar'
import './theme.css'
import { ThemeContextProvider } from './ThemeContext'
const HomePage = () => {
const {theme}=useContext(ThemeContextProvider)
  return (
    <div className={`container ${theme=='light'?'dark':'light'}`}>
        <NavBar/>
        {theme=='light'?'your theme is dark':'your theme is light'}
    </div>
  )
}

export default HomePage