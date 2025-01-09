import Footer from "../components/footer";
import Header from "../components/header";
import React from "react";

const TermsOfUse = () => {
  <Header />;
  return (
    <div>
      <Header />
      <div class="my-8 max-w-5xl mx-auto px-4">
        <h2 class="text-lg font-medium">Effective Date: Dec 1, 2024</h2>
        <p class="text-base mt-2">
          Welcome to AI Writer Pro! By accessing or using our app, you agree to
          comply with and be bound by these Terms and Conditions. If you do not
          agree to these terms, please refrain from using our app.
        </p>

        <h3 class="text-md font-semibold mt-4">1. License Grant</h3>
        <p class="text-base mt-2">
          The Company grants you a personal, non-transferable, non-exclusive,
          revocable license to use the App on iOS devices solely for personal,
          non-commercial purposes, subject to this Agreement and Apple’s App
          Store Terms of Service.
        </p>

        <h3 class="text-md font-semibold mt-4">2. Subscriptions</h3>
        <p class="text-base mt-2">
          AI Writer Pro offers auto-renewing subscriptions. By purchasing a
          subscription, you agree to the terms below:
        </p>
        <div class="ml-3">
          <p class="text-base mt-2">
            <span class="font-bold">• Discount on First Order:</span> All
            subscriptions are discounted by 40% for the first order only.
          </p>
          <p class="text-base mt-2">
            <span class="font-bold">• Subscription Options:</span>
          </p>
          <div class="ml-3">
            <p class="text-base mt-2">
              • Weekly Subscription: Original Price: $3.99, First Order Price:
              $2.39, Length: 7 Days, Auto-renews every 7 days at the full price
              of $3.99.
            </p>
            <p class="text-base mt-2">
              • Monthly Subscription: Original Price: $12.99, First Order Price:
              $7.79, Length: 30 Days, Auto-renews every 30 days at the full
              price of $12.99.
            </p>
            <p class="text-base mt-2">
              • Yearly Subscription: Original Price: $109.99, First Order Price:
              $65.99, Length: 365 Days, Auto-renews annually at the full price
              of $109.99.
            </p>
          </div>
          <p class="text-base mt-2">
            <span class="font-bold">• Auto-Renewal Policy:</span> Subscriptions
            automatically renew unless canceled at least 24 hours before the end
            of the current period.
          </p>
          <p class="text-base mt-2">
            • Your iTunes account will be charged for renewal within 24 hours
            prior to the end of the current period.
          </p>
          <p class="text-base mt-2">
            • Manage subscriptions and turn off auto-renewal in Settings &gt;
            Apple ID &gt; Subscriptions on your iOS device.
          </p>
        </div>

        <h3 class="text-md font-semibold mt-4">3. Permissions</h3>
        <p class="text-base mt-2">
          The App requires specific permissions for certain features. By
          granting permissions, you agree to their use as described:
        </p>
        <div class="ml-3">
          <p class="text-base mt-2">
            <span class="font-bold">• Camera Permission:</span> To capture
            images for the image-to-text feature. Note: Images are processed
            locally and are not stored or shared without your explicit consent.
          </p>
          <p class="text-base mt-2">
            <span class="font-bold">• Microphone Permission:</span> To record
            voice input for the speech-to-text feature. Note: Audio is processed
            locally and is not recorded or transmitted without your explicit
            consent.
          </p>
          <p class="text-base mt-2">
            <span class="font-bold">• Photo Library Permission:</span> To select
            stored images for text extraction. Note: No images are shared with
            third parties, and access is limited to your selected files.
          </p>
        </div>

        <h3 class="text-md font-semibold mt-4">4. Usage Restrictions</h3>
        <p class="text-base mt-2">You agree not to:</p>
        <div class="ml-3">
          <p class="text-base mt-2">
            • Reverse engineer, decompile or attempt to extract the source code
            of the App.
          </p>
          <p class="text-base mt-2">
            • Use the App for illegal purposes or in violation of Apple’s App
            Store guidelines.
          </p>
          <p class="text-base mt-2">
            • Share or resell access to the App or its features.
          </p>
        </div>

        <h3 class="text-md font-semibold mt-4">5. Ownership</h3>
        <p class="text-base mt-2">
          All rights, title, and interest in the App and its content, including
          but not limited to intellectual property, remain with the Company.
        </p>

        <h3 class="text-md font-semibold mt-4">6. Privacy</h3>
        <p class="text-base mt-2">
          Your use of the App is governed by our Privacy Policy, which outlines
          how data is collected, used, and stored. View the full Privacy Policy
          at:
          <a
            href="https://aiwriterpro01.netlify.app/privacy-policy"
            class="text-blue-500 underline"
          >
            https://aiwriterpro01.netlify.app/privacy-policy
          </a>
          .
        </p>

        <h3 class="text-md font-semibold mt-4">7. Limitation of Liability</h3>
        <p class="text-base mt-2">The Company is not liable for:</p>
        <div class="ml-3">
          <p class="text-base mt-2">
            • Any loss of data or damages resulting from the use or inability to
            use the App.
          </p>
          <p class="text-base mt-2">
            • Issues caused by unauthorized access to your account.
          </p>
        </div>

        <h3 class="text-md font-semibold mt-4">8. Termination</h3>
        <p class="text-base mt-2">
          This Agreement remains in effect until terminated by either party. The
          Company reserves the right to terminate access to the App for
          violations of this Agreement or Apple’s guidelines.
        </p>

        <h3 class="text-md font-semibold mt-4">9. Governing Law</h3>
        <p class="text-base mt-2">
          This Agreement is governed by and construed under the laws of the
          State of Pakistan.
        </p>

        <h3 class="text-md font-semibold mt-4">10. Contact Information</h3>
        <p class="text-base mt-2">For support or inquiries, contact us:</p>
        <p class="text-base ml-3 mt-1">
          Email:{" "}
          <a
            href="mailto:info@thekaizenglobal.com"
            class="text-blue-500 underline"
          >
            info@thekaizenglobal.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
