import React, { Component } from 'react'
import { Layout, Space } from 'antd'
import MainMenu from '@/components/layout/sider'
import { Outlet } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout
function Home() {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 0,
    lineHeight: '64px',
    backgroundColor: '#b3c0d1',
  }

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#e9eef3',
  }

  const siderStyle: React.CSSProperties = {
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#d3dce6',
  }

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#b3c0d1',
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={siderStyle}>
        <div className="logo"></div>
        <MainMenu />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
export default Home
