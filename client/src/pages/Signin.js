import Navbar from "../components/navbar/Navbar";
import {Link} from "react-router-dom";

function Signin(){
    return(
        <div className="signin">
            <Navbar/>
            <div className="signin-content">
                <h1>This is the Sign-in Page</h1>
                <h1>doesnt have an account?</h1>
                <h1>Sign up <Link to="/signup">here</Link></h1>
            </div>

        </div>
    )
}

export default Signin