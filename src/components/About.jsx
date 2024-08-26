import { Outlet } from "react-router-dom"

const About = () => {

    return (
        <div>
            <h1> About Us</h1>
            <p> This is a sample about page </p>
            <Outlet />
        </div>
    )
}

export default About