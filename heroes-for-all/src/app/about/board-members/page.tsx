import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui-brand/container";
import { PageHeader } from "@/components/ui-brand/page-header";
import { SectionHeading } from "@/components/ui-brand/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui-brand/reveal-stagger";

export const metadata: Metadata = {
  title: "Board of Advisers",
  description:
    "Meet the Board of Advisers and International Advisers supporting Heroes For All.",
};

type Adviser = {
  name: string;
  role: string;
  image: string;
};

const boardAdvisers: Adviser[] = [
  {
    name: "'In our Memory' Rokia Afzal Rahman",
    role: "Ex President, BFWE",
    image: "/images/board-members/Rokia-Afzal-Rahman.jpg",
  },
  {
    name: "Monira Rahman",
    role: "Founder, Innovation for Wellbeing",
    image: "/images/board-members/Monira-Rahman.jpg",
  },
  {
    name: "Parveen Mahmud",
    role: "Chairperson, Under Privileged Children's Educational Program (UCEP)",
    image: "/images/board-members/Parveen-Mahmud.jpg",
  },
  {
    name: "Shahla Kabir",
    role: "Architect",
    image: "/images/board-members/Shahla-Kabir.jpg",
  },
  {
    name: "Md Nazrul Islam (SBP, SPP, NDU, AFWC, PSC, G)",
    role: "Major General (Retired)",
    image: "/images/board-members/Major-General-Nazrul.jpg",
  },
  {
    name: "Omar Farook",
    role: "Regional Policy Specialist, World Food Programme",
    image: "/images/board-members/Omar-Farook.jpg",
  },
  {
    name: "Salma Adil",
    role: "CFO & ED, Top Of Mind (BD)",
    image: "/images/board-members/Salma-Adil.jpg",
  },
  {
    name: "Barrister Shukla Sarwat Siraj",
    role: "Barrister",
    image: "/images/board-members/Shukla-Sarwat-Siraj.jpg",
  },
  {
    name: "Tina Jabeen",
    role: "Senior Government Policy Advisor",
    image: "/images/board-members/Tina-Jabeen.jpg",
  },
  {
    name: "Muntasir Bhuiyan",
    role: "COO, Market Access Providers Ltd",
    image: "/images/board-members/Muntasir-Bhuiyan.jpg",
  },
  {
    name: "M. Farhanul Enam",
    role: "CEO & Founder, STEERWEB",
    image: "/images/board-members/Farhanul-Enam.jpg",
  },
  {
    name: "Mohammed Aminul Islam",
    role: "Creative Director, Pink Creative Ltd",
    image: "/images/board-members/Mohammed-Aminul-Islam.jpg",
  },
  {
    name: "Tajrina Mannan",
    role: "Founder, Merrill & Forbes",
    image: "/images/board-members/Tajrina-Mannan.jpg",
  },
  {
    name: "Ahmed Shabbir Naihan",
    role: "Country Manager (First Aid Centre of Sweden)",
    image: "/images/board-members/Ahmed-Shabbir-Naihan.jpg",
  },
  {
    name: "Kazi Khurrum Ahmed",
    role: "Chairman, EMX Limited",
    image: "/images/board-members/Kazi-Khurrum-Ahmed.jpg",
  },
  {
    name: "Azmeri Haque Badhon",
    role: "Media Personality and Activist",
    image: "/images/board-members/Azmeri-Haque-Badhon.jpg",
  },
  {
    name: "Sainjida Awal",
    role: "DMD, Prime Group of Industries",
    image: "/images/board-members/Sainjida-Awal.jpg",
  },
  {
    name: "Asma ul (Sylvia) Roxana",
    role: "Board of Director in HFA",
    image: "/images/board-members/Asma-ul-Sylvia-Roxana.jpg",
  },
];

const internationalAdvisers: Adviser[] = [
  {
    name: "Priya Bannarjee, PhD",
    role: "Professor, Health Science, SUNY Brockport",
    image: "/images/board-members/Dr.-Priya-Bannarjee.jpg",
  },
  {
    name: "Coach Jim Johnson",
    role: "Speaker, New York",
    image: "/images/board-members/Coach-Jim-Johnson.jpg",
  },
  {
    name: "Ivana Bozicevic",
    role: "Founder at Big-hearted Leaders, Leadership Coach, Facilitator and Speaker",
    image: "/images/board-members/Ivana-Bozicevic.jpg",
  },
  {
    name: "Linda Caldwell",
    role: "Ph.D Faculty Affiliate",
    image: "/images/board-members/Linda-Caldwell.jpg",
  },
  {
    name: "Subrina Farah",
    role: "Statistician, Dana-Farber Cancer Institute/Harvard Medical School",
    image: "/images/board-members/Subrina-Farah.jpg",
  },
  {
    name: "Ehsan Haque",
    role: "Associate Professor of Computer Science, University of Rochester",
    image: "/images/board-members/Ehsan-Haque.jpg",
  },
  {
    name: "Salehin Khan",
    role: "United Nations Economic Commission for Europe",
    image: "/images/board-members/Salehin-Khan.jpg",
  },
];

function AdviserGrid({ advisers }: { advisers: Adviser[] }) {
  return (
    <StaggerGroup
      className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      staggerChildren={0.06}
      as="ul"
    >
      {advisers.map((adviser) => (
        <StaggerItem
          key={adviser.name}
          as="li"
          className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="relative aspect-[4/3] bg-secondary">
            <Image
              src={adviser.image}
              alt={adviser.name}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="font-heading text-lg font-semibold leading-snug text-primary">
              {adviser.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {adviser.role}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export default function BoardMembersPage() {
  return (
    <>
      <PageHeader
        variant="primary"
        eyebrow="About Us"
        title="Board of Advisers."
        description="Meet the Board of Advisers and International Advisers listed by Heroes For All."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/our-story" },
          { label: "Board Members" },
        ]}
      />

      <section className="section-spacing">
        <Container size="wide">
          <Reveal>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The profiles below include the names and professional roles published
              on the organization&apos;s Board Members page. The source page does not
              include longer biographies.
            </p>
            <a
              href="https://heroesforall.org/board-members/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4 hover:text-accent"
            >
              View the source page
            </a>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <SectionHeading
                eyebrow="Advisers"
                title="Board of Advisers."
                description="Advisers and professionals listed by Heroes For All."
              />
            </Reveal>
            <AdviserGrid advisers={boardAdvisers} />
          </div>

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="International network"
                title="International Advisers."
                description="International advisers listed by Heroes For All."
              />
            </Reveal>
            <AdviserGrid advisers={internationalAdvisers} />
          </div>
        </Container>
      </section>
    </>
  );
}
