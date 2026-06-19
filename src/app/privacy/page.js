import Link from "next/link";
import { SITE } from "@/lib/site";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="badge-eyebrow mb-4">Legal</p>
      <h1 className={`${HEADING.h1} ${TEXT_COLOR.primary}`}>Privacy Policy</h1>
      <p className={`mt-4 ${BODY.hero} ${TEXT_COLOR.secondary}`}>
        {SITE.name} respects your privacy. This page outlines how we collect, use, and protect
        information when you use our website and software services.
      </p>

      <div className={`prose-legal mt-10 ${BODY.small}`}>
        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect contact details, usage data, and information you submit through forms,
            demo requests, or support channels.
          </p>
        </section>
        <section>
          <h2>How We Use Information</h2>
          <p>
            Data is used to provide services, respond to inquiries, improve our products, and meet
            legal or regulatory requirements where applicable.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            For privacy-related questions, email{" "}
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
