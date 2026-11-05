import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(619) 220-0007";
const TEL = "tel:+16192200007";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Diko%20Auto%20Repair&query_place_id=ChIJfz5uBCWr3oARlgTQtJOSWMc";
const YELP = "https://www.yelp.com/biz/diko-smog-and-auto-repair-san-diego-2";
const FACEBOOK = "https://www.facebook.com/DikoAutoRepairAndElectric/";
const ADDRESS = "4009 Hicock St, San Diego, CA 92110";

const hours = [
  { d: "Monday – Friday", h: "8:30 a.m. – 6 p.m." },
  { d: "Saturday", h: "8:30 a.m. – 3:30 p.m." },
  { d: "Sunday", h: "Closed" },
];

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About Diko" },
  { href: "#area", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

const services = [
  { icon: "wrench", title: "Full-service auto repair", body: "A complete mechanic shop for foreign and domestic cars, from a simple oil change all the way to a full engine rebuild." },
  { icon: "cog", title: "Engine repair & rebuilds", body: "Rough running, stalling, warning lights or a dealer quote that made your stomach drop. Diko finds the real cause and fixes that, not everything around it." },
  { icon: "bolt", title: "Electrical repair", body: "Electrical faults and dashboard full of warning lights? We trace the problem properly, including the tricky ones other shops miss." },
  { icon: "disc", title: "Brake service", body: "Squeaks, grinding or a pedal that does not feel right. We inspect, explain what is worn, and give you a straight price." },
  { icon: "search", title: "Honest diagnostics", body: "A meticulous inspection before any work, so you pay for the repair your car actually needs." },
  { icon: "car", title: "Import & Range Rover repair", body: "We work on many makes, including Lexus, Toyota, Dodge, Hyundai and Range Rover. Where it makes sense, we can source a quality used part to save you money." },
];

const reviews = [
  { name: "Jason J.", job: "Breakdown while traveling", text: "I was in a hard place. My car broke down on travel, four days before I had to fly to another job across the country, and I wanted to get home to see my family for my son's birthday. Diko did not try to sell me anything. I cannot speak highly enough." },
  { name: "Justine S.", job: "General repair", text: "Diko was efficient, thorough and very kind. As a woman in my 20s, going to a mechanic can be intimidating, but he made the whole thing uncomplicated. I will 100% be going back." },
  { name: "Michael B.", job: "Multiple dashboard lights", text: "I had several dashboard lights come on. He went through everything, found the problem, and fixed it fast and accurately. I will be taking my vehicles here from now on." },
  { name: "David G.", job: "Emergency repair, family stranded", text: "We broke down hundreds of miles from home and the tow driver recommended Diko as a good, honest, reliable mechanic. He and the crew got us back on the road in no time." },
  { name: "Luciano R.", job: "Lexus, Toyota and Dodge", text: "An excellent, experienced mechanic, and honest above all else. He has fixed my Lexus, my Toyota and my Dodge. I highly recommend him." },
  { name: "Colin M.", job: "Repairs & diagnostics", text: "Diko is an amazing mechanic and treats all of his customers like family. If you need repairs or diagnostics, go to Diko." },
  { name: "Ian G.", job: "Auto repair", text: "Fair, honest and quality work. I could not ask more from the experience. Highly recommend." },
  { name: "Brenden F.", job: "Auto repair", text: "Fantastic service and very honest. Highly recommend!" },
];

const why = [
  { icon: "thumb", title: "Honest first", body: "Customers keep calling Diko one of the most honest mechanics they have met." },
  { icon: "tag", title: "Saves you real money", body: "Repairs often come in far under dealer quotes, with quality used parts when they make sense." },
  { icon: "calendar", title: "Open Saturdays", body: "Smog checks and repairs on Saturday mornings for people who work all week." },
  { icon: "user", title: "The owner does the work", body: "You talk to Diko, the mechanic who will actually work on your car." },
];

const steps = [
  { title: "Call or stop by", body: `Call ${PHONE} and describe what the car is doing, or come by for a smog check.` },
  { title: "Bring it in", body: "Drive it to 4009 Hicock St, or have the tow truck bring it here if it will not run." },
  { title: "Diagnosis and options", body: "Diko inspects it carefully, explains what is wrong, and gives you the price, including a used-part option when one makes sense." },
  { title: "Repair and pick up", body: "Once you say go, we fix it and call you when it is ready." },
];

const faqs = [
  { q: "Are you a state-certified smog check station?", a: "Yes. We are a state-certified smog check station, and we do smog inspections right alongside our repair work." },
  { q: "Are you open on Saturdays?", a: "Yes, Saturday 8:30 a.m. to 3:30 p.m. Weekdays we are open 8:30 a.m. to 6 p.m. We are closed Sunday." },
  { q: "Do you work on foreign cars?", a: "Yes. We work on foreign and domestic vehicles. Customers bring us everything from Toyotas and Lexus to Dodge, Hyundai and Range Rover." },
  { q: "Can you save me money over the dealer quote?", a: "Often, yes. One customer got an engine repair done here for about $500 after a dealer quoted $3,000, and Diko can source quality used parts when they make sense. Call with your quote and we will tell you honestly what we think." },
  { q: "My car broke down and I'm not from San Diego. Can you help?", a: `Call ${PHONE}. Tow drivers regularly recommend us to stranded drivers, and Diko has gone out of his way to get travelers back on the road.` },
  { q: "Where are you located?", a: "4009 Hicock St in the Midway District of San Diego, ZIP 92110." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Diko Auto Repair",
  alternateName: ["Diko Smog & Auto Repair", "Diko Auto Repair & Electric"],
  telephone: "+1-619-220-0007",
  address: { "@type": "PostalAddress", streetAddress: "4009 Hicock St", addressLocality: "San Diego", addressRegion: "CA", postalCode: "92110", addressCountry: "US" },
  areaServed: "Midway District, San Diego, CA",
  openingHours: ["Mo-Fr 08:30-18:00", "Sa 08:30-15:30"],
  founder: { "@type": "Person", name: "Diko" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "69" },
  sameAs: [MAPS, YELP, FACEBOOK],
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-dark text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> 4009 Hicock St, Midway District</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon–Fri 8:30–6 · Sat 8:30–3:30</span>
          <span className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4" /> State-certified smog check station</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Diko Auto Repair, home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta"><Icon name="wrench" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-head text-xl font-extrabold text-brand">Diko Auto Repair</span>
              <span className="block text-xs font-semibold text-muted">Smog Check &amp; Repair · San Diego</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.97rem] font-semibold lg:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="text-ink/75 hover:text-ink">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-head text-lg font-bold text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-brand-dark md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand ring-1 ring-line">
                <Icon name="user" className="h-4 w-4" /> Owner-mechanic Diko · Open Saturdays
              </p>
              <h1 className="text-[clamp(2.4rem,5.4vw,4rem)] text-brand">Auto Repair &amp; Smog Check in San Diego&apos;s Midway District</h1>
              <p className="lede mt-5 text-xl text-muted">
                Honest diagnosis, dealer-level repairs at a fraction of dealer prices, and state-certified smog checks, all from the mechanic who actually works on your car.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href="#services" className="btn btn-line text-lg">See our services</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem]">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <strong>4.8</strong> · 69 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>State-certified smog station</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Foreign &amp; domestic</span>
              </div>
            </div>

            <figure className="rounded-2xl bg-brand p-8 text-white shadow-[0_24px_50px_-28px_oklch(0.23_0.07_264/0.8)]">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-5 font-head text-[1.4rem] font-bold leading-snug">
                &ldquo;We thought it was a huge fuel pump repair. Diko found the real problem was just the fuel relay, and saved us hundreds of dollars.&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/20 pt-5 text-white/80">
                <span className="block font-bold text-white">Drew I.</span>
                Family broke down on a Sunday after a trip to Mexico · Google review
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-label="Why drivers trust Diko" className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {[
              { icon: "thumb", t: "4.8 on Google", s: "69 reviews" },
              { icon: "shield", t: "State-certified", s: "Smog check station" },
              { icon: "calendar", t: "Open Saturdays", s: "8:30 a.m. – 3:30 p.m." },
              { icon: "user", t: "Owner-mechanic", s: "Diko does the work" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="text-cta"><Icon name={x.icon} className="h-7 w-7" /></span>
                <span><span className="block font-bold">{x.t}</span><span className="block text-sm text-white/70">{x.s}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal max-w-2xl">
              <h2 className="text-3xl text-brand md:text-5xl">Smog checks and every kind of repair</h2>
              <p className="mt-4 text-muted">One shop for the smog certificate and whatever the car needs to pass it. Foreign or domestic, simple or complicated.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <article className="card reveal border-2 border-brand bg-brand-soft p-7 md:col-span-2 lg:col-span-1 lg:row-span-2">
                <span className="inline-flex rounded-full bg-cta px-3 py-1 text-sm font-bold text-brand-dark">Saturday availability</span>
                <span className="mt-5 grid h-12 w-12 place-items-center rounded-lg bg-brand text-white"><Icon name="shield" /></span>
                <h3 className="mt-4 text-2xl text-brand">Smog check &amp; testing</h3>
                <p className="mt-3 text-muted">State-certified smog inspections, handled quickly. Can&apos;t get away during the week? We are open Saturday mornings too. And if your car fails, the repair shop is right here, so you are not running between two businesses.</p>
                <a href={TEL} className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:underline">Call about a smog check <Icon name="arrow" className="h-4 w-4" /></a>
              </article>
              {services.map((s) => (
                <article key={s.title} className="card reveal p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-4 text-xl text-brand">{s.title}</h3>
                  <p className="mt-2 text-[1.02rem] text-muted">{s.body}</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-bold text-brand hover:underline">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl text-brand md:text-5xl">Rated 4.8 from 69 Google reviews</h2>
                <p className="mt-3 text-muted">Honest is the word customers use most. Here is what they say.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card reveal mb-5 break-inside-avoid p-6">
                  <Stars className="h-5 w-5" />
                  <blockquote className="mt-3 text-[1.04rem]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-bold text-white">{r.name[0]}</span>
                    <span><span className="block font-bold">{r.name}</span><span className="text-muted">{r.job} · Google</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <h2 className="text-3xl text-brand md:text-5xl">Meet Diko</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Diko owns the shop and does the work. He has built his reputation in the Midway District one car at a time, by being the mechanic people describe as the most honest they have ever met.</p>
                <p>His approach is simple: inspect carefully, find the actual problem, and fix that. Customers tell stories of $3,000 dealer quotes turning into $500 repairs, of a suspected fuel pump that turned out to be a relay, and of a Range Rover steering column lock solved with a quality used part for about a thousand dollars less than new.</p>
                <p>He will also come in on a Saturday when someone is in a bind. Tow drivers send stranded travelers his way for a reason.</p>
              </div>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> Call Diko</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title} className="reveal rounded-2xl bg-tint p-6">
                  <span className="text-brand"><Icon name={w.icon} className="h-8 w-8" /></span>
                  <h3 className="mt-3 text-lg text-brand">{w.title}</h3>
                  <p className="mt-1.5 text-[1rem] text-muted">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="reveal text-3xl text-brand md:text-5xl">How it works</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand font-head text-xl font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-xl text-brand">{s.title}</h3>
                  <p className="mt-2 text-[1.02rem] text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="reveal">
              <h2 className="text-3xl text-brand md:text-5xl">In the Midway District</h2>
              <p className="mt-4 text-muted">Serving San Diego&apos;s Midway District and the surrounding areas from our shop on Hicock Street.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Midway District", "San Diego"].map((a) => <li key={a} className="rounded-full bg-white px-4 py-2 font-semibold ring-1 ring-line">{a}</li>)}
              </ul>
              <dl className="mt-8 divide-y divide-line rounded-xl bg-white ring-1 ring-line">
                {hours.map((h) => (
                  <div key={h.d} className="flex justify-between px-5 py-3"><dt className="font-semibold">{h.d}</dt><dd className="text-muted">{h.h}</dd></div>
                ))}
              </dl>
              <p className="mt-6 flex items-start gap-3"><span className="mt-0.5 text-brand"><Icon name="pin" className="h-5 w-5" /></span>{ADDRESS}</p>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-6"><Icon name="route" className="h-5 w-5" /> Get directions</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe title="Map of Diko Auto Repair, 4009 Hicock St, San Diego" src="https://maps.google.com/maps?q=4009%20Hicock%20St%2C%20San%20Diego%2C%20CA%2092110&output=embed" className="h-[400px] w-full md:h-[480px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="reveal text-3xl text-brand md:text-5xl">Questions before you call</h2>
            <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold text-brand">
                    {f.q}
                    <span className="chev text-muted"><Icon name="chevron" className="h-5 w-5" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20">
            <div>
              <h2 className="text-4xl md:text-5xl">Get an honest answer. Call Diko.</h2>
              <p className="mt-3 text-lg text-white/80">{PHONE} · Mon–Fri 8:30–6 · Sat 8:30–3:30</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-lg">Directions</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark pb-28 text-white/80 md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-head text-2xl font-extrabold text-white">Diko Auto Repair</p>
            <p className="mt-1 text-sm">Diko Smog &amp; Auto Repair</p>
            <p className="mt-3 max-w-sm text-[0.98rem]">Full-service auto repair and state-certified smog check station in San Diego&apos;s Midway District.</p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><Icon name="facebook" className="h-4 w-4" /> Facebook</a>
              <a href={YELP} target="_blank" rel="noopener noreferrer" className="hover:text-white">Yelp</a>
            </div>
          </div>
          <div className="text-[0.98rem]">
            <p className="font-bold text-white">Visit or call</p>
            <p className="mt-3">{ADDRESS}</p>
            <a href={TEL} className="mt-2 block font-bold text-cta">{PHONE}</a>
            {hours.map((h) => <p key={h.d} className="mt-1 text-sm">{h.d}: {h.h}</p>)}
          </div>
          <div className="text-[0.98rem]">
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5">
              {["Smog check", "Auto repair", "Engine repair", "Electrical repair", "Brakes", "Diagnostics", "Import repair"].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pt-6 text-sm text-white/55">© {new Date().getFullYear()} Diko Auto Repair · San Diego, CA</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line"><Icon name="route" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
