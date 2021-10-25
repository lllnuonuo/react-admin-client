import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
// import Header from '../../components/header'

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    
    render(){
        const user = memoryUtils.user;
        //如果内存中没有存储user, 说明当没有登录
        if(!user || !user._id){
            return <Redirect to='/Login'/>
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}