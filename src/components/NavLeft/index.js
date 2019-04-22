import React,{ Component } from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig';
import logo from './../../resource/assets/logo-ant.svg';
import './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component{
    
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentWillMount(){
        const menuTradeNode = this.renderMenuList(MenuConfig);
        this.setState({
            menuTradeNode,
        })
    }
    renderMenuList = (data) => {
     return  data.map((item) => {
            if(item.children){
            return <SubMenu title={item.title} key={item.key}>
                    {this.renderMenuList(item.children)}
               </SubMenu>
            }
            return <MenuItem key={item.key}>{item.title}</MenuItem>
        })
    }

    render(){
        return(
            <div className='navWrap'>
                <div className='title'>
                    <img src='/assets/logo-ant.svg' alt="logo"/>
                    <span>Manage System</span>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >   
                    {this.state.menuTradeNode}
                </Menu>
            </div>
        )
    }
}