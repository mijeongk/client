import React,{Component} from "react";
import Children from "./contextChildren";

const {Provider,Consumer} = React.createContext();
export {Consumer}

class R76_ContextApi extends Component{    
    
    render(){
        return (
            <Provider value='React200'>
                <Children/>
            </Provider>
        )
    }    
}
export default R76_ContextApi;


