import React, { Component } from 'react';
import { Layout} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import '@/home/index.less'
class App extends Component{
  render() {
    return (
      <Layout className='layout' style={{minHeight: '100%'}}>
      <Sider style={{margin: 20, backgroundColor: '#fff'}}>Sider</Sider>
      <Layout>
        <Header className='header'>Header</Header>
        <Content style={{margin: 20, backgroundColor: '#fff'}}>Content</Content>
        <Footer style={{textAlign: 'center', color: '#cccccc'}}>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
}
export default App;