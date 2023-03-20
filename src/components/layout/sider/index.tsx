import { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import items from '@/menu/index'
function MainMenu() {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }
  let firstOpenKey: string = ''
  function findKey(obj: { key: string }) {
    return obj.key === currentRoute.pathname
  }
  // 多对比的是多个children
  for (let i = 0; i < items.length; i++) {
    // 判断找到不到
    if (
      items[i]!['children'] &&
      items[i]!['children'].length > 0 &&
      items[i]!['children'].find(findKey)
    ) {
      firstOpenKey = items[i]!.key as string
      break
    }
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      // 菜单项的数据
      items={items}
      onClick={menuClick}
      // 某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      // 当前菜单展开项的key数组
      openKeys={openKeys}
      style={{ height: '100%', borderRight: 0 }}
    />
  )
}
export default MainMenu
