import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{ backgroundColor: theme.secondary }}>
    <p style={{ color: theme.tertiary }}>
        Made by
        <span style={{ color: theme.primary, margin: '0 0.5rem -1rem 0.5rem' }}>
            <a href="https://taranjeetsingh.vercel.app/" target="_blank" rel="noopener noreferrer">
                Taranjeet Singh
            </a>
        </span>
    </p>
</div>
    )
}

export default Footer

