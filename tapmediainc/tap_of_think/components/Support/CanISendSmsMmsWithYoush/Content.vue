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
                                    <h3 class="blog-title py-2 py-sm-3"><a href="#">Summary of Yoush’s decision to remove SMS support on Android:</a></h3>
                                    <ul class="mb-3">
                                        <li>SMS is not secure or private.</li>
                                        <li>SMS is not used much beyond the US and a few other western countries, and its use is declining.</li>
                                        <li>Signal does not control delivery of SMS and can not prevent spam being sent via SMS.</li>
                                        <li>SMS messages are very expensive in many parts of the world.</li>
                                        <li>Proper SMS support takes a lot of time and labor.</li>
                                        <li>SMS is an old and degraded protocol, with many bugs.</li>
                                        <li>Google is introducing RCS, a new messaging protocol set to displace SMS.</li>
                                        <li>Offering SMS support was only possible on Android. iOS does not allow third party SMS clients.</li>
                                    </ul>
                                    <p>
                                        <strong>Yoush’s reasons for removing SMS support are valid and well-reasoned.</strong> SMS is an outdated and insecure protocol, and it is not compatible with Yoush’s commitment to privacy and security. Additionally, maintaining SMS support on Android is becoming increasingly difficult and expensive.
                                    </p>
                                    <p>
                                        <strong>Yoush users can continue to send and receive private messages using Yoush messages.</strong> Yoush messages are end-to-end encrypted, which means that they can only be read by the sender and the recipient. Yoush users can also use Yoush on multiple devices, including smartphones, tablets, and computers.
                                    </p>
                                    <p>
                                        <strong>If you need to send or receive SMS messages, you can use a different messaging app.</strong> There are many different messaging apps available, both free and paid. Some popular messaging apps include Google Messages, Textra, and Pulse SMS.
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
		a[href^="mailto:"] {
			color: blue;
			text-decoration: underline;
		}
  </style>
