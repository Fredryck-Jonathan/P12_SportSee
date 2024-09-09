import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <div className='footer'>
            <nav>
                <NavLink className="NavLink" to="/"><img src={require("../assets/svg/svg_yoga.svg").default} alt="yoga"></img></NavLink>
                <NavLink className="NavLink" to="/"><img src={require("../assets/svg/svg_natation.svg").default} alt="natation"></img></NavLink>
                <NavLink className="NavLink" to="/"><img src={require("../assets/svg/svg_bike.svg").default} alt="bike"></img></NavLink>
                <NavLink className="NavLink" to="/"><img src={require("../assets/svg/svg_dumb.svg").default} alt="dumbbell"></img></NavLink>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}
export default Footer