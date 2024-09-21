export const projects: Project[] = [
  {
    name: "Skyhook",
    shortDescription: "skyhook-description-short",
    description: "skyhook-description",
    mainImage: "/skyhook/skyhook1.png",
    otherImages: ["/skyhook/skyhook2.png", "/skyhook/skyhook3.png"],
    techstack: ["Angular", "Express.js", "SQL", "Node.js", "Next.js"],
    role: "skyhook-role",
    published: "2021",
    link: "https://github.com/Braulo/skyhook",
  },
  {
    name: "Multisig-Wallet",
    shortDescription: "multisig-wallet-description-short",
    description: "multisig-wallet-description",
    mainImage: "/multisig-wallet/multisig3.png",
    otherImages: ["/multisig-wallet/multisig1.png", "/multisig-wallet/multisig7.png"],
    techstack: ["Next.js", "React", "Hardhat", "Ethereum"],
    role: "multisig-wallet-role",
    published: "2022",
    link: "https://github.com/Braulo/multisignature-wallet",
  },
  {
    name: "Token-Maker",
    shortDescription: "token-maker-description-short",
    description: "token-maker-description",
    mainImage: "/tokenmaker/tokenmaker1.png",
    otherImages: ["/tokenmaker/tokenmaker1.png", "/tokenmaker/tokenmaker2.png"],
    techstack: ["Angular", "TruffleJS", "Ethereum", "NFT"],
    role: "token-maker-role",
    published: "2023",
    link: "https://github.com/Braulo/token-maker",
  },
  {
    name: "Battle Royale Stickers",
    description: "sticker-description",
    shortDescription: "sticker-description-short",
    mainImage: "/sticker/sticker3.png",
    otherImages: ["/sticker/sticker1.png", "/sticker/sticker2.png"],
    techstack: ["Java", "Android"],
    role: "sticker-role",
    published: "2021",
    defunct: "2021",
    link: "https://apkpure.com/battle-royale-stickers/com.cetapp.sticker.battleroyale",
    bigImage: true,
  },
  {
    name: "Fortnite Chest Opener",
    shortDescription: "fortnite-description-short",
    description: "fortnite-description",
    mainImage: "/fortnitechestopener/fortnitechestopener4.png",
    otherImages: [
      "/fortnitechestopener/fortnitechestopener1.png",
      "/fortnitechestopener/fortnitechestopener2.png",
    ],
    techstack: ["Ionic", "ExpressJS", "Node.js", "MongoDB"],
    role: "fortnite-role",
    published: "2020",
    defunct: "2021",
    link: "https://apkpure.com/battle-royale-chest-opener/com.cetapp.opener.battleroyal.chest",
    bigImage: true,
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
  link?: string;
  bigImage?: boolean;
};
