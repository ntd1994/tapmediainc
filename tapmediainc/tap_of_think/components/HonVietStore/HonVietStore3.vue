<template>
  <BreadcrumbHonVietStore/>
  <div>
    <!-- Hero Section -->
    <header class="hero-section text-center">
      <div class="container">
        <h1>Welcome to Hon Viet Store</h1>
        <p>Your Premier Online Destination for Freshness and Quality</p>
        <a :href="storeUrl" class="btn btn-primary btn-lg cta-button">Explore Now</a>
      </div>
    </header>

    <!-- About Us Section -->
    <section class="container text-center my-5">
      <h2>Why Choose Hon Viet Store?</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="feature-icon">&#128352;</div>
          <h3>Diverse Selection</h3>
          <p>Explore our extensive range of fresh fruits, spices, dry foods, honey, and health & beauty products, all selected for top-notch quality.</p>
        </div>
        <div class="col-md-4">
          <div class="feature-icon">&#128181;</div>
          <h3>Competitive Pricing</h3>
          <p>Benefit from our great deals and promotions designed to give you the best value for your money.</p>
        </div>
        <div class="col-md-4">
          <div class="feature-icon">&#128176;</div>
          <h3>Exceptional Customer Service</h3>
          <p>Our friendly team is here to assist you with product selections and address any queries before and after your purchase.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="text-center my-5">
      <h2>Ready to Experience the Best?</h2>
      <a :href="storeUrl" class="btn btn-primary btn-lg">Visit Our Store</a>
    </section>

    <!-- Contact Information -->
    <section class="container text-center my-5">
      <h2>Contact Us</h2>
      <p>For any inquiries or assistance, please reach out to us:</p>
      <p>
        <strong>Website:</strong> <a :href="storeUrl">{{ storeUrl }}</a><br>
        <strong>Email:</strong> <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a><br>
        <strong>Hotline:</strong> {{ contactPhone }}<br>
        <strong>Address:</strong> {{ contactAddress }}
      </p>
    </section>

    <!-- Footer -->
    <footer class="footer text-center">
      <p>&copy; 2024 Hon Viet Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang ="ts">
export default {
  data() {
    return {
      storeUrl: 'https://honvietstore.vn',
      contactEmail: 'cskh@honvietstore.vn',
      contactPhone: '0901 456 238',
      contactAddress: '22-36 Nguyễn Huệ, Bến Nghé, Q1, TP.Hồ Chí Minh'
    };
  }
};
</script>

<style scoped>
.hero-section {
  background: url('/assets/img/honVietStore_cap1.png') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 100px 0;
}
.hero-section h1 {
  font-size: 3rem;
  font-weight: bold;
}
.feature-icon {
  font-size: 2rem;
  color: #007bff;
}
.cta-button {
  margin-top: 20px;
}
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
}
</style>