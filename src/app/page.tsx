import Image from "next/image";
import { UnitSlideshow } from "@/components/UnitSlideshow";

const unitCPhotos = [
  { src: "/kitchen-unit.png", caption: "Kitchen", width: 1536, height: 2048 },
  { src: "/kitchen-unit-c.png", caption: "Kitchen (alternate view)", width: 1536, height: 2048 },
  { src: "/beds-unit-c.png", caption: "Sleeping area", width: 4030, height: 2333 },
  { src: "/dining-room-unit-c.png", caption: "Dining room", width: 1536, height: 2048 },
  { src: "/living-room-dining-unit-c.png", caption: "Living & dining", width: 2048, height: 1536 },
  { src: "/living-room-unit-c.png", caption: "Living room", width: 2048, height: 1536 },
] as const;

const unitDPhotos = [
  { src: "/kitchen-unit-d.png", caption: "Kitchen", width: 1536, height: 2048 },
  { src: "/bathroom-sink-unit-d.png", caption: "Bathroom", width: 1536, height: 2048 },
  { src: "/bedroom-2-bed-unit-d.png", caption: "Bedroom (two beds)", width: 1920, height: 1440 },
  { src: "/bedroom-unit-d.png", caption: "Bedroom", width: 1536, height: 2048 },
  { src: "/living-room-couch-unit-d.png", caption: "Living room", width: 2048, height: 1536 },
  { src: "/living-room-tv-stairs-unit-d.png", caption: "Living room & stairs", width: 2048, height: 1536 },
] as const;

export default function Home() {
  return (
    <main id="top" className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
      {/* Hero Image only (no background) */}
      <section>
        <Image
          className="hero-image mx-auto"
          src="/rooted-in-tradition-transparent-logo.png"
          alt="Rooted In Tradition"
          width={1200}
          height={700}
          priority
        />
      </section>

      {/* Mission Statement */}
      <section id="mission" className="mt-8 sm:mt-10 md:mt-14">
        <div className="island p-6 sm:p-10 md:p-14">
          <h1 className="earth-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Rooted In Tradition</h1>
          <p className="earth-prose mt-5 text-base sm:text-lg leading-relaxed">
            Rooted In Tradition exists to fill the gap for our Native and Indigenous brothers and sisters, creating structured sober living that heals mind, body, and spirit. We provide housing, community, and clinical support — building families, resilience, and growth through traditional values and working with natural strengths.
          </p>
        </div>
      </section>

      {/* Vision / About Section */}
      <section id="vision" className="mt-10 sm:mt-14 md:mt-20">
        <div className="island p-6 sm:p-10 md:p-14">
          <h2 className="earth-heading text-2xl sm:text-3xl md:text-4xl font-semibold">Vision Statement</h2>
          <div className="earth-prose mt-5 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              At Rooted In Tradition, we see recovery as more than breaking chains — it’s about planting roots deep in heritage, faith, and community so lasting healing can grow. Our vision is to provide a safe and structured environment where Native and Indigenous people can find housing, stability, and long-term support for their journey. We honor tradition while embracing proven tools of recovery, believing that both culture and clinical care have a vital place in restoring wholeness.
            </p>
            <p>
              We envision homes filled with unity, accountability, and purpose — places where men and women not only get sober but learn to live free. Through team-building, spiritual guidance, and hands-on mentorship, we seek to rebuild trust, restore dignity, and cultivate leaders who can carry hope back into their families and communities.
            </p>
            <p>
              Our vision is holistic: mind, body, and spirit. We believe healing happens when counseling meets prayer, when community meets culture, and when people are given not just shelter, but belonging. Rooted In Tradition is more than a program — it is a movement toward revival, reconciliation, and freedom for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Residence gallery */}
      <section id="units" className="mt-10 sm:mt-14 md:mt-20">
        <div className="island p-6 sm:p-10 md:p-14">
          <h2 className="earth-heading text-2xl sm:text-3xl md:text-4xl font-semibold">Our homes</h2>
          <p className="earth-prose mt-4 text-base sm:text-lg leading-relaxed">
            A look inside our structured sober living spaces — warm, dignified environments where residents can heal and grow.
          </p>

          <h3 className="earth-heading mt-10 text-xl sm:text-2xl font-semibold">Unit C</h3>
          <UnitSlideshow photos={unitCPhotos} unitLabel="Unit C" priorityFirstSlide />

          <h3 className="earth-heading mt-12 text-xl sm:text-2xl font-semibold">Unit D</h3>
          <UnitSlideshow photos={unitDPhotos} unitLabel="Unit D" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-10 sm:mt-14 md:mt-20">
        <div className="island p-6 sm:p-10 md:p-14">
          <h2 className="earth-heading text-2xl sm:text-3xl md:text-4xl font-semibold">Contact</h2>
          <div className="earth-prose mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-wide text-[color:var(--earth-sand)]/80">Phone</p>
              <a className="island-btn mt-2 inline-flex" href="tel:+17148051963">(714)-805-1963</a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-[color:var(--earth-sand)]/80">Email</p>
              <a className="island-btn mt-2 inline-flex" href="mailto:nohealanic@magichousesetfree.com">nohealanic@magichousesetfree.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
