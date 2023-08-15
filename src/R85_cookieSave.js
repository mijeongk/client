import React,{Component} from "react";
import cookie from 'react-cookies';

class R85_cookieSave extends Component{    
    
    render(){
        return (
            <div>
                <h3>react-cookies Save</h3>
            </div>
        )
    }
    componentDidMount(){
        const expires=new Date();
        expires.setMinutes(expires.getMinutes()+60);
        cookie.save('userid','react200',{
            path:'/',
            expires,
            // secure:true,
            // httpOnly:true
        });
    }
}
export default R85_cookieSave;

