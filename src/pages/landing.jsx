import React from "react"
import { Link } from "react-router-dom"
import '../styles/main.css'

export default function App(){

    // returning the actual page
    return (
      <div className="main-container">
        <div className="header-container">Alto</div>
        <div className="subheader-container">
          <Link to="/" className="links">Home</Link>
          <Link to="/options" className="links">Options</Link>
          <Link to="/about" className="links">About</Link>
        </div>
      </div>
    )
  }