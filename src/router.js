import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['@/components/level_1_pages/home'], resolve),
        children: [
            {
                path: '/home2',
                name: 'home2',
                component: resolve => require(['@/components/level_2_pages/home2'], resolve),
                children: [
                    // 系统配置菜单---------------------------begin
                    {
                        // 参数配置
                        path: '/parameter_configuration',
                        name: 'parameter_configuration',
                        component: resolve => require(['@/components/level_3_pages/system_configuration/parameter_configuration'], resolve)
                    },
                    {
                        // 网络配置
                        path: '/net_configuration',
                        name: 'net_configuration',
                        component: resolve => require(['@/components/level_3_pages/system_configuration/net_configuration'], resolve)
                    },
                    {
                        // 资源监控
                        path: '/resources_monitoring',
                        name: 'resources_monitoring',
                        component: resolve => require(['@/components/level_3_pages/system_configuration/resources_monitoring'], resolve)
                    },
                    {
                        // 短信配置
                        path: '/sms_configuration',
                        name: 'sms_configuration',
                        component: resolve => require(['@/components/level_3_pages/system_configuration/sms_configuration'], resolve)
                    },
                    {
                        // 邮箱配置
                        path: '/email_configuration',
                        name: 'email_configuration',
                        component: resolve => require(['@/components/level_3_pages/system_configuration/email_configuration'], resolve)
                    },
                    // 系统配置菜单---------------------------end
                    {
                        // 组织类型
                        path: '/organization_type',
                        name: 'organization_type',
                        component: resolve => require(['@/components/level_3_pages/base_data/organization_type'], resolve)
                    },

                    {
                        // 岗位管理
                        path: '/position_management',
                        name: 'position_management',
                        component: resolve => require(['@/components/level_3_pages/base_data/position_management'], resolve)
                    },
                    {
                        // 岗位级别
                        path: '/level_of_position ',
                        name: 'level_of_position ',
                        component: resolve => require(['@/components/level_3_pages/base_data/level_of_position '], resolve)
                    },
                    {
                        // 岗位类型
                        path: '/position_type',
                        name: 'position_type',
                        component: resolve => require(['@/components/level_3_pages/base_data/position_type'], resolve)
                    },
                    {
                        // 应用管理
                        path: '/application_management',
                        name: 'application_management',
                        component: resolve => require(['@/components/level_3_pages/certificate_authority/application_management'], resolve)
                    },
                    {
                        // 认证配置
                        path: '/authentication_configuration',
                        name: 'authentication_configuration',
                        component: resolve => require(['@/components/level_3_pages/certificate_authority/authentication_configuration'], resolve)
                    },
                    {
                        // 授权管理
                        path: '/authorization_management',
                        name: 'authorization_management',
                        component: resolve => require(['@/components/level_3_pages/certificate_authority/authorization_management'], resolve)
                    },
                ],
            },
            {
                // 用户管理
                path: '/user',
                name: 'user',
                component: resolve => require(['@/components/level_2_pages/user/user'], resolve)
            },
            {
                // 授权
                path: '/authorization',
                name: 'authorization',
                component: resolve => require(['@/components/level_2_pages/authorization/authorization'], resolve)
            },
            {
                // IBC
                path: '/IBC',
                name: 'IBC',
                component: resolve => require(['@/components/level_2_pages/IBC/IBC'], resolve)
            },
            {
                // NTLS
                path: '/NTLS',
                name: 'NTLS',
                component: resolve => require(['@/components/level_2_pages/NTLS/NTLS'], resolve)
            },
            {
                // 日志
                path: '/log',
                name: 'log',
                component: resolve => require(['@/components/level_2_pages/log/log'], resolve)
            },
            {
                // 统计
                path: '/statistics',
                name: 'statistics',
                component: resolve => require(['@/components/level_2_pages/statistics/statistics'], resolve)
            },
            {
                // 权限管理
                path: '/authority_management',
                name: 'authority_management',
                component: resolve => require(['@/components/level_2_pages/authority_management/authority_management'], resolve)
            },
            {
                // 组织管理
                path: '/organizational_management',
                name: 'organizational_management',
                component: resolve => require(['@/components/level_2_pages/organizational_management/organizational_management'], resolve)
            },
            {
                // 管理员管理
                path: '/administrator_management',
                name: 'administrator_management',
                component: resolve => require(['@/components/level_2_pages/administrator_management/administrator_management'], resolve)
            },
        ]
    },
    // {
    //   path: '/',
    //   meta: {requireAuth: true},
    //   // 用于路由验证的标识
    //   component: resolve => require(['@/components/common/home'], resolve),
    //   children: [
    //       {
    //           path: '/edition_management',
    //           name: 'edition_management',
    //           meta: {requireAuth: true},
    //           component: resolve => require(['@/components/page/survey_management/edition_management'], resolve)
    //       }
    //   ]
    // }
];

const router =  new Router({
    routes
});
router.afterEach((to, from) => {
    var T = setTimeout(function () {
        var contentHeight = document.getElementsByClassName("wrap_page_3") ? document.getElementsByClassName("wrap_page_3")[0].offsetHeight : 0
        console.log(contentHeight)
        var menuDom = document.getElementsByClassName("third-menu left")[0]
        menuDom.style.height = contentHeight + "px"
        clearTimeout(T)
    })
})

export default router;
