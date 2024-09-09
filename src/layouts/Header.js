import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className='header'>
            <img id="logo" src={require("../assets/logo-SportSee.png")} alt="logo SportSee"/>
            <nav>
                <NavLink className="NavLink" to="/">Accueil</NavLink>
                <NavLink className="NavLink" to="/">Profil</NavLink>
                <NavLink className="NavLink" to="/">Réglage</NavLink>
                <NavLink className="NavLink" to="/">Communauté</NavLink>
            </nav>
        </div>
    )
}
export default Header