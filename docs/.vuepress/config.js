module.exports = {
    title: '阿水的前端日志',
    description: '欢迎访问我的前端日志',
    // head: [
    //     ['link', { rel: 'icon', href: '/img/logo.ico' }],
    //     ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ],
    themeConfig: {
        nav: [
            { text: '博客', link: '/blog/' },
            { text: '算法', link: '/algorithm/' },
            { text: '面试题', link: '/interview/' },
        ],
        sidebar: {
            "/blog/": [
                {
                    title: "CSS",
                    collapsable: false,
                    children: [
                        "css-center",
                        "css-formatting-context",
                        "css-flex",
                    ],
                },
                {
                    title: "JS",
                    collapsable: false,
                    children: [
                        "js-type",
                        "js-prototype",
                        "js-closure",
                        "js-this",
                        "js-eventloop",
                    ],
                },
                {
                    title: "JS手写代码",
                    collapsable: false,
                    children: [
                        "js-new",
                        "js-object",
                        "js-bind",
                        "js-call",
                        "js-throttle",
                        "js-extend",
                        "js-instanceof",
                        "js-event",
                    ],
                },
                {
                    title: "计算机网络",
                    collapsable: false,
                    children: [
                        "osi-http-status-code",
                        "osi-http",
                        "osi-tcp",
                        "osi-secure",
                    ],
                },
                {
                    title: "VUE",
                    collapsable: false,
                    children: [
                    ],
                },
            ],
            "/interview/": [
                {
                    title: "promise异步题",
                    collapsable: false,
                    children: [
                        "promise-chain",
                    ],
                },
            ]
        },
        // sidebarDepth: 2,
        // lastUpdated: 'Last Updated',
    },
}
