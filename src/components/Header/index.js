import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import  './index.less';
import Utils from '../../utils/utils';
import axios from '../../axios';

export default class Header extends Component{
    state={
        sysTime:'',
        username:'',
        weathData:{},
    }
    componentWillMount(){
        this.setState({
            username:'May'
        })
        setInterval(() => {
            const sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);

        this.getWeatherAPIData();
    }

    getWeatherAPIData = () => {
        // 百度天气API接口
        //http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
        const city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if(res.status==='success'){
                const weathData = res.results[0].weather_data[0];
                // console.log('res',weathData);
                this.setState({
                    weathData
                })
            }
        })
    }
    render(){
        const { username, sysTime } = this.state;
        const { date, dayPictureUrl, weather, wind } = this.state.weathData;
        return(
            <div className='header'>
                <Row className='haeder_top'>
                    <Col sapn={24}>
                        <span>欢迎,{username}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb_title'>
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{sysTime}</span>

                        <span className='weather_img'>
                            <img src={dayPictureUrl} alt="dayPictureUrl"/>
                        </span>
                        <span className='weather_detail'>{weather}{wind}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}