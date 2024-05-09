import React from 'react'
import Logo from "../../assets/AIFC.png"
import "./style.css"
const Header: React.FC = () => {
    const handleLogoClick = () => {
        window.location.href = "https://aifc.kz/ru"
    }
    return (
        <div className='header-container'>
            <div className="header-container logo">
                <img onClick={handleLogoClick} src={Logo} width={100} alt="AIFC" />
            </div>

        </div>
    )
}

export default Header