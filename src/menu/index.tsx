import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: '栏目 1',
    key: '/project',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目 2',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '栏目 3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
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
      },
    ],
  },
  {
    label: '栏目 4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目 401',
        key: '/page4/page401',
      },
      {
        label: '栏目 304',
        key: '/page4/page402',
      },
    ],
  },
  {
    label: '栏目 5',
    key: '/page5',
    icon: <FileOutlined />,
  },
]
export default items
