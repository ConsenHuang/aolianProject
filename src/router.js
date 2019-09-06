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


                ],

            }
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

export default router;
