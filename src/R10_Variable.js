import React, {Component} from 'react';

class R10_Variable extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var varName = 'react';
        console.log('varName1 : '+ varName );
        var varName = '200'; // 'varName' is already defind no redeclare
        console.log('varName2 : '+ varName );

        let letName = 'react';
        console.log('letName1 : '+ letName );
        // let letName = '200'
        // Parsing error: Identifier 'constName' has already been declared
        letName = 'react200';
        console.log('letName2 : '+ letName );

        const constName = 'react'
        console.log('constName: ' + constName);
        // const constName = '200'
        // Parsing error: Identifier 'constName' has already been declared
        // constName = 'react200'
        // Uncaught typeError : Assignment to constant variable.
        
    }

    render(){
        return(
            <h2>[RENDER 함수 실행]</h2>
        )
    }
}

export default R10_Variable;