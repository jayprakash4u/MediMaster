import Link from "next/link";
import { SITE } from "@/config/site";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="badge-eyebrow mb-4">Legal</p>
      <h1 className={`${HEADING.h1} ${TEXT_COLOR.primary}`}>Terms of Service</h1>
      <p className={`mt-4 ${BODY.hero} ${TEXT_COLOR.secondary}`}>
        By accessing {SITE.name} websites and products, you agree to the terms described on this
        page.
      </p>

      <div className={`prose-legal mt-10 ${BODY.small}`}>
        <section>
          <h2>Use of Services</h2>
          <p>
            Our software and website content are provided for lawful business and healthcare
            operations. You agree not to misuse, reverse engineer, or disrupt our services.
          </p>
        </section>
        <section>
          <h2>Accounts & Data</h2>
          <p>
            Customers are responsible for safeguarding account credentials and ensuring that data
            entered into the platform complies with applicable laws and organizational policies.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={SITE.contact.emailHref}>{SITE.contact.email}</a>.
          </p>
        </section>
      </div>

      <Link href="/" className={`mt-10 inline-flex ${COMPONENT_STYLES.linkAccent}`}>
        ← Back to home
      </Link>
    </main>
  );
}
