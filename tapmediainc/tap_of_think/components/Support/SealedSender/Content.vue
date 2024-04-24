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
                                    <h5 class="py-2 py-sm-3">Yoush’s metadata-minimization efforts</h5>
                                    <p class="mb-3">
                                        Yoush is committed to minimizing the amount of data that it retains about its users. In addition to its end-to-end encryption, Yoush does not store a record of your contacts, social graph, conversation list, location, user avatar, user profile name, group memberships, group titles, or group avatars.
                                    </p>
                                    <p class="mb-3">
                                        Yoush is currently exploring techniques to further reduce the amount of information that is accessible to the service. One of the latest changes in the Yoush beta release is designed to hide who is messaging whom.
                                    </p>
                                    <h5 class="py-2 py-sm-3">The importance of metadata minimization</h5>
                                    <p class="mb-3">
                                        Metadata is data about data. In the context of messaging apps, metadata can include things like the sender and recipient of a message, the time and date of the message, and the size of the message.
                                    </p>
                                    <p class="mb-3">
                                        Metadata can be used to track and monitor users’ communications. For example, if a government wants to track down dissidents, it can look at the metadata of their messaging app communications to see who they are talking to and when.
                                    </p>
                                    <p class="mb-3">
                                        By minimizing the amount of metadata that it retains, Signal makes it more difficult for third parties to track and monitor its users’ communications.
                                    </p>
                                    <h5 class="py-2 py-sm-3">How Yoush is hiding who is messaging whom</h5>
                                    <p class="mb-3">
                                        Yoush is using a technique called “sealed senders” to hide who is messaging whom. Sealed senders work by encrypting the sender’s identity before it is sent to the Yoush server. The Signal server can then decrypt the sender’s identity when it needs to deliver the message, but it cannot see the sender’s identity while the message is in transit.
                                    </p>
                                    <p class="mb-3">
                                        Sealed senders are still under development, but they have the potential to significantly improve the privacy of Signal users.
                                    </p>
                                    <h5 class="py-2 py-sm-3">Conclusion</h5>
                                    <p class="mb-3">
                                        Yoush is committed to protecting the privacy of its users. By minimizing the amount of data that it retains and by using techniques like sealed senders, Yoush is making it more difficult for third parties to track and monitor its users’ communications.
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
