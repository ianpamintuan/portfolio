export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Wellvana",
    year: 2023,
    description:
      "Wellvana is a value-based care enabler connecting the healthy outcomes of patients directly to healthier profitability for physicians.",
    url: "https://wellvana.com/",
  },
  {
    title: "Radancy EY - Adventure Awaits",
    year: 2023,
    description:
      "Radancy is an independent technology company that provides SaaS for recruitment and talent acquisition.",
    url: "https://eyadventureawaits.co.uk/",
  },
  {
    title: "Exclaimer",
    year: 2023,
    description:
      "Exclaimer is a UK-based company that provides support for email utilities and cloud computing technologies designed for adding disclaimers, branding, and regulatory compliance for corporate email via personalized email signatures",
    url: "https://exclaimer.com/",
  },
  {
    title: "Lighthouse",
    year: 2023,
    description:
      "Lighthouse is the leading commercial platform for the travel & hospitality industry",
    url: "https://www.mylighthouse.com/",
  },
  {
    title: "Colophon Foundry",
    year: 2022,
    description:
      "Colophon is a human-centric agency for typography, with its offices and headquarters in Islington, London.",
    url: "https://www.colophon-foundry.org/",
  },
  {
    title: "BetaF!sh",
    year: 2022,
    description:
      "BettaF!sh is a manufacturing company that focuses on developing plant-based tuna alternatives. BettaF!sh was founded in 2020 and was headquartered in Berlin, Deutschland.",
    url: "https://bettafish.co/",
  },
];
