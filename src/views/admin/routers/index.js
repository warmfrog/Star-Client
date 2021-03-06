export default [
  {
    path: '/admin',
    component: () => import('../Base.vue'),
    children: [
      {
        path: 'post/list',
        component: () => import('../Tables/PostTable.vue')
      },
      {
        path: 'post/add',
        component: () => import('../EditPanels/EditPostPanel.vue')
      },
      {
        path: 'app/list',
        component: () => import('../Tables/AppTable.vue')
      },
        {
        path: 'fileInfo/list',
        component: () => import('../Tables/FileInfoTable.vue')
      },
      {
        path: 'book/list',
        component: () => import('../Tables/BookTable.vue')
      },
      {
        path: 'home/list',
        component: () => import('../Tables/HomeTable.vue')
      },
      {
        path: 'knowledge/list',
        component: () => import('../Tables/KnowledgeTable.vue')
      },
      {
        path: 'movie/list',
        component: () => import('../Tables/MovieTable.vue')
      },
      {
        path: 'music/list',
        component: () => import('../Tables/MusicTable.vue')
      },
      {
        path: 'openSource/list',
        component: () => import('../Tables/OpenSourceTable.vue')
      },
      {
        path: 'album/list',
        component: () => import('../Tables/AlbumTable.vue')
      },
      {
        path: 'service/list',
        component: () => import('../Tables/ServiceTable.vue')
      },
      {
        path: 'site/list',
        component: () => import('../Tables/SiteTable.vue')
      },
      {
        path: 'software/list',
        component: () => import('../Tables/SoftwareTable.vue')
      },
      {
        path: 'doc/list',
        component: () => import('../Tables/SoftwareTable.vue')
      },
      {
        path: 'tutorial/list',
        component: () => import('../Tables/SoftwareTable.vue')
      },
      {
        path: '/admin',
        component: () => import('../DashBoard.vue')
      }
    ]
  }]
