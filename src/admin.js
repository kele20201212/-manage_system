import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';


export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){

        return (
            <Row className='container'>
                <Col span={4} className='nav_left'>
                    <NavLeft /> 
                </Col>
                <Col span={20} className='main'>
                    <Header />
                    <Row className='content'>
                        this is content.
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}