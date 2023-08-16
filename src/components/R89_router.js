import React,{Component, Link} from "react";

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

