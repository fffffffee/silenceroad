import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: "/silenceroad",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '预科班', link: '/matriculation' },
      { text: '本科班', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 00' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar:
      {
        '/undergraduate/':[
	  {
	    text: '楞严经',
	    collapsed: true,
	    items: [
              { text: '00', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 00' },
              { text: '01', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 01' },
              { text: '02', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 02' },
              { text: '03', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 03' },
              { text: '04', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 04' },
              { text: '05', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 05' },
              { text: '06', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 06' },
              { text: '07', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 07' },
              { text: '08', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 08' },
              { text: '09', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 09' },
              { text: '10', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 10' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
