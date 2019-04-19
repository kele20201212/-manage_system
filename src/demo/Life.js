import React,{ Component } from 'react';
import { Button,Input } from 'antd';
import './Life.less';


export default class Life extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    handleAdd = () => {
        this.setState({
            count:this.state.count+1,
        })
    }
    handleRemove = () => {
        this.setState({
            count:this.state.count-1,
        })
    }
    render(){

        return <div className='lifeWrap'>
            <p style={{color:'#f9c700'}}>请实际操作以下按钮</p>
            <Input />
            <Button onClick={this.handleAdd}>增加</Button>
            <Button type='primary'  onClick={this.handleRemove}>减少</Button>
            <p>设置结果：<span>{this.state.count}</span></p>
        </div>
    }
}