import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './style.css'

// Cookie Consent Banner
const CookieBanner = {
  setup() {
    const visible = ref(false)

    onMounted(() => {
      if (!localStorage.getItem('cookie-consent')) {
        visible.value = true
      }
    })

    const accept = () => {
      localStorage.setItem('cookie-consent', 'accepted')
      visible.value = false
    }

    const decline = () => {
      localStorage.setItem('cookie-consent', 'declined')
      visible.value = false
    }

    return () => {
      if (!visible.value) return null
      return h('div', { class: 'cookie-banner' }, [
        h('div', { class: 'cookie-banner-content' }, [
          h('p', { class: 'cookie-text' }, [
            'This site uses cookies for analytics and ads. ',
            h('a', { href: '/privacy-policy' }, 'Privacy Policy'),
            '. By continuing, you accept our use of cookies.'
          ]),
          h('div', { class: 'cookie-buttons' }, [
            h('button', { class: 'cookie-btn accept', onClick: accept }, 'Accept'),
            h('button', { class: 'cookie-btn decline', onClick: decline }, 'Decline')
          ])
        ])
      ])
    }
  }
}

// AI Content Disclosure Banner (shown on pages with AI content)
const AiDisclaimer = {
  setup() {
    return () => {
      // Only show on guide pages (not home, not policy pages)
      const path = typeof window !== 'undefined' ? window.location.pathname : ''
      if (!path.startsWith('/guides/')) return null
      return h('div', { class: 'ai-disclaimer' }, [
        h('span', '🤖 Some content on this site is AI-assisted and human-reviewed. '),
        h('a', { href: '/ai-disclosure' }, 'Learn more →')
      ])
    }
  }
}

export default {
  extends: DefaultTheme,
  Layout: (props) => {
    return h(DefaultTheme.Layout, props, {
      'layout-bottom': () => h('div', {}, [
        h(CookieBanner),
        h(AiDisclaimer)
      ])
    })
  }
}
