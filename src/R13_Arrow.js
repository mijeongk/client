import React,{Component} from "react";

class R13_Arrow extends Component{    
    constructor(props){
        super(props);
        this.state={
            arrowFuc:'React200',
            num:3
        };
    }    
    render(){
        return (
            <h2>[이것은 화살표 함수]</h2>
        )
    }
    componentDidMount(){
        Fun1(1);
        this.Fun2(1,1);
        this.Fun3();
        this.Fun4();
        this.Fun5(0,2,3);

        function Fun1(a){
            return console.log(a+' 이전 함수');
        }
    }
    Fun2=(a,b)=>{
        let c=a+b;
        console.log(c+' 화살표 함수:'+this.state.arrowFuc);
    }
    Fun3(){
        var this_bind=this;
        setTimeout(function(){
            console.log(this_bind.state.num+' ES5 콜백 함수 noBind:');
            // console.log(this.state.arrowFuc);            
        },100);
    }
    Fun4(){
        setTimeout(function(){
            console.log('4번 ES5 콜백함수 바인드:'+this.state.arrowFuc);
        }.bind(this),100);
    }
    Fun5=(a,b,c)=>{
        const d=a+b+c;
        setTimeout(()=>{
            console.log(d+' 화살표 콜백 함수:'+this.state.arrowFuc);
        },100);
    }
}
export default R13_Arrow;