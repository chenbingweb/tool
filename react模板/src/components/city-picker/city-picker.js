import {Picker} from 'antd-mobile'
import React from 'react'
import districtData from "./data"
// example

const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px',position:'relative',borderBottom:0 }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pickerValue: [],
        };
    }
 
    render(){
        let antdDistrict =[];
       
        Object.keys(districtData).forEach((index)=>{
            let itemLevel1 ={};
            let itemLevel2 ={};
            itemLevel1.value = districtData[index].code;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index)=>{
                itemLevel2.value = data[index].code;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].districts;
                let itemLevel3 ={};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index)=>{
                    itemLevel3.value = index;
                    itemLevel3.label = data2[index];
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 ={};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 ={};
            });
            antdDistrict.push(itemLevel1)
        });

        return (
            <div>
                
                <Picker
                    title="选择地区"
                    extra=""
                    data={antdDistrict}
                    value={this.state.pickerValue}
                    onChange={v => this.setState({ pickerValue: v })}
                    onOk={v => {
                            let province = districtData[v[0]].name;
                            let city = districtData[v[0]].cities[v[1]].name;
                            let country =  districtData[v[0]].cities[v[1]].districts[v[2]];
                            let data={
                                detail:[province,city,country].join(','),
                                v:v
                            }
                            this.props.onCallBack && this.props.onCallBack(data)
                            this.setState({ pickerValue: v })
                         }}
                    onClick={()=>{console.log('xx')}}
                >
                   
                    { this.props.children || <CustomChildren/>}
                </Picker>
                
            </div>
        )
    }

}
/** 
 * 
 * 
       <CityPicker onCallBack={val=>{
                                console.log(val)
                                  this.props.SelectAddress(val.detail)
                            }}>
                                <CustomChildren pcc={province =='' ?'' :province+'-'+city+'-'+county} ></CustomChildren>
                            
                            </CityPicker>
 * 
*/