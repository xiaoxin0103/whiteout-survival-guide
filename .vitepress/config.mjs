import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Whiteout Survival Guide',
  description: 'The #1 English guide for Whiteout Survival — Hero Tier Lists, Builds, Bear Hunt Strategy, Alliance Wars & more.',
  lang: 'en-US',
  ignoreDeadLinks: true,

  sitemap: {
    hostname: 'https://whiteout-survival-guide.pages.dev'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Whiteout Survival Guide — #1 English Wiki & Tier List' }],
    ['meta', { property: 'og:description', content: 'Complete hero tier lists, Bear Hunt guides, F2P tips, and alliance war strategy. Updated for every new hero generation.' }],
    ['meta', { property: 'og:image', content: 'https://whiteout-survival-guide.pages.dev/og-image.png' }],
    ['meta', { property: 'og:site_name', content: 'Whiteout Survival Guide' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Whiteout Survival Guide — #1 English Wiki & Tier List' }],
    ['meta', { name: 'twitter:description', content: 'Complete hero tier lists, Bear Hunt guides, F2P tips, and alliance war strategy.' }],
    // SEO
    ['meta', { name: 'msvalidate.01', content: 'CE715C67E8CD71295AC07BA64A189985' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://whiteout-survival-guide.pages.dev' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Heroes', link: '/guides/heroes/' },
      { text: 'Combat', link: '/guides/combat/' },
      { text: 'Alliance', link: '/guides/alliance/' },
      { text: 'Events', link: '/guides/events/' },
      { text: 'Beginners', link: '/guides/beginners/' },
      { text: 'Updates', link: '/guides/updates/' },
      { text: 'FAQ', link: '/guides/faq/' }
    ],

    sidebar: {
      '/guides/heroes/': [
        {
          text: '👤 Heroes Guide',
          items: [
            { text: 'Hero Tier List (All Gens)', link: '/guides/heroes/' },
            { text: 'Gen 10 Heroes (Latest)', link: '/guides/heroes/gen-10' },
            { text: 'Gen 9 Heroes', link: '/guides/heroes/gen-9' },
            { text: 'Best F2P Heroes', link: '/guides/heroes/f2p-tier-list' },
            { text: 'Hero Investment Calculator', link: '/guides/heroes/calculator' },
            { text: '---' },
            { text: 'Jeronimo Build', link: '/guides/heroes/builds/jeronimo' },
            { text: 'Blanchette Build', link: '/guides/heroes/builds/blanchette' },
            { text: 'Gregory Build', link: '/guides/heroes/builds/gregory' },
            { text: 'Freya Build', link: '/guides/heroes/builds/freya' },
            { text: 'Wu Ming Build', link: '/guides/heroes/builds/wu-ming' },
          ]
        }
      ],
      '/guides/combat/': [
        {
          text: '⚔️ Combat & Builds',
          items: [
            { text: 'Combat Mechanics', link: '/guides/combat/' },
            { text: 'Gear & Equipment Guide', link: '/guides/combat/gear' },
            { text: 'Gems & Charms', link: '/guides/combat/gems' },
            { text: 'Formation Guide', link: '/guides/combat/formations' },
            { text: 'Exclusive Weapons Guide', link: '/guides/combat/exclusive-weapons' },
          ]
        }
      ],
      '/guides/alliance/': [
        {
          text: '🏰 Alliance Guide',
          items: [
            { text: 'Alliance Overview', link: '/guides/alliance/' },
            { text: 'Bear Hunt (Complete)', link: '/guides/alliance/bear-hunt' },
            { text: 'Crazy Joe', link: '/guides/alliance/crazy-joe' },
            { text: 'Sunfire Castle', link: '/guides/alliance/sunfire-castle' },
            { text: 'Alliance Leadership', link: '/guides/alliance/leadership' },
            { text: 'Alliance Technology', link: '/guides/alliance/alliance-tech' },
          ]
        }
      ],
      '/guides/events/': [
        {
          text: '📅 Events',
          items: [
            { text: 'Event Calendar', link: '/guides/events/' },
            { text: 'Server vs Server (SvS)', link: '/guides/events/svs' },
            { text: 'Arena Guide', link: '/guides/events/arena-guide' },
            { text: 'Arms Race Guide', link: '/guides/events/arms-race' },
            { text: 'Arms Race Daily (7 Days)', link: '/guides/events/arms-race-daily' },
            { text: 'King of Icefield', link: '/guides/events/king-of-icefield' },
            { text: 'Season Events', link: '/guides/events/season' },
          ]
        }
      ],
      '/guides/beginners/': [
        {
          text: '🌟 Beginner Guide',
          items: [
            { text: 'Complete Beginner Guide', link: '/guides/beginners/' },
            { text: 'HQ Rush (1-30 Fast Path)', link: '/guides/beginners/hq-rush' },
            { text: 'Gem Spending Guide', link: '/guides/beginners/gem-spending' },
            { text: 'Common Mistakes', link: '/guides/beginners/mistakes' },
            { text: 'Survival Basics (Furnace & Heat)', link: '/guides/beginners/survival-basics' },
          ]
        },
        {
          text: '📦 Resources & Spending',
          items: [
            { text: 'Pack Value Analysis', link: '/guides/resources/pack-value' },
            { text: 'How to Farm Gems', link: '/guides/resources/gems-farming' },
            { text: 'How to Farm Speedups', link: '/guides/resources/speedups-farming' },
            { text: 'How to Farm Hero Shards', link: '/guides/resources/hero-shards-farming' },
            { text: 'VIP Level Guide', link: '/guides/resources/vip-guide' },
            { text: 'Pets Guide', link: '/guides/resources/pets' },
          ]
        }
      ],
      '/guides/updates/': [
        {
          text: '🆕 Updates & News',
          items: [
            { text: 'Version Updates', link: '/guides/updates/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoxin0103/whiteout-survival-guide' }
    ],

    footer: {
      message: 'Fan-made guide. Not affiliated with or endorsed by Century Games. <a href="/privacy-policy">Privacy Policy</a> · <a href="/ai-disclosure">AI Disclosure</a>',
      copyright: 'Copyright © 2026 Whiteout Survival Guide'
    },

    search: {
      provider: 'local'
    },

    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/xiaoxin0103/whiteout-survival-guide/edit/main/:path'
    }
  }
})
