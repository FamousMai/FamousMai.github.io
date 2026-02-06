import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: 'FamousMai · Personal Hub',
  description: '篮球、代码、日记与 AI 的个人基地',
  base: '/',
  theme: defaultTheme({
    logo: '/images/hero.svg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '篮球', link: '/basketball.html' },
      { text: '写代码', link: '/coding.html' },
      { text: '日记', link: '/journal.html' },
      { text: 'AI', link: '/ai.html' }
    ],
    sidebar: [
      {
        text: '探索',
        children: ['/basketball.md', '/coding.md', '/journal.md', '/ai.md']
      }
    ],
    repo: '',
    editLink: false
  })
}
