<template>
    <div class="">
          <div class="inner-wrapper d-flex flex-column align-items-center justify-content-between p-4">
              <a class="navbar-brand" href="/">
                  <img class="logo" src="assets/img/logo.png" alt="logo">
              </a>
              <!-- ***** Download Page Area Start ***** -->
              <div class="download-page-area">
                  <div class="container">
                      <div class="row align-items-center">
                          <div class="col-12 col-md-6 order-2 order-md-1">
                            <div>
                              <h2 class="mb-3">Your download should begin automaticly.</h2>
                            </div>
                            <!-- Store Buttons -->
                            <div class="button-group store-buttons col-md-12 mx-auto">
                                <a href="#" class="btn btn-bordered">
                                    <i class="icofont icofont-brand-android-robot dsp-tc"></i>
                                    <p class="dsp-tc">GET IT ON
                                        <br> <span>Google Play</span></p>
                                </a>
                                <a href="#" class="btn btn-bordered">
                                    <i class="icofont icofont-brand-apple dsp-tc"></i>
                                    <p class="dsp-tc">AVAILABLE ON
                                        <br> <span>Apple Store</span></p>
                                </a>
                            </div>
                          </div>
                          <div class="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto order-1 order-md-2 mb-5 mb-md-0 pt-4 pt-md-0">
                              <img src="assets/img/download_thumb.png" alt="">
                          </div>
                      </div>
                  </div>
              </div>
              <!-- ***** Download Page Area End ***** -->
              <div class="footer-bottom">
                  <!-- Copyright Area -->
                  <div class="copyright-area border-0 pt-4 pt-md-0">
                      <p>Made with <i class="icofont-heart-alt"></i> By <a href="#">TAP News</a></p>
                  </div>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss">
    @media (max-width: 990px)  {
        .button-group {
            .btn {
                padding: 12px 64px;
            }

            .btn:first-child {
                margin-bottom: 16px;
            }
        }
    }
  </style>
