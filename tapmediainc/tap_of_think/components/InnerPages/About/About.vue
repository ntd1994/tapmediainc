<template>
  <div>
    <ScrollupSection />
    <div class="all-area">
      <HeaderSection />
      <BreadcrumbSection />
      <SkillsSection />
      <AboutUsSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import HeaderSection from '../../Header/HeaderOne'
import BreadcrumbSection from '../../Breadcrumb/About/About'
import SkillsSection from '../../Skills/Skills'
import AboutUsSection from '../../AboutUs/AboutUs'
import PromoSection from '../../Promo/PromoThree'
import TeamSection from '../../Team/Team'
import NewsletterSection from '../../Newsletter/Newsletter'
import ContactSection from '../../Contact/Contact'
import FooterSection from '../../Footer/Footer'

export default {
  name: 'About',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    SkillsSection,
    AboutUsSection,
    PromoSection,
    TeamSection,
    NewsletterSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>

</style>