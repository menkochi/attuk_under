const credentials = [
  "Reg. HCPC",
  "CertMRCSLT",
  "ADOS-2 Assessor",
  "Advanced Sensory Integration Practitioner",
];

const concerns = [
  "Late talkers & delayed speech",
  "Autism spectrum assessment",
  "Sensory processing differences",
  "Stammering & fluency",
  "Social communication",
  "Parent coaching & guidance",
];

const services = [
  {
    title: "Speech & Language Therapy",
    tag: "CertMRCSLT · Reg. HCPC",
    desc: "Comprehensive assessment and personalised therapy for children with speech, language, and communication needs — evidence-based, play-led where possible, and always child-centred.",
  },
  {
    title: "Sensory Integration",
    tag: "Advanced SIP",
    desc: "Specialised support for children whose sensory processing affects learning, behaviour, and everyday routines. Priya is qualified as an Advanced Sensory Integration Practitioner.",
  },
  {
    title: "Autism Assessment",
    tag: "ADOS-2 Assessor",
    desc: "Structured ADOS-2 assessments to help families understand their child's profile and access the right support — delivered with sensitivity and clinical precision.",
  },
];

const steps = [
  {
    n: "01",
    title: "Get in touch",
    desc: "Send a message by email or WhatsApp — no referral needed. Priya will get back to you personally to understand your concerns.",
  },
  {
    n: "02",
    title: "Initial consultation",
    desc: "A relaxed conversation to discuss your child's history, your concerns, and what you're hoping to achieve.",
  },
  {
    n: "03",
    title: "Assessment",
    desc: "A thorough, child-friendly assessment covering speech, language, communication, and/or sensory profile.",
  },
  {
    n: "04",
    title: "Therapy & guidance",
    desc: "A personalised therapy plan with regular sessions and practical strategies you can use at home every day.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#203a6b]">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#e0d9d0] bg-[#fcfaf7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-10 md:py-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/ask_the_therapist_logo_vector_fixed2.svg"
              alt="Ask The Therapist"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-serif text-[17px] tracking-[-0.02em]">Ask the Therapist</span>
          </div>
          <a
            href="https://wa.me/447386115523"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[8px] bg-[#203a6b] px-4 py-2 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Book a call
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-[#fcfaf7] px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-[1fr_360px] md:items-center md:gap-16">

            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eaf4f0] px-3.5 py-1.5 text-[13px] font-medium text-[#3d8069]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3d8069]" />
                Now accepting new referrals
              </div>

              <h1 className="font-serif text-[46px] leading-[1.02] tracking-[-0.04em] text-[#203a6b] md:text-[76px]">
                Helping your child{" "}
                <span className="text-[#e79a3c]">find their voice</span>
              </h1>

              <p className="mt-6 max-w-lg text-[18px] leading-[1.8] text-[#5c6472]">
                Expert speech and language therapy led by Priya Silvarajan — a Reg. HCPC therapist, Advanced Sensory Integration Practitioner, and ADOS-2 Assessor.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/447386115523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-[10px] bg-[#e79a3c] px-7 py-[14px] text-[16px] font-medium text-white shadow-[0_8px_24px_rgba(231,154,60,0.32)] transition-transform hover:-translate-y-px"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.837L.057 23.882a.5.5 0 0 0 .61.61l6.045-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.073-1.384l-.363-.214-3.761.912.932-3.66-.236-.376A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href="mailto:priya@askthetherapist.co.uk"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[#ddd7cf] bg-white px-7 py-[14px] text-[16px] font-medium text-[#203a6b] transition-colors hover:border-[#203a6b]"
                >
                  Send an email
                </a>
              </div>
            </div>

            {/* Right — credentials card */}
            <div className="hidden md:block">
              <div className="rounded-[20px] border border-[#e7dfd3] bg-white p-7 shadow-[0_20px_60px_rgba(32,58,107,0.09)]">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[#b0b8c2]">Qualifications</p>
                <ul className="mt-4 flex flex-col gap-3.5">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#eaf4f0]">
                        <svg className="h-2.5 w-2.5 text-[#3d8069]" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[14px] leading-snug text-[#203a6b]">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-[#f0ebe4] pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[#b0b8c2]">Practice</p>
                  <p className="mt-1.5 text-[15px] font-medium text-[#203a6b]">Allen Speech and Language</p>
                  <p className="mt-0.5 text-[13px] text-[#8a939f]">University of Canterbury</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Concerns ── */}
      <section className="border-y border-[#e7dfd3] bg-[#f7f4ef] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-20">

            <div>
              <h2 className="font-serif text-[32px] leading-[1.1] tracking-[-0.03em] md:text-[46px]">
                Worried about your child's development?
              </h2>
              <p className="mt-5 text-[17px] leading-[1.85] text-[#5c6472]">
                Every parent's journey is different. Whether your child has been slow to talk, received a diagnosis, or you've simply had a nagging feeling something isn't quite right — you don't have to navigate it alone.
              </p>
              <p className="mt-4 text-[17px] leading-[1.85] text-[#5c6472]">
                Priya works closely with families to understand the full picture, creating plans that make a real difference — at home, in school, and in daily life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {concerns.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-[12px] border border-[#e7dfd3] bg-white px-4 py-4 shadow-[0_2px_8px_rgba(32,58,107,0.04)]"
                >
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#fdf0e0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e79a3c]" />
                  </span>
                  <p className="text-[14px] leading-snug text-[#203a6b]">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#1e3660] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#7db6d6]">Specialist services</p>
          <h2 className="mt-3 font-serif text-[32px] leading-[1.1] tracking-[-0.03em] text-white md:text-[46px]">
            What Priya offers
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-[16px] border border-[#2a4878] bg-[#162d55] p-7"
              >
                <span className="inline-block rounded-full border border-[#2a4878] px-3 py-1 text-[11px] font-medium text-[#7db6d6]">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-serif text-[22px] leading-snug text-white">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#8aabcc]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#fcfaf7] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">

            <div className="md:sticky md:top-24">
              <p className="text-[11px] font-medium uppercase tracking-widest text-[#b0b8c2]">The process</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.1] tracking-[-0.03em] md:text-[46px]">
                What to expect
              </h2>
              <p className="mt-5 text-[17px] leading-[1.85] text-[#5c6472]">
                From your first message to ongoing therapy, the focus is always on making the process as clear and stress-free as possible for you and your child.
              </p>
              <a
                href="https://wa.me/447386115523"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-[#e79a3c] hover:underline"
              >
                Get started today
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              {steps.map((item, i) => (
                <div
                  key={item.n}
                  className={`flex gap-6 py-7 ${i < steps.length - 1 ? "border-b border-[#e7dfd3]" : ""}`}
                >
                  <span className="mt-0.5 min-w-[40px] font-serif text-[36px] leading-none text-[#e0d9d0]">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-[17px] font-semibold text-[#203a6b]">{item.title}</p>
                    <p className="mt-1.5 text-[15px] leading-[1.8] text-[#5c6472]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── About Priya ── */}
      <section className="border-t border-[#e7dfd3] bg-[#f7f4ef] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">

            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-[#b0b8c2]">About</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.1] tracking-[-0.03em] md:text-[46px]">
                Meet Priya
              </h2>
              <p className="mt-5 text-[17px] leading-[1.85] text-[#5c6472]">
                Priya Silvarajan is a Clinical Manager, Speech and Language Therapist, and Advanced Sensory Integration Practitioner. She is registered with the Health and Care Professions Council (HCPC) and a Certified Member of the Royal College of Speech & Language Therapists.
              </p>
              <p className="mt-4 text-[17px] leading-[1.85] text-[#5c6472]">
                Trained at the University of Canterbury, Priya has built her career supporting children with a broad range of communication and sensory needs. As a qualified ADOS-2 assessor, she also provides autism diagnostic assessments — helping families get the answers and support they deserve.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {credentials.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-[#ddd7cf] bg-white px-3.5 py-1 text-[13px] text-[#5c6472]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e7dfd3] bg-white p-8 shadow-[0_16px_48px_rgba(32,58,107,0.07)]">
              <svg className="h-8 w-8 text-[#e79a3c] opacity-60" viewBox="0 0 32 32" fill="currentColor">
                <path d="M10 8C6.686 8 4 10.686 4 14c0 2.97 2.016 5.47 4.762 6.178C8.07 23.416 10.72 26 14 26v-2c-2.206 0-4-1.794-4-4v-1h1c2.206 0 4-1.794 4-4s-1.794-4-4-4zm12 0c-3.314 0-6 2.686-6 6 0 2.97 2.016 5.47 4.762 6.178C20.07 23.416 22.72 26 26 26v-2c-2.206 0-4-1.794-4-4v-1h1c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
              </svg>
              <p className="mt-4 font-serif text-[21px] leading-relaxed text-[#203a6b]">
                I believe every child has the potential to communicate and connect. My job is to find the right pathway for each individual — and to support the whole family along the way.
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-[#f0ebe4] pt-6">
                <img
                  src="/ask_the_therapist_logo_vector_fixed2.svg"
                  alt="Priya Silvarajan"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[#203a6b]">Priya Silvarajan</p>
                  <p className="text-[13px] text-[#8a939f]">Speech & Language Therapist</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#e79a3c] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[36px] leading-[1.1] tracking-[-0.03em] text-white md:text-[54px]">
            Ready to take the first step?
          </h2>
          <p className="mt-5 text-[18px] leading-[1.8] text-[rgba(255,255,255,0.82)]">
            Getting in touch is easy and there's no obligation. Priya will help you work out the right next step for your child.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447386115523"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-white px-8 py-[15px] text-[16px] font-medium text-[#c27b28] shadow-[0_8px_28px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-px"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:priya@askthetherapist.co.uk"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(255,255,255,0.45)] px-8 py-[15px] text-[16px] font-medium text-white transition-colors hover:border-white hover:bg-[rgba(255,255,255,0.08)]"
            >
              priya@askthetherapist.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e7dfd3] bg-[#fcfaf7] px-5 py-7 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src="/ask_the_therapist_logo_vector_fixed2.svg"
              alt="Ask The Therapist"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="font-serif text-[15px] tracking-[-0.02em] text-[#203a6b]">Ask the Therapist</span>
          </div>
          <p className="text-[13px] text-[#a0a8b0]">
            © 2026 Ask the Therapist &nbsp;·&nbsp; priya@askthetherapist.co.uk
          </p>
          <p className="text-[13px] text-[#a0a8b0]">Reg. HCPC &nbsp;·&nbsp; CertMRCSLT</p>
        </div>
      </footer>

    </main>
  );
}
