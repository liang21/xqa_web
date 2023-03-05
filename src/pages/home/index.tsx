import React, { Component } from 'react';
import { Layout, Space} from 'antd';
import MainMenu from '@/components/layout/sider';
const { Header, Footer, Sider, Content } = Layout;
function App(){
    const headerStyle: React.CSSProperties = {
      textAlign: 'center',
      color: '#fff',
      height: 64,
      paddingInline: 50,
      lineHeight: '64px',
      backgroundColor: '#b3c0d1',
    };
    
    const contentStyle: React.CSSProperties = {
      textAlign: 'center',
      minHeight: 120,
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#e9eef3',
    };
    
    const siderStyle: React.CSSProperties = {
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#d3dce6',
      height:'100vh'
    };
    
    const footerStyle: React.CSSProperties = {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#b3c0d1',
    };
    return (
      <Space direction="vertical" style={{ width: '100%',height:'100%' }} size={[0, 48]}>
      <Layout>
          <Sider>
            <MainMenu />
          </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </Space>
    )
}
export default App;