export const projects: Project[] = [
  {
    name: "Multisig-Wallet",
    shortDescription: "Description short Another Multisig wallet just like the rest",
    description: "Description long sfasdfasdfdsaf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["/multisig-wallet/multisig3.png", "/multisig-wallet/multisig7.png"],
    techstack: ["angular", "dings"],
    role: "role asfdfads",
    published: "2023",
    defunct: "2022",
  },
  {
    name: "Multisig wallet2",
    shortDescription: "This was asdfadsf",
    description: "This was asdfadsf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["/multisig-wallet/multisig3.png", "/multisig-wallet/multisig7.png"],
    techstack: ["angular", "dings"],
    role: "role asfdfads",
    published: "2023",
    defunct: "2022",
  },
  {
    name: "Multisig wallet3",
    shortDescription: "This was asdfadsf",
    description: "This was asdfadsf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["/multisig-wallet/multisig3.png", "/multisig-wallet/multisig7.png"],
    techstack: ["angular", "dings"],
    role: "role asfdfads",
    published: "2023",
    defunct: "2022",
  },
];

export type Project = {
  name: string;
  shortDescription: string;
  description: string;
  techstack: string[];
  mainImage: string;
  otherImages: string[];
  role: string;
  published?: string;
  defunct?: string;
};
