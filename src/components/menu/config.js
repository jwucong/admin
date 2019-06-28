
export default [
  {
    title: '仪表盘',
    path: 'dashboard'
  },
  {
    title: '用户管理',
    path: 'userManage',
  },
  {
    title: '文章管理',
    path: 'articleManage',
    children: [
      {
        title: '文章列表',
        path: 'articleList',
      },
      {
        title: '写文章',
        path: 'newArticle',
      },
      {
        title: '草稿箱',
        path: 'drafts',
      },
      {
        title: '回收站',
        path: 'trash',
      }
    ]
  },
  {
    title: '分类管理',
    path: 'categoryManage',
  },
  {
    title: '标签管理',
    path: 'tagManage',
  },
  {
    title: '系统日志',
    path: 'systemLogs',
  }
]
