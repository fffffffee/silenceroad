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
              { text: '11', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 11' },
              { text: '12', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 12' },
              { text: '13', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 13' },
              { text: '14', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 14' },
              { text: '15', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 15' },
              { text: '16', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 16' },
              { text: '17', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 17' },
              { text: '18', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 18' },
              { text: '19', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 19' },
              { text: '20', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 20' },
              { text: '21', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 21' },
              { text: '22', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 22' },
              { text: '23', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 23' },
              { text: '24', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 24' },
              { text: '25', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 25' },
              { text: '26', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 26' },
              { text: '27', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 27' },
              { text: '28', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 28' },
              { text: '29', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 29' },
              { text: '30', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 30' },
              { text: '31', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 31' },
              { text: '32', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 32' },
              { text: '33', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 33' },
              { text: '34', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 34' },
              { text: '35', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 35' },
              { text: '36', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 36' },
              { text: '37', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 37' },
              { text: '38', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 38' },
              { text: '39', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 39' },
              { text: '40', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 40' },
              { text: '41', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 41' },
              { text: '42', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 42' },
              { text: '43', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 43' },
              { text: '44', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 44' },
              { text: '45', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 45' },
              { text: '46', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 46' },
              { text: '47', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 47' },
              { text: '48', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 48' },
              { text: '49', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 49' },
              { text: '50', link: '/undergraduate/15SurangamaSutra/15 SurangamaSutra 50' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
