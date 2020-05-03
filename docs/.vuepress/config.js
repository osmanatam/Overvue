module.exports = {
  title: 'OverVue.dev',
  locales: {
    '/': { lang: 'en-US' },
    '/fr/': { lang: 'fr-FR' },
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'CLI', link: '/cli' },
      // { text: 'Interpolations', link: '/interpolations' },
      // { text: 'Links', link: '/links' },
      // { text: 'Computed Property', link: '/computed' },
      // { text: 'Watch', link: '/watch' },
      // { text: 'Events', link: '/events' },
      // { text: 'Style', link: '/style' },
      // { text: 'Conditional', link: '/conditional' },
      // { text: 'Lists', link: '/list' },
      // { text: 'Components Basics', link: '/components' },
      // { text: 'Slots', link: '/slots' },
      // { text: 'Vuex', link: '/vuex' },
    ],
    sidebar: [
      '/',
      '/cli',
      '/interpolations',
      '/links',
      '/computed',
      '/watch',
      '/events',
      '/style',
      '/conditional',
      '/list',
      '/components',
      '/slots',
      '/vuex',
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inconsolata&display=swap',
      },
    ],
  ],
};