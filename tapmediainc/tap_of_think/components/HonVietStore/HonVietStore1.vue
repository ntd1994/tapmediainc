<script setup lang="ts">
</script>

<template>
  <div class="miami">
    <Scrollup />
    <div class="all-area">
       <BreadcrumbHonVietStore/>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image">
        </div>
    </section>
      <div class="container my-5">x
        <section class="introduction my-5">
          <div class="container">
            <!-- Row 1 -->
            <div class="row mb-4">
              <!-- Column 1: Image -->
              <div class="col-md-6">
                <img src="assets/img/honVietImg.png" class="img-fluid hover-effect" alt="Fresh Fruits">
              </div>
              <!-- Column 2: Text -->
              <div class="col-md-6">
                <h2>Fresh Fruits</h2>
                <p>
                  Our <strong>fresh fruits</strong> are sourced directly from trusted farms, ensuring the highest quality and freshness. From locally grown staples to exotic varieties, we have the perfect selection to satisfy your cravings and provide essential nutrients for a healthier you.
                </p>
                <h2>Health & Beauty</h2>
                <p>
                  For those looking to enhance both <strong>health and beauty</strong>, we offer products that use natural ingredients to support your wellness and skincare needs. From nourishing skincare solutions to health supplements, our range is designed to help you feel and look your best, naturally.
                </p>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="row mb-4">
              <!-- Column 1: Text -->
              <div class="col-md-6">
                <h2>Exotic Spices</h2>
                <p>
                  Explore our array of <strong>spices</strong> that bring bold, aromatic flavors to your meals. From traditional herbs to unique spice blends, our collection is crafted to enhance both taste and wellness. Add a burst of flavor to your dishes while supporting a healthy lifestyle with our carefully selected spices.
                </p>
                <h2>Pure Honey</h2>
                <p>
                  At Hon Viet Store, we also provide a range of <strong>pure honey</strong>, sourced from sustainable beekeepers. Our honey is 100% natural, packed with antioxidants, and offers a rich, sweet flavor that’s perfect as a sweetener or for its many health benefits.
                </p>
              </div>
              <!-- Column 2: Image -->
              <div class="col-md-6">
                <img src="assets/img/honVietImg1.png" class="img-fluid hover-effect" alt="Exotic Spices">
              </div>
            </div>

            <!-- Row 3 -->
            <div class="row">
              <!-- Column 1: Image -->
              <div class="col-md-6">
                <img src="assets/img/honVietImg3.png" class="img-fluid hover-effect" alt="Dried Foods">
              </div>
              <!-- Column 2: Text -->
              <div class="col-md-6">
                <h2>Dried Foods</h2>
                <p>
                  Our <strong>dried foods</strong> offer both convenience and nutrition, making them ideal for snacks or as an ingredient in your favorite recipes. From dried fruits and nuts to pantry staples, our products are rich in essential vitamins and minerals, contributing to your overall well-being.
                </p>
                <h2>Handcrafted Artisan Products</h2>
                <p>
                  Our <strong>handcrafted artisan products</strong> are a testament to traditional craftsmanship and attention to detail. Each item is meticulously made by skilled artisans, using sustainable materials and techniques passed down through generations. From intricate wood carvings to beautifully woven textiles, these products reflect cultural heritage and offer a unique charm to your home. Whether you're looking for a statement piece or a meaningful gift, our selection of handcrafted goods is designed to bring both beauty and functionality to your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2: Features -->
        <section id="features" class="mb-5">
          <h2 class="text-center mb-4">Why Shop at Hon Viet Store?</h2>
          <div class="row">
            <div class="col-md-12 col-lg-6 mb-4">
              <div class="feature-box text-center p-4 border">
                <h3>Fresh and Natural Products</h3>
                <p>Our fruits, spices, and dried foods are sourced directly from farmers and trusted suppliers, ensuring freshness and quality in every bite.</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 mb-4">
              <div class="feature-box text-center p-4 border">
                <h3>Pure Honey</h3>
                <p>Enjoy the natural sweetness and health benefits of our honey, harvested from sustainable sources to bring you the best nature has to offer.</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 mb-4">
              <div class="feature-box text-center p-4 border">
                <h3>Health and Beauty</h3>
                <p>We offer a range of health and beauty products that promote wellness and enhance natural beauty, using ingredients that are safe and effective.</p>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 mb-4">
              <div class="feature-box text-center p-4 border">
                <h3>Trusted Quality</h3>
                <p>Every product at Hon Viet Store is carefully selected for its quality and benefits, providing you with a reliable and enjoyable shopping experience.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Call to Action -->
        <section id="cta" class="text-center">
          <h2>Ready to Embrace Natural Living?</h2>
          <p>Explore our wide selection of premium products that bring nature's best to your doorstep. Shop now and experience the difference!</p>
          <NuxtLink to="https://honvietstore.com/us" class="btn btn-primary btn-lg custom-button">Let's Go Shopping</NuxtLink>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/honVietStore_cap2.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: absolute;
  z-index: 1;
  color: white;
  text-align: center;
  padding-left: 36px;
  padding-right: 36px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.introduction {
  padding: 40px 0;
}

.introduction h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.introduction p {
  font-size: 1rem;
  line-height: 1.5;
}

.img-fluid {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature-box {
  border-radius: 8px;
  margin-bottom: 32px;
}

.custom-button {
  transition: all 0.3s ease-in-out; /* Smooth transition */
}

.custom-button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transform: translateY(-4px); /* Raise button on hover */
}

@media (max-width: 768px) {
  .hero-image {
    background-size: cover;
    background-position: center center;
  }
}
</style>