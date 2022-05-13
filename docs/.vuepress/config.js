const { defaultTheme } = require('@vuepress/theme-default'); // 默认主题

module.exports = {
    lang: 'zh-CN',
    title: '笔记本',
    head: [
        ['link', { rel: 'icon', href: '/icon/favicon.svg' }]
    ],
    theme: defaultTheme({
        logo: null,
        logoDark: null,
        navbar: [
            {
                text: '主页',
                link: '/',
            },
        ],
    }),
}