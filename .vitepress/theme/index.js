import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './style.css'

// ============================================
// Cookie Consent Banner
// ============================================
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

// ============================================
// AI Content Disclaimer Bar
// ============================================
const AiDisclaimer = {
  setup() {
    return () => {
      const path = typeof window !== 'undefined' ? window.location.pathname : ''
      if (!path.startsWith('/guides/')) return null
      return h('div', { class: 'ai-disclaimer' }, [
        h('span', '🤖 AI-assisted & human-reviewed content. Not official game data. '),
        h('a', { href: '/ai-disclosure' }, 'Learn more →')
      ])
    }
  }
}

// ============================================
// Social Share Buttons
// ============================================
const ShareButtons = {
  setup() {
    const copied = ref(false)
    const share = (platform) => {
      const url = encodeURIComponent(window.location.href)
      const title = encodeURIComponent(document.title)
      const urls = {
        x: `https://x.com/intent/tweet?url=${url}&text=${title}`,
        reddit: `https://www.reddit.com/submit?url=${url}&title=${title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        discord: `https://discord.com/channels/@me`
      }
      if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href)
        copied.value = true
        setTimeout(() => { copied.value = false }, 2000)
        return
      }
      if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400')
      }
    }
    return () => {
      const path = typeof window !== 'undefined' ? window.location.pathname : ''
      if (path === '/' || path === '') return null
      return h('div', { class: 'share-section' }, [
        h('span', { class: 'share-label' }, 'Share this guide:'),
        h('button', { class: 'share-btn share-x', onClick: () => share('x') }, '𝕏 Tweet'),
        h('button', { class: 'share-btn share-reddit', onClick: () => share('reddit') }, '🤖 Reddit'),
        h('button', { class: 'share-btn share-fb', onClick: () => share('facebook') }, '📘 Share'),
        h('button', { class: 'share-btn share-discord', onClick: () => share('discord') }, '💬 Discord'),
        h('button', { class: 'share-btn share-copy', onClick: () => share('copy') },
          copied.value ? '✅ Copied!' : '🔗 Copy Link'
        )
      ])
    }
  }
}

// ============================================
// Email Subscribe
// ============================================
const EmailSubscribe = {
  setup() {
    const submitted = ref(false)
    const email = ref('')
    const subscribe = () => {
      if (!email.value || !email.value.includes('@')) return
      // Placeholder - replace with Mailchimp/ConvertKit endpoint
      submitted.value = true
      email.value = ''
      setTimeout(() => { submitted.value = false }, 5000)
    }
    return () => {
      const path = typeof window !== 'undefined' ? window.location.pathname : ''
      if (path === '/' || path === '') return null
      return h('div', { class: 'subscribe-section' }, [
        h('div', { class: 'subscribe-content' }, [
          h('span', { class: 'subscribe-icon' }, '📬'),
          h('div', { class: 'subscribe-text' }, [
            h('strong', 'Never miss a meta update.'),
            h('span', 'New hero generation guides delivered to your inbox.')
          ]),
          h('div', { class: 'subscribe-form' }, [
            h('input', {
              type: 'email',
              placeholder: 'your@email.com',
              value: email.value,
              onInput: (e) => { email.value = e.target.value }
            }),
            h('button', { onClick: subscribe },
              submitted.value ? '✅ Subscribed!' : 'Subscribe'
            )
          ])
        ])
      ])
    }
  }
}

// ============================================
// Schema Structured Data
// ============================================
const injectSchema = () => {
  if (typeof window === 'undefined') return
  nextTick(() => {
    const path = window.location.pathname
    // Skip non-guide pages
    if (!path.startsWith('/guides/') && path !== '/') return

    const isArticle = path.startsWith('/guides/')
    const schema = isArticle ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': document.title,
      'url': window.location.href,
      'dateModified': new Date().toISOString().split('T')[0],
      'author': { '@type': 'Organization', 'name': 'Whiteout Survival Guide' },
      'publisher': { '@type': 'Organization', 'name': 'Whiteout Survival Guide' },
      'disclaimer': 'Fan-made guide. Not affiliated with Century Games.',
      'inLanguage': 'en-US'
    } : {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Whiteout Survival Guide',
      'url': 'https://whiteout-survival-guide.pages.dev',
      'description': 'The #1 English guide for Whiteout Survival — Hero Tier Lists, Builds, Bear Hunt Strategy & more.'
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}

// ============================================
// Export Theme
// ============================================
export default {
  extends: DefaultTheme,
  Layout: (props) => {
    onMounted(() => { injectSchema() })
    return h(DefaultTheme.Layout, props, {
      'doc-after': () => h(ShareButtons),
      'layout-bottom': () => h('div', {}, [
        h(EmailSubscribe),
        h(CookieBanner),
        h(AiDisclaimer)
      ])
    })
  }
}
