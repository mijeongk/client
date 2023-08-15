import React,{Component} from "react";
import cookie from 'react-cookies';

class R86_cookieLoad extends Component{    
    
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
        setTimeout(function(){
            cookie.remove('userid',{path:'/'});
        },1000);
        setTimeout(function(){
            alert(cookie.load('userid'));
        },1000);
    }
}
export default R86_cookieLoad;

