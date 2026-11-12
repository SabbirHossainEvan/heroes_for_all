import type { Partner } from "@/data/content";

const partnerLogoSources: Record<string, string> = {
  "BRAC Bank": "/images/partners/cropped/brac-bank.png",
  "Qatar Airways": "/images/partners/cropped/qatar-airways.png",
  "City Bank": "/images/partners/cropped/city-bank.png",
  "Islam Group": "/images/partners/cropped/islam-group.png",
  "Triple Apparels Limited": "/images/partners/cropped/triple-apparels.png",
  "Plummy Fashions Limited": "/images/partners/cropped/plummy-fashions.png",
  "Lakeshore Hotels": "/images/partners/cropped/galaxy.png",
  "Star Youth": "/images/partners/cropped/star-youth.png",
  "The Daily Star": "/images/partners/cropped/daily-star.png",
  "Assistance for Blind Children (ABC)": "/images/partners/cropped/abc.png",
  "Camp Abilities USA": "/images/partners/cropped/camp-abilities.png",
  "North South University": "/images/partners/cropped/north-south-university.png",
  "College at Brockport, SUNY": "/images/partners/cropped/brockport.png",
  "Penn State University": "/images/partners/cropped/penn-state.png",
  GlobalGiving: "/images/partners/cropped/globalgiving.png",
};

export function getPartnerLogo(partner: Partner) {
  return partnerLogoSources[partner.name] ?? partner.logo;
}
