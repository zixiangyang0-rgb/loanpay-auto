const SITE = "https://auto.loanpaylogic.com";
const ORG_NAME = "LoanPay Auto";

export type Faq = { question: string; answer: string };

type ArticleJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  faqs?: Faq[];
  dateModified?: string;
};

function escapeJson(json: string): string {
  return json.replace(/</g, "\\u003c");
}

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE,
    logo: `${SITE}/icon.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@loanpaylogic.com",
      contactType: "customer support",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJson(JSON.stringify(data)) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  faqs = [],
  dateModified = "2026-10-01",
}: ArticleJsonLdProps) {
  const url = `${SITE}/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: ORG_NAME,
        url: SITE,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: ORG_NAME,
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: ORG_NAME, url: SITE },
        publisher: { "@id": `${SITE}/#organization` },
        datePublished: "2026-10-01",
        dateModified,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: url,
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJson(JSON.stringify(data)) }}
    />
  );
}
