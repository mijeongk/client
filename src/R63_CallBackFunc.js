import React,{Component} from "react";

class R63_CallBackFunc extends Component{
    componentDidMount(){
        this.logPrint(1, function(return1){
            console.group("return1: " + return1);
            this.logPrint(return1, function(return2){
                console.log("return2: " + return2);
            })
        }.bind(this))
    }

    logPrint(param, callback){
        console.log("logPrint param: " + param);
        param += param
        callback(param);
    }

    render(){
        return (
            <div>
                <h1>callback Function</h1>
            </div>
        )
    }    
}
export default R63_CallBackFunc;

