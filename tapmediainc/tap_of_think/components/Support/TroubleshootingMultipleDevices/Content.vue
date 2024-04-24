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
                                    <h3 class="blog-title py-2 py-sm-3"><a href="#">Android</a></h3>
                                    <h5 class="py-2 py-sm-3">Steps to re-register Yoush on a new Android phone:</h5>
                                    <ol class="mb-3">
                                        <li>Tap on the “Device no longer registered” banner.</li>
                                        <li>Enter your phone number and verify it with the SMS code you receive.</li>
                                        <li>Your phone will be connected to Yoush and your other device will go offline.</li>
                                    </ol>
                                    <h5 class="py-2 py-sm-3">Tips for scanning the QR code:</h5>
                                    <ul class="mb-3">
                                        <li>Move your phone further away or closer to the code.</li>
                                        <li>Increase the brightness of the monitor or laptop screen.</li>
                                        <li>Resize the Yoush Desktop window.</li>
                                        <li>Capture a screenshot of the QR code and zoom in on it.</li>
                                    </ul>
                                  </div>
                                  <!-- Blog Details -->
                                  <div class="blog-details">
                                    <h3 class="blog-title py-2 py-sm-3"><a href="#">IOS</a></h3>
                                    <p>Copying message history to another device is not supported in Yoush.</p>
                                    <p>Account transfers move your account to the other device, which deletes it from the old device.</p>
                                    <p>To use multiple devices, an iPad or Desktop must be linked as a new device. To do this, open Yoush on your iPad or Desktop and tap on “Add as New Device”.</p>
                                    <p>Once your iPad or Desktop is linked, you will be able to receive and send messages on both devices. However, your message history will not be synced between devices.</p>
                                    <p>This is a security measure to protect your privacy. If Yoush were to allow you to copy your message history to another device, it would mean that Yoush would need to have access to your messages in order to copy them. This would compromise the end-to-end encryption that Yoush uses to protect your messages.</p>
                                    <p>I apologize for any inconvenience this may cause. However, I hope you understand that this is a necessary measure to protect your privacy. </p>
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
