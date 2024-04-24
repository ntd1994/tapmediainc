<template>
  <div>
    <ScrollupSection />
    <div class="all-area">
      <HeaderSection />
      <BreadcrumbSection />
      <section id="pricing" class="section price-plan-area bg-gray ptb_100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="price-plan-wrapper">
                    <div class="single-price-plan">
                        <div class="price-header d-flex align-items-center justify-content-between my-4 px-3">
                            <h4 class="plan-title text-uppercase">
                                Starter
                            </h4>
                            <div class="plan-cost">
                                <span class="plan-price">$19</span>
                                <span class="plan-type text-uppercase">/month</span>
                            </div>
                        </div>
                        <ul class="plan-features pb-3">
                            <li><i class="icofont-check"></i>5GB Linux Web Space</li>
                            <li><i class="icofont-check"></i>5 MySQL Databases</li>
                            <li><i class="icofont-check"></i>Unlimited Email</li>
                            <li><i class="icofont-check"></i>250Gb mo Transfer</li>
                            <li><i class="icofont-close"></i>24/7 Tech Support</li>
                            <li><i class="icofont-close"></i>Daily Backups</li>
                        </ul>
                        <div class="plan-select">
                            <a class="btn btn-bordered text-uppercase" href="#">Select Plan</a>
                        </div>
                    </div>
                    <div class="single-price-plan">
                        <div class="price-header d-flex align-items-center justify-content-between my-4 px-3">
                            <h4 class="plan-title text-uppercase">
                                Basic
                            </h4>
                            <div class="plan-cost">
                                <span class="plan-price">$29</span>
                                <span class="plan-type text-uppercase">/month</span>
                            </div>
                        </div>
                        <ul class="plan-features pb-3">
                            <li><i class="icofont-check"></i>10GB Linux Web Space</li>
                            <li><i class="icofont-check"></i>10 MySQL Databases</li>
                            <li><i class="icofont-check"></i>Unlimited Email</li>
                            <li><i class="icofont-check"></i>500Gb mo Transfer</li>
                            <li><i class="icofont-check"></i>24/7 Tech Support</li>
                            <li><i class="icofont-close"></i>Daily Backups</li>
                        </ul>
                        <div class="plan-select">
                            <a class="btn btn-bordered text-uppercase" href="#">Select Plan</a>
                        </div>
                    </div>
                    <div class="single-price-plan featured">
                        <div class="price-header d-flex align-items-center justify-content-between my-4 px-3">
                            <h4 class="plan-title text-uppercase">
                                Pro
                            </h4>
                            <div class="plan-cost">
                                <span class="plan-price">$49</span>
                                <span class="plan-type text-uppercase">/month</span>
                            </div>
                        </div>
                        <ul class="plan-features pb-3">
                            <li><i class="icofont-check"></i>25GB Linux Web Space</li>
                            <li><i class="icofont-check"></i>25 MySQL Databases</li>
                            <li><i class="icofont-check"></i>Unlimited Email</li>
                            <li><i class="icofont-check"></i>2000Gb mo Transfer</li>
                            <li><i class="icofont-check"></i>24/7 Tech Support</li>
                            <li><i class="icofont-check"></i>Daily Backups</li>
                        </ul>
                        <div class="plan-select">
                            <a class="btn btn-bordered text-uppercase" href="#">Select Plan</a>
                        </div>
                    </div>
                    <div class="single-price-plan">
                        <div class="price-header d-flex align-items-center justify-content-between my-4 px-3">
                            <h4 class="plan-title text-uppercase">
                                Ultra
                            </h4>
                            <div class="plan-cost text-uppercase">
                                <span class="plan-price">$99</span>
                                <span class="plan-type">/month</span>
                            </div>
                        </div>
                        <ul class="plan-features pb-3">
                            <li><i class="icofont-check"></i>100GB Linux Web Space</li>
                            <li><i class="icofont-check"></i>Unlimited Databases</li>
                            <li><i class="icofont-check"></i>Unlimited Email</li>
                            <li><i class="icofont-check"></i>10000Gb mo Transfer</li>
                            <li><i class="icofont-check"></i>24/7 Tech Support</li>
                            <li><i class="icofont-check"></i>Daily Backups</li>
                        </ul>
                        <div class="plan-select">
                            <a class="btn btn-bordered text-uppercase" href="#">Select Plan</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      <NewsletterSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import HeaderSection from '../../Header/HeaderOne'
import BreadcrumbSection from '../../Breadcrumb/Pricing/Pricing'
import NewsletterSection from '../../Newsletter/Newsletter'
import FooterSection from '../../Footer/Footer'

export default {
  name: 'Pricing',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    NewsletterSection,
    FooterSection
  }
}
</script>

<style>

</style>