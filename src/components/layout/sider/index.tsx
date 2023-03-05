import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { useState } from 'react';
  import type { MenuProps } from 'antd';
  import {  Menu } from 'antd';
  import { useNavigate, useLocation} from "react-router-dom"
  type MenuItem = Required<MenuProps>['items'][number];
  // 登录请求到数据之后，就可以跟items这个数组进行匹配
  const items: MenuItem[] = [
    {
      label: '栏目 1',
      key: '/project',
      icon: <PieChartOutlined />
    },
    {
      label: '栏目 2',
      key: '/page2',
      icon: <DesktopOutlined />
    },
    {
      label: '栏目 3',
      key: 'page3',
      icon: <UserOutlined />,
      children:[
        {
          label: '栏目 301',
          key: '/page3/page301',
        },
        {
          label: '栏目 302',
          key: '/page3/page302',
        },
        {
          label: '栏目 303',
          key: '/page3/page303',
        }
      ]
    },
    {
      label: '栏目 4',
      key: 'page4',
      icon: <TeamOutlined />,
      children:[
        {
          label: '栏目 401',
          key: '/page4/page401',
        },
        {
          label: '栏目 304',
          key: '/page4/page402',
        }
      ]
    },
    {
      label: '栏目 5',
      key: '/page5',
      icon: <FileOutlined />
    }
  ]
  
  function MainMenu() {
    const navigateTo = useNavigate()
    const currentRoute = useLocation();
    
    
    const menuClick = (e:{key:string})=>{      
      // 点击跳转到对应的路由   编程式导航跳转， 利用到一个hook
      navigateTo(e.key);
    }
    let firstOpenKey:string = "";
    // 在这里进行对比   find
    function findKey(obj:{key:string}){
      return obj.key === currentRoute.pathname
    }
    // 多对比的是多个children
    for(let i=0;i<items.length;i++){
      // 判断找到不到
      if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
        firstOpenKey = items[i]!.key as string;
        break;
      }
    }

    // 设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys:string[])=>{
      setOpenKeys([keys[keys.length-1]]);
    }
    return (
      <Menu 
          theme="light" 
          defaultSelectedKeys={[currentRoute.pathname]} 
          mode="inline" 
          // 菜单项的数据
          items={items} 
          onClick={menuClick}
          // 某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          // 当前菜单展开项的key数组
          openKeys={openKeys}
        />
    )
  }
  export default MainMenu;