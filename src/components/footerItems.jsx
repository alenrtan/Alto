import React from "react"
import { Link } from "react-router-dom"
import '../styles/main.css'

export default function footerItems(){
    return (
        <footer>
          <div className="left-foot">&copy; 2024 alenrtan</div>
          <div className="right-foot">
            <Link to="/privacy" className="links right-foot">Privacy Statement</Link>
            <Link to="/contact" className="links right-foot">Contact</Link>
          </div>
        </footer>
    )
}