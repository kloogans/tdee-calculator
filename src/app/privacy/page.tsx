import { CalculatorIcon } from "@/ui/CalculatorIcon";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Terms() {
  return (
    <main className="py-20 w-full max-w-2xl h-full min-h-screen flex-1 flex flex-col items-center justify-center z-10 text-white px-2">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="mb-4">Effective Date: 06/19/2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          At "What's My TDEE?", we are committed to protecting your privacy.
          This Privacy Policy explains how we handle your personal information
          when you use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Do Not Collect
        </h2>
        <p>
          Our website does not collect, store, or share any personal
          information. You can use our tools without providing any personal
          details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Use of Cookies</h2>
        <p>
          "What's My TDEE?" does not use cookies to track or collect any
          information about your visit to our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of these
          websites. We encourage you to read the privacy policies of any
          third-party sites you visit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on our website. You
          are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <strong>whatsmytdee@gmail.com</strong>.
        </p>
      </section>

      <p>
        By using "What's My TDEE?", you acknowledge that you have read and
        understood this Privacy Policy.
      </p>
    </main>
  );
}
