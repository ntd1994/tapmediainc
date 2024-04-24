import Vue from 'vue'
import Router from 'vue-router'
import ThemeOne from '@/themes/theme-one'
import ThemeTwo from '@/themes/theme-two'
import ThemeThree from '@/themes/theme-three'
import ThemeFour from '@/themes/theme-four'
import ThemeFive from '@/themes/theme-five'
import ThemeSix from '@/themes/theme-six'
import ThemeSeven from '@/themes/theme-seven'
import ThemeEight from '@/themes/theme-eight'
import ThemeNine from '@/themes/theme-nine'
import About from '@/components/InnerPages/About/About'
import Pricing from '@/components/InnerPages/Pricing/Pricing'
import Reviews from '@/components/InnerPages/Reviews/Reviews'
import Faq from '@/components/InnerPages/Faq/Faq'
import Login from '@/components/Accounts/Login/Login'
import Reset from '@/components/Accounts/Reset/Reset'
import Signup from '@/components/Accounts/Signup/Signup'
import Download from '@/components/InnerPages/Download/Download'
import ThankYou from '@/components/InnerPages/ThankYou/ThankYou'
import Newsletter from '@/components/InnerPages/Newsletter/Newsletter'
import ErrorOne from '@/components/InnerPages/Error/ErrorOne/ErrorOne'
import ErrorTwo from '@/components/InnerPages/Error/ErrorTwo/ErrorTwo'
import Contact from '@/components/InnerPages/Contact/Contact'
import Maintenance from '@/components/InnerPages/Maintenance/Maintenance'
import ComingSoon from '@/components/InnerPages/ComingSoon/ComingSoon'
import BlogTwoColumn from '@/components/Blogs/BlogTwoColumn/BlogTwoColumn'
import BlogThreeColumn from '@/components/Blogs/BlogThreeColumn/BlogThreeColumn'
import BlogLeftSidebar from '@/components/Blogs/BlogLeftSidebar/BlogLeftSidebar'
import BlogRightSidebar from '@/components/Blogs/BlogRightSidebar/BlogRightSidebar'
import BlogDetailsLeftSidebar from '@/components/Blogs/BlogDetailsLeftSidebar/BlogDetailsLeftSidebar'
import BlogDetailsRightSidebar from '@/components/Blogs/BlogDetailsRightSidebar/BlogDetailsRightSidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ThemeOne',
      component: ThemeOne
    },
    {
      path: '/theme-two',
      name: 'ThemeTwo',
      component: ThemeTwo
    },
    {
      path: '/theme-three',
      name: 'ThemeThree',
      component: ThemeThree
    },
    {
      path: '/theme-four',
      name: 'ThemeFour',
      component: ThemeFour
    },
    {
      path: '/theme-five',
      name: 'ThemeFive',
      component: ThemeFive
    },
    {
      path: '/theme-six',
      name: 'ThemeSix',
      component: ThemeSix
    },
    {
      path: '/theme-seven',
      name: 'ThemeSeven',
      component: ThemeSeven
    },
    {
      path: '/theme-eight',
      name: 'ThemeEight',
      component: ThemeEight
    },
    {
      path: '/theme-nine',
      name: 'ThemeNine',
      component: ThemeNine
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/thank-you',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      component: Newsletter
    },
    {
      path: '/error-one',
      name: 'ErrorOne',
      component: ErrorOne
    },
    {
      path: '/error-two',
      name: 'ErrorTwo',
      component: ErrorTwo
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/coming-soon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/blog-two-column',
      name: 'BlogTwoColumn',
      component: BlogTwoColumn
    },
    {
      path: '/blog-three-column',
      name: 'BlogThreeColumn',
      component: BlogThreeColumn
    },
    {
      path: '/blog-left-sidebar',
      name: 'BlogLeftSidebar',
      component: BlogLeftSidebar
    },
    {
      path: '/blog-right-sidebar',
      name: 'BlogRightSidebar',
      component: BlogRightSidebar
    },
    {
      path: '/blog-details-left-sidebar',
      name: 'BlogDetailsLeftSidebar',
      component: BlogDetailsLeftSidebar
    },
    {
      path: '/blog-details-right-sidebar',
      name: 'BlogDetailsRightSidebar',
      component: BlogDetailsRightSidebar
    }
  ]
})