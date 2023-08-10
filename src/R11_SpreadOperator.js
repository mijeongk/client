import React,{Component} from "react";

class R11_SpreadOperator extends Component{    
    constructor(props){
        super(props);
        this.state={};
    }    
    render(){
        return (
            <h2>[이것은 변수]</h2>
        )
    }
    componentDidMount(){
        var arr1=['a1','a2'];
        var arr2=['a3','a4'];
        var sumArr=[arr1[0],arr1[1],arr2[0],arr2[1]];
        console.log('sumArr:'+sumArr);

        let sumArr2=[...arr1,...arr2];
        console.log('sumArr2:'+sumArr2);

        var obj1={key1:'var1',key2:'var2'};
        var obj2={key2:'new2',key3:'var3'};
        var sumObj=Object.assign({},obj1,obj2);
        console.log('sumObj:'+JSON.stringify(sumObj));

        var sumLetObj={...obj1,...obj2};
        console.log('sumLetObj:'+JSON.stringify(sumLetObj));
    }
}
export default R11_SpreadOperator;