import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class customerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseList: '',
            appendList: '',
        }
    }

    componentDidMount() {
        this.callCustomerList()
    }

    callCustomerList = async () => {
        axios.get('/customerList', {
        })
        .then( response => {
            try {
                console.log('responseList : ' + response.data) ;
                this.setState({ responseList:  response.data });
                this.setState({ appendList: this.customerListAppend() });
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }

    customerListAppend = () => {
        let result = []
        var list = this.state.responseList ;
        console.log('list :' + list) ;
        for(let i=0; i<list.length; i++){
            var no = list[i][0] ;
            var name = list[i][1] ;
            var tel = list[i][2] ;

            result.push(
                <tr className="hidden_type">
                    <td>{no}</td>
                    <td>{name}</td>
                    <td>{tel}</td>
                    {<td>
                        {/* <Link to={'/AdminSoftwareView/'+data.swt_code} 
                        className="bt_c1 bt_c2 w50_b">수정</Link> */}
                        <a href="#n" className="bt_c1 w50_b" >삭제</a>
                    </td> }
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section className="sub_wrap" >
                <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div className="li_top">
                        <h2 className="s_tit1">customer 목록</h2>
                        <div className="li_top_sch af">
                        <Link to={'/AdminSoftwareView/register'} className="sch_bt2 wi_au">Tool 등록</Link>
                        </div>
                    </div>

                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1 ad_tlist">
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>연락처</th>
                                <th>기능</th>
                            </tr>
                        </table>	
                        <table className="table_ty2 ad_tlist">
                            {this.state.appendList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default customerList;