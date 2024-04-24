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
                                  <p data-sourcepos="1:1-1:17"><strong>Safety Number</strong></p>
                                  <p data-sourcepos="3:1-3:268">A safety number is a unique number that allows you to verify the security of your messages and calls with specific contacts. It is generated using a combination of your and your contact’s public keys, and it changes if either of you switch devices or reinstall Signal.</p>
                                  <p data-sourcepos="5:1-5:49"><strong>Why is it important to verify safety numbers?</strong></p>
                                  <p data-sourcepos="7:1-7:321">Verifying safety numbers helps to protect against man-in-the-middle attacks. In a man-in-the-middle attack, an attacker intercepts your communication and impersonates one of the parties involved. By verifying safety numbers, you can be sure that you are communicating with the person you think you are communicating with.</p>
                                  <p data-sourcepos="9:1-9:36"><strong>How do I verify a safety number?</strong></p>
                                  <p data-sourcepos="11:1-11:185">To verify a safety number, you can compare it to the safety number of your contact in person, or you can scan their QR code. You can also compare the safety numbers visually or audibly.</p>
                                  <p data-sourcepos="13:1-13:44"><strong>What happens if a safety number changes?</strong></p>
                                  <p data-sourcepos="15:1-15:194">If a safety number changes, you will see a safety number change alert in the chat header. This is a security precaution, as it could be a sign that someone is trying to impersonate your contact.</p>
                                  <p data-sourcepos="17:1-17:260">If you see a safety number change alert, you should compare the new safety number to the old safety number to make sure that they are the same. If the safety numbers are different, you should contact your contact to verify that their safety number has changed.</p>
                                  <p data-sourcepos="19:1-19:59"><strong>How do I manage the verified status of a safety number?</strong></p>
                                  <p data-sourcepos="21:1-21:139">To manage the verified status of a safety number, you can view the safety number and tap the Mark as Verified or Clear Verification button.</p>
                                  <p data-sourcepos="23:1-23:200">If you mark a safety number as verified, you will not see a safety number change alert if the safety number changes in the future. However, you can still manually verify the safety number at any time.</p>
                                  <p data-sourcepos="25:1-25:41"><strong>Why are safety numbers being updated?</strong></p>
                                  <p data-sourcepos="27:1-27:277">The legacy safety number format depended on phone numbers. The new safety number format does not. This is to support upcoming features like usernames, where you will be able to start a conversation using someone’s Signal username without necessarily knowing their phone number.</p>
                                  <p data-sourcepos="29:1-29:66"><strong>Is there a security difference between the two safety numbers?</strong></p>
                                  <p data-sourcepos="31:1-31:141">No. Both formats are equally secure. If you have previously marked a safety number as verified, you do not need to compare the numbers again.</p>
                                  <p data-sourcepos="33:1-33:14"><strong>Conclusion</strong></p>
                                  <p data-sourcepos="35:1-35:235">Safety numbers are an important security feature that can help to protect you from man-in-the-middle attacks. By verifying safety numbers, you can be sure that you are communicating with the person you think you are communicating with.</p>
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
