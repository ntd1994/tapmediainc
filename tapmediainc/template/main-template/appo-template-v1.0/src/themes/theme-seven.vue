<template>
  <div class="seoul">
    <ScrollupSection />
    <div class="all-area">
      <HeaderSection />
      <HeroSection />
      <BrandingSection />
      <AboutSection />
      <WorkSection />
      <FeatureSection />
      <ScreenshotSection />
      <PricingSection />
      <ReviewSection />
      <TeamSection />
      <NewsletterSection />
      <DownloadSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../components/Scrollup/Scrollup'
import HeaderSection from '../components/Header/HeaderTwo'
import HeroSection from '../components/Hero/HeroSeven'
import BrandingSection from '../components/Branding/Branding'
import AboutSection from '../components/About/About'
import WorkSection from '../components/Work/Work'
import FeatureSection from '../components/Features/Features'
import ScreenshotSection from '../components/Screenshots/Screenshots'
import PricingSection from '../components/Pricing/Pricing'
import ReviewSection from '../components/Reviews/Reviews'
import TeamSection from '../components/Team/Team'
import NewsletterSection from '../components/Newsletter/Newsletter'
import DownloadSection from '../components/Download/Download'
import BlogSection from '../components/Blogs/Blog/Blog'
import ContactSection from '../components/Contact/Contact'
import FooterSection from '../components/Footer/Footer'

export default {
  name: 'ThemeSeven',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    BrandingSection,
    AboutSection,
    WorkSection,
    FeatureSection,
    ScreenshotSection,
    PricingSection,
    ReviewSection,
    TeamSection,
    NewsletterSection,
    DownloadSection,
    BlogSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>

</style>