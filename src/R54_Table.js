import React,{Component} from "react";
import { Progress, Table } from 'reactstrap';

class R54_Table extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return (
            <div>
                {/* <Table> */}
                {/* <Table striped hover> */}
                <Table size="sm">
                {/* <Table dark bordered> */}
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>책이름</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>React 100</td>
                            <td>\10000</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>React 200</td>
                            <td>\20000</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>React 200</td>
                            <td>\20000</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>React 200</td>
                            <td>\20000</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>React 200</td>
                            <td>\20000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }    
}
export default R54_Table;

