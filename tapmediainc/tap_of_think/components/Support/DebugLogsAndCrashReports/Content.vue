<template>
    <div class="blog">
      <ScrollupSection />
      <div class="all-area">
        <section id="blog" class="section blog-area ptb_50">
              <div class="container">
                  <div class="" style="max-with: 100%; margin:auto">
                      <div class="col-12 col-lg-9" style="max-with:80%; margin: auto">
                          <!-- Single Blog Details -->
                          <article class="single-blog-details">
                              <!-- Blog Content -->
                              <div class="blog-content appo-blog">
                                  <!-- Blog Details -->
                                  <div class="blog-details">
                                    <p>
                                      At Yoush, we want our messaging and calling features to work seamlessly at all times. We take bug reports seriously and appreciate your help in making our applications more stable and usable.
                                    </p>
                                    <p>
                                      If you experience an issue or crash, please submit a debug log immediately after the issue occurs. Debug logs contain low level app information and do not reveal any of your message contents. This information can be used by Yoush to identify and fix bugs.
                                    </p>
                                  </div>
                              </div>
                          </article>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped>
  p {
    margin-bottom: 20px;
  }
		ul li {
			list-style-type: disc;
			margin-left: 14px;
			margin-bottom: 12px;
		}
		a[href^="mailto:"] {
			color: blue;
			text-decoration: underline;
		}
  </style>
