import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class R89_router extends Component{    
    
    render(){
        return (
            <div>
                <h1>path='/'</h1>
                <h3>R89_router</h3>
                <Link to={'/reactRouter2'}>reactRouter2</Link>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default R89_router;

