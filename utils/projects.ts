export const projects: Project[] = [
  {
    name: "Multisig wallet",
    shortDescription: "Another Multisig wallet just like the rest",
    description: "This was asdfadsf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["adsf", "adsfad"],
  },
  {
    name: "Multisig wallet2",
    shortDescription: "This was asdfadsf",
    description: "This was asdfadsf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["adsf", "adsfad"],
  },
  {
    name: "Multisig wallet3",
    shortDescription: "This was asdfadsf",
    description: "This was asdfadsf",
    mainImage: "/multisig-wallet/multisig1.png",
    otherImages: ["adsf", "adsfad"],
  },
];

type Project = {
  name: string;
  shortDescription: string;
  description: string;
  mainImage: string;
  otherImages: string[];
};
