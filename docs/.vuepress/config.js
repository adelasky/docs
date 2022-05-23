const { defaultTheme } = require('@vuepress/theme-default'); // 默认主题

module.exports = {
    lang: 'zh-CN',
    title: '笔记本',
    head: [
        ['link', { rel: 'icon', href: '/icon/favicon.svg' }],
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    theme: defaultTheme({
        logo: null,
        logoDark: null,
        contributors: false,
        navbar: [
            {
                text: '主页',
                link: '/home/',
            },
            {
                text: '代码',
                link: '/code/',
            },
            {
                text: 'Github',
                link: 'https://github.com/adelasky/docs',
            },
        ],
    }),
}