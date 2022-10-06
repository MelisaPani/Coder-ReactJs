import React from "react";
import { Link} from "react-router-dom";
 import error404 from "../assets/images/404.png" 

const Error404 = () =>{
    return (
        <div className="error404">
            <div className="errorBody">
                <p className="errorN">404</p>
                <p className="houston">Houston, We have a problem...</p>          
                <Link to="/"><button>RETURN HOME</button></Link>
            </div>
            <div className="bodyImg">
                <img className="errorImg" src={error404} alt="404" />
            </div>
           
        </div>
    )
}

export default Error404;