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
                                    <h5 class="py-2 py-sm-3">Yoush message delivery issue</h5>
                                    <p class="mb-3">
                                        A message, sticker, reaction, read receipt, or media could not be delivered to your contact. This could be because they are not connected to the internet, they are using an outdated version of Yoush, or they have blocked you.
                                    </p>
                                    <h5 class="py-2 py-sm-3">What to do:</h5>
                                    <ul class="mb-3">
                                        <li>Ask your contact to check their internet connection and make sure they have the latest version of Yoush installed.</li>
                                        <li>If they are still unable to receive messages from you, ask them to try restarting their phone or computer.</li>
                                    </ul>
                                    <h5 class="py-2 py-sm-3">How to contact Yoush support:</h5>
                                    <p class="mb-3">
                                        If you are willing to provide information that will help Yoush prevent this from happening again, please contact us at <a href="mailto:support@tapofthink.com">support@tapofthink.com</a>
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
    ul li {
        list-style-type: disc;
        margin-left: 14px;
        margin-bottom: 12px;
    }
    ol li {
        list-style-type: decimal;
        margin-left: 14px;
        margin-bottom: 12px;
    }
    a[href^="mailto:"] {
        color: blue;
        text-decoration: underline;
    }
  </style>
