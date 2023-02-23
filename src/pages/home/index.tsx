import React, { Component } from 'react';
import { Layout, Space} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class App extends Component{
  render() {
    const headerStyle: React.CSSProperties = {
      textAlign: 'center',
      color: '#fff',
      height: 64,
      paddingInline: 50,
      lineHeight: '64px',
      backgroundColor: '#7dbcea',
    };
    
    const contentStyle: React.CSSProperties = {
      textAlign: 'center',
      minHeight: 120,
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#108ee9',
    };
    
    const siderStyle: React.CSSProperties = {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      height:'100vh',
      backgroundColor: '#3ba0e9',
    };
    
    const footerStyle: React.CSSProperties = {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#7dbcea',
    };
    return (
      <Space direction="vertical" style={{ width: '100%',height:'100%' }} size={[0, 48]}>
      <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
    </Space>
    )
  }
}
export default App;