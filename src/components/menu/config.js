
import {
  BarChart,
  AccountCircle,
  Description,
  SwapHorizontalCircle,
  Loyalty,
  EventNote,
  List,
  Edit,
  Drafts,
  Delete,

} from '@material-ui/icons';


export default [
  {
    title: '仪表盘',
    path: '/view/dashboard',
    icon: BarChart
  },
  {
    title: '用户管理',
    path: '/view/userManage',
    icon: AccountCircle
  },
  {
    title: '文章管理',
    path: '/view/articleManage',
    icon: Description,
    children: [
      {
        title: '文章列表',
        path: '/view/articleList',
        icon: List
      },
      {
        title: '写文章',
        path: '/view/newArticle',
        icon: Edit
      },
      {
        title: '草稿箱',
        path: '/view/drafts',
        icon: Drafts
      },
      {
        title: '回收站',
        path: '/view/trash',
        icon: Delete
      }
    ]
  },
  {
    title: '分类管理',
    path: '/view/categoryManage',
    icon: SwapHorizontalCircle
  },
  {
    title: '标签管理',
    path: '/view/tagManage',
    icon: Loyalty
  },
  {
    title: '系统日志',
    path: '/view/systemLogs',
    icon: EventNote
  }
]
