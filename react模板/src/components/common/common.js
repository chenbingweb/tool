import React from "react";
import "./common.css";
export  class ProStep extends React.Component
{
    constructor(props){
        super(props)
        // let { cfg:{interface:{getActiveList}}}=this.state;
    }
    render(){
        return <div className="register_header flex_between">
                <div className="step_box flex_center">
                    <div className="step active">1</div>
                    <p className="step_name">舞队信息</p>
                </div>
                <div className="step_box flex_center">
                    <div className="step active">2</div>
                    <p className="step_name">身份认证</p>
                </div>
                <div className="step_box flex_center">
                    <div className="step">3</div>
                    <p className="step_name">完成注册</p>
                </div>
            </div>
    }
}