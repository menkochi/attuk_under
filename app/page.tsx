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
              Ask the Therapistttt
            </span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#fcfaf7]">
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(90deg,rgba(239,212,174,0.82),rgba(244,240,234,0.62),rgba(180,212,205,0.9))]" />
        <div className="absolute inset-x-0 bottom-4 h-24 bg-[linear-gradient(90deg,rgba(228,195,146,0.36),rgba(255,255,255,0.14),rgba(126,181,164,0.42))]" />
        <div className="absolute left-0 bottom-0 h-36 w-[34%] rounded-tr-[120px] bg-[rgba(240,222,201,0.38)]" />
        <div className="absolute right-0 bottom-0 h-40 w-[37%] rounded-tl-[140px] bg-[rgba(192,224,214,0.38)]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-16 text-center md:px-20 md:pb-28 md:pt-24">

          <h1 className="mt-8 max-w-4xl font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-[#203a6b] md:text-[72px]">
            A new home for speech therapy support is on the way
          </h1>

          <p className="mt-7 max-w-2xl text-[18px] leading-8 text-[#5c6472] md:text-[20px] md:leading-9">
            We’re building a calmmmmmmm, elegant space for families to access expert speech therapy,
            guidance, and resources. Please check back soon.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:priya@askthetherapist.co.uk"
              className="rounded-[10px] bg-[#e79a3c] px-8 py-4 text-[17px] font-medium text-white shadow-[0_12px_24px_rgba(231,154,60,0.28)] transition-transform hover:-translate-y-[1px]"
            >
              Contact us
            </a>
          </div>

          <p className="mt-6 text-sm text-[#7a828f]">
            Expert speech therapy for children and families.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ef] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {[
            {
              title: "Speech & Language",
              text: "Support tailored to each child’s communication needs.",
              accent: "from-[#7db6d6] to-[#6d9fc3]",
            },
            {
              title: "Parent Guidance",
              text: "Practical advice and support for families between sessions.",
              accent: "from-[#e8b04e] to-[#e59d34]",
            },
            {
              title: "Progress Focused",
              text: "A thoughtful approach built around clear goals and steady progress.",
              accent: "from-[#87b6a2] to-[#6ea591]",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[12px] border border-[#e7dfd3] bg-white shadow-[0_8px_24px_rgba(79,64,49,0.045)]"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${item.accent}`} />
              <div className="px-6 py-7">
                <h2 className="font-serif text-[24px] leading-tight text-[#203a6b]">
                  {item.title}
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-[#4a5361]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
