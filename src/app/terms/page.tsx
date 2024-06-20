import { CalculatorIcon } from "@/ui/CalculatorIcon";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Terms() {
  return (
    <main className="py-20 w-full max-w-2xl h-full min-h-screen flex-1 flex flex-col items-center justify-center z-10 text-white px-2">
      <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      <p className="mb-4">Effective Date: 06/19/2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          "What's My TDEE?" provides users with tools to calculate their Total
          Daily Energy Expenditure (TDEE) and other related metrics. This
          website is intended for informational purposes only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. No User Login or Information Storage
        </h2>
        <p className="mb-2">
          <strong>No User Accounts:</strong> Our website does not require or
          offer user login or account creation. You can use our tools without
          providing any personal information.
        </p>
        <p>
          <strong>No Data Storage:</strong> We do not store any personal
          information or user data. All calculations are performed locally on
          your device and are not saved or transmitted to our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Use of the Website</h2>
        <p className="mb-2">
          <strong>License:</strong> Unless otherwise stated, "What's My TDEE?"
          and/or its licensors own the intellectual property rights for all
          material on the website. All intellectual property rights are
          reserved. You may view and/or print pages from https://whatsmytdee.com
          for your own personal use subject to restrictions set in these terms
          and conditions.
        </p>
        <p className="mb-2">
          <strong>Restrictions:</strong> You must not:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Republish material from https://whatsmytdee.com</li>
          <li>
            Sell, rent, or sub-license material from https://whatsmytdee.com
          </li>
          <li>
            Reproduce, duplicate, or copy material from https://whatsmytdee.com
          </li>
          <li>
            Redistribute content from "What's My TDEE?" (unless content is
            specifically made for redistribution).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
        <p className="mb-2">
          <strong>No Medical Advice:</strong> The information provided on
          "What's My TDEE?" is not intended as medical advice. Always consult
          with a healthcare professional before starting any fitness program or
          making any changes to your diet or lifestyle.
        </p>
        <p>
          <strong>Accuracy of Information:</strong> While we strive to provide
          accurate and up-to-date information, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability with respect to
          the website or the information, products, services, or related
          graphics contained on the website for any purpose. Any reliance you
          place on such information is therefore strictly at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Limitations of Liability
        </h2>
        <p>
          In no event shall "What's My TDEE?" be liable for any direct,
          indirect, incidental, special, consequential, or punitive damages, or
          any damages whatsoever, including but not limited to, damages for loss
          of use, data, or profits, arising out of or in any way connected with
          the use or performance of the website, with the delay or inability to
          use the website, the provision of or failure to provide services, or
          for any information, software, products, services, and related
          graphics obtained through the website, or otherwise arising out of the
          use of the website, whether based on contract, tort, negligence,
          strict liability, or otherwise, even if "What's My TDEE?" has been
          advised of the possibility of damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Changes to These Terms
        </h2>
        <p>
          "What's My TDEE?" reserves the right to modify these terms and
          conditions at any time. We will post the most current version of the
          terms on our website. Continued use of the website after any such
          changes shall constitute your consent to such changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Florida, USA, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p>
          If you have any questions about these terms and conditions, please
          contact us at whatsmytdee@gmail.com.
        </p>
      </section>

      <p>
        By using "What's My TDEE?" you agree to these terms and conditions. If
        you do not agree with these terms, please do not use our website.
      </p>
    </main>
  );
}
