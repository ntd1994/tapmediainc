<template>
    <section class="section work-area ptb_100">
        <!-- Work Slider Wrapper -->
        <div class="work-wrapper d-none d-md-block">
            <div class="work-slider-wrapper" data-aos="zoom-in">
                <!-- Work Slider -->
                <ul class="work-slider owl-carousel">
                    <li class="slide-item mx-auto">
                        <img src="assets/img/setup_step_register.jpg" alt="">
                    </li>
                    <li class="slide-item mx-auto">
                        <img src="assets/img/setup_step_3.jpg" alt="">
                    </li>
                    <li class="slide-item mx-auto">
                        <img src="assets/img/setup_step_4.jpg" alt="">
                    </li>
                    <li class="slide-item mx-auto">
                        <img src="assets/img/setup_step_5.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center d-md-none">
                <!-- Section Heading -->
                <div class="col-12 col-md-10 col-lg-6">
                    <!-- Section Heading -->
                    <div class="section-heading text-center">
                        <h2 class="text-capitalize">YOUSH</h2>
                        <p class="d-none d-sm-block mt-4">Secure Chat Application</p>
                    </div>
                </div>
            </div>
            <!-- Work Content -->
            <div class="row justify-content-end justify-content-lg-between work-content" id="work-slider-pager">
                <div class="col-12 col-sm-6">
                    <a href="#" class="pager-item active">
                        <!-- Single Work -->
                        <div class="single-work d-inline-block text-center p-4">
                            <h3 class="mb-2">Install</h3>
                            <p>1. Visit your device's app store (Google Play Store or App Store).</p>
                            <p>2. Search for "Yoush" and tap on the download/install button.</p>
                            <p>3. Once installed, open the Yoush app.</p>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6">
                    <a href="#" class="pager-item">
                        <!-- Single Work -->
                        <div class="single-work d-inline-block text-center p-4">
                            <h3 class="mb-2">Register</h3>
                            <p>1. Tap on "Get Started" on the welcome screen.</p>
                            <p>2. Enter your phone number to receive a verification code.</p>
                            <p>3. Verify your phone number by entering the code received via SMS.</p>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6">
                    <a href="#" class="pager-item">
                        <!-- Single Work -->
                        <div class="single-work d-inline-block text-center p-4">
                            <h3 class="mb-2">Setup profile</h3>
                            <p>1. Choose a profile picture by tapping on the avatar icon.</p>
                            <p>2. Enter your name and an optional profile bio.</p>
                            <p>3. Customize your privacy settings according to your preferences.</p>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6">
                    <a href="#" class="pager-item">
                        <!-- Single Work -->
                        <div class="single-work d-inline-block text-center p-4">
                            <h3 class="mb-2">Done</h3>
                            <p>1. Explore the app, send a message to a friend, or start a group chat.</p>
                            <p>2. Don't forget to check out Yoush's features like disappearing messages and secure calls.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.slide-item {
    overflow-y: hidden;
    max-height: 450px;
}
</style>