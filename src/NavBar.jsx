import { useState, useRef } from "react"
import logo from "./logo.svg"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    const linkStyle = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : "0px"
    }

    return <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="logo" alt="img" />
                <button className="nav-toggle" onClick={toggleLinks}>
                    <FaBars />
                </button>
            </div>

            <div className="links-container" ref={linksContainerRef}
                style={linkStyle}>
                <ul className="links" ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return <li key={id}>
                            <a href={url}> {text} </a>
                        </li>
                    })}
                </ul>
            </div>


            <ul className="social-icons">
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>

            {/* <div className= { showLinks ? "links-container show-container" :"links-container"}>
                <ul className="links">
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return <li key={id}>
                            <a href={url}> {text} </a>
                        </li>
                    })}
                </ul>
            </div> */}
        </div>
    </nav>
}

export default NavBar