import React,{Component} from "react";

class R12_Class extends Component{    
    constructor(props){
        super(props);
        this.state={};
    }    
    render(){
        return (
            <h2>[이것은 클래스]</h2>
        )
    }
    componentDidMount(){
        var Ex1=(function(){
            function Ex1(num){
                this.num=num;
            }
            Ex1.prototype.showNum=function(){
                console.log('1번:'+this.num);
            };
            return Ex1;
        }());
        var ex=new Ex1('200');
        ex.showNum();

        class Exclass{
            constructor(num2){
                this.num2=num2;
            }
            showNum(){
                console.log('2번:'+this.num2);
            }
        }
        var ex2=new Exclass('2백');
        ex2.showNum();
    }
}
export default R12_Class;