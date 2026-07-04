import SectionTitle from "./SectionTitle";

const CONTACTS = [
  { label: "Email", value: "example@email.com", href: "mailto:example@email.com" },
  { label: "GitHub", value: "github.com/username", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle index="03">연락처</SectionTitle>
        <p className="-mt-6 mb-9 text-foreground-muted">
          궁금한 점이나 협업 제안이 있으시면 언제든 연락 주세요.
        </p>
        <div className="flex flex-col border-t border-border">
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener" : undefined}
              className="flex items-center justify-between border-b border-border py-5 transition-colors hover:text-accent"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {contact.label}
              </span>
              <span className="text-base sm:text-[1.05rem]">{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
