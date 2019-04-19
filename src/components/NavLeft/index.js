import React,{ Component } from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component{
    render(){
        return(
            <div className='navWrap'>
                <div className='title'>
                    Manage System
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <MenuItem key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </MenuItem>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                      </SubMenu>
                </Menu>
            </div>
        )
    }
}