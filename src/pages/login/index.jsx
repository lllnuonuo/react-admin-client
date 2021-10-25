import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Input, Button, message} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import {reLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

// 静态资源
import logo from './images/logo.png'

const Item = Form.Item;

export default class Login extends Component {

    onFinish = async (value) => {
        const {username, password} = value;
       
        const result = await reLogin(username, password);
        if(result.status === 0){
            const user = result.data;
            storageUtils.saveUser(user);//保存到loca中
            // localStorage.setItem('user', user);
            memoryUtils.user = user;//保存在内存中
            // 跳转至后台管理界面
            this.props.history.replace('/')

        } else { //登录失败
            message.error(result.msg)
        }
        // console.log('请求成功', response.data)
      
    }

    render(){
        // 判断用户是否登录，如果登录跳转首页
        const user = memoryUtils.user;
        if(user && user._id){
            return <Redirect to="/" />
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo图" />
                    <h2>admin后台管理系统</h2>
                </header>
                <section className="login-content">
                    <h2>管理系统</h2>
                    <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={this.onFinish}
                    autoComplete="off"
                    >
                        <Item
                            name="username"
                            rules={[
                                { required: true, whitespace: true, message: 'Please input your Username!' },
                                { max: 12, message: '用户名长度不能超过12' },
                                { min: 4, message: '用户名长度小于4' },
                            ]}
                            initialValue='admin' //初始值
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>
                        <Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your Password!' }
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

