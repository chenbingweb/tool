
import React from "react";
import { Tool } from "../../libs/Tool";
import { connect } from "react-redux";
import * as actions from "./tempReduce"
import { bindActionCreators } from "redux";
import Nav from "../../components/nav-bar/nav-bar";
import { Toast } from 'antd-mobile';
import CityPicker from "../../components/city-picker/city-picker"
import "./temp.css"
class Temp extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
       // this.props.Load()
        Toast.fail('Load failed !!!', 1);
    }
    render(){

        return  <div>
                <CityPicker onCallBack={val=>{
                                console.log(val)
                                  
                            }}>
                               
                            
                            </CityPicker>
                    <Nav currentIndex={0}/>
                </div>
    }
}
export default connect(
    state=>{

    // let { home:{imgs} } = state ;
    return {
    
             ...state.home
        }
    },
    
    dispatch => bindActionCreators({...actions},dispatch)

)(Temp)