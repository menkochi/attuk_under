export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#203a6b]">
      <header className="border-b border-[#ddd7cf] bg-[#fcfaf7]">
        <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <div className="flex items-center gap-3">
            <img
              src="/ask_the_therapist_logo_vector_fixed2.svg"
              alt="Ask The Therapist logo"
              className="h-9 w-9 rounded-full object-cover md:h-10 md:w-10"
            />
            <span className="font-serif text-[18px] tracking-[-0.02em] md:text-[20px]">
              Ask the Therapist
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fcfaf7]">
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(90deg,rgba(239,212,174,0.82),rgba(244,240,234,0.62),rgba(180,212,205,0.9))]" />
        <div className="absolute inset-x-0 bottom-4 h-24 bg-[linear-gradient(90deg,rgba(228,195,146,0.36),rgba(255,255,255,0.14),rgba(126,181,164,0.42))]" />
        <div className="absolute left-0 bottom-0 h-36 w-[34%] rounded-tr-[120px] bg-[rgba(240,222,201,0.38)]" />
        <div className="absolute right-0 bottom-0 h-40 w-[37%] rounded-tl-[140px] bg-[rgba(192,224,214,0.38)]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-16 text-center md:px-20 md:pb-28 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2d9ce] bg-white px-4 py-1.5 text-[13px] text-[#7a828f]">
            Reg. HCPC &nbsp;·&nbsp; CertMRCSLT &nbsp;·&nbsp; ADOS-2 Assessor
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-[#203a6b] md:text-[72px]">
            Expert speech therapy for children and families
          </h1>

          <p className="mt-7 max-w-2xl text-[18px] leading-8 text-[#5c6472] md:text-[20px] md:leading-9">
            Led by Priya Silvarajan — a Reg. HCPC Speech and Language Therapist, Advanced Sensory Integration Practitioner, and ADOS-2 Assessor with extensive clinical experience supporting children and families across the UK.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:priya@askthetherapist.co.uk"
              className="rounded-[10px] bg-[#e79a3c] px-8 py-4 text-[17px] font-medium text-white shadow-[0_12px_24px_rgba(231,154,60,0.28)] transition-transform hover:-translate-y-[1px]"
            >
              Email us
            </a>
            <a
              href="https://wa.me/447386115523"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-[#25d366] px-8 py-4 text-[17px] font-medium text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)] transition-transform hover:-translate-y-[1px]"
            >
              WhatsApp us
            </a>
          </div>

          <p className="mt-6 text-sm text-[#7a828f]">
            Based in the UK &nbsp;·&nbsp; Supporting children and families
          </p>
        </div>
      </section>

      {/* Specialisms */}
      <section className="bg-[#f7f4ef] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-[28px] tracking-[-0.02em] text-[#203a6b] md:text-[36px] text-center mb-10">
            Areas of expertise
          </h2>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {[
              {
                title: "Speech & Language Therapy",
                text: "Comprehensive assessment and therapy for children with speech, language, and communication needs. HCPC registered and a Certified Member of the Royal College of Speech & Language Therapists.",
                accent: "from-[#7db6d6] to-[#6d9fc3]",
              },
              {
                title: "Sensory Integration",
                text: "As an Advanced Sensory Integration Practitioner, Priya supports children whose sensory processing differences affect learning, behaviour, and everyday life.",
                accent: "from-[#e8b04e] to-[#e59d34]",
              },
              {
                title: "Autism Assessment",
                text: "Qualified ADOS-2 Assessor — offering structured, evidence-based autism diagnostic assessments to help families understand their child's needs and access the right support.",
                accent: "from-[#87b6a2] to-[#6ea591]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[12px] border border-[#e7dfd3] bg-white shadow-[0_8px_24px_rgba(79,64,49,0.045)]"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${item.accent}`} />
                <div className="px-6 py-7">
                  <h3 className="font-serif text-[24px] leading-tight text-[#203a6b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#4a5361]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#fcfaf7] border-t border-[#e7dfd3] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[28px] tracking-[-0.02em] text-[#203a6b] md:text-[36px]">
            Meet Priya
          </h2>
          <p className="mt-6 text-[17px] leading-8 text-[#4a5361]">
            Priya Silvarajan is a Clinical Manager and Speech and Language Therapist registered with the Health and Care Professions Council (HCPC) and a Certified Member of the Royal College of Speech & Language Therapists (CertMRCSLT). With advanced training in both Sensory Integration and autism assessment (ADOS-2), she brings a holistic, child-centred approach to every family she works with.
          </p>
          <p className="mt-5 text-[17px] leading-8 text-[#4a5361]">
            Priya trained at the University of Canterbury and has built her career supporting children with a wide range of communication and sensory needs — helping families not just understand their child's challenges, but feel truly equipped to support them.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Reg. HCPC", "CertMRCSLT", "ADOS-2 Assessor", "Advanced Sensory Integration Practitioner", "Clinical Manager"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#ddd7cf] bg-white px-4 py-1.5 text-[13px] text-[#5c6472]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f7f4ef] border-t border-[#e7dfd3] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[28px] tracking-[-0.02em] text-[#203a6b] md:text-[36px]">
            Get in touch
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-[#4a5361]">
            Not sure where to start? Reach out and Priya will help you understand whether an assessment or therapy programme is the right next step for your child.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:priya@askthetherapist.co.uk"
              className="rounded-[10px] bg-[#e79a3c] px-8 py-4 text-[17px] font-medium text-white shadow-[0_12px_24px_rgba(231,154,60,0.28)] transition-transform hover:-translate-y-[1px]"
            >
              Email us
            </a>
            <a
              href="https://wa.me/447386115523"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-[#25d366] px-8 py-4 text-[17px] font-medium text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)] transition-transform hover:-translate-y-[1px]"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
