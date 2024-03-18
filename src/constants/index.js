import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Serviços",
    url: "#services",
  },
  {
    id: "1",
    title: "Preços",
    url: "#pricing",
  },
  
  {
    id: "4",
    title: "",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Entrar em contato",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Somos solução perfeita para negócios que buscam trabalhar de forma mais inteligente.";

export const collabContent = [
  {
    id: "0",
    title: "Integração de ponta a ponta",
    text: "Esqueça todo o processo de captura de leads, conversão e suporte. Com nós você se preocupa apenas com o seu negócio. Simples!",
  },
  {
    id: "1",
    title: "Automação da operação",
  },
  {
    id: "2",
    title: "Suas mídias sociais trabalhando para você",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "E-book Método GSC",
    description: "Saiba como os pilares fundamentais do marketing e gestão estratégica alinhados à IA podem impactar imediatamente o seu negócio.",
    price: "0",
    features: [
      "Gestão de Leads e Marketing Digital",
      "Integração com Vendas e Jornada de Compra",
      "SEO e Marketing de conteúdo",
    ],
  },
  {
    id: "1",
    title: "Brainstorm",
    description: "Reunião diagnóstico para traçar a estratégia da sua empresa.",
    price: "97",
    features: [
      "Entender os gargalos atuais do seu negócio e como prevení-los",
      "Executar as melhores práticas de mercado para seu nicho",
      "Aliar algoritmos de Inteligência Artificial para melhorar sua eficiência",
    ],
  },
  {
    id: "2",
    title: "Partnership",
    description: "Captura de leads e conversão otimizada através de funil de vendas, marketing digital e social media, tudo automatizado através de agentes de IA.",
    price: null,
    features: [
      "Definir um plano de ação estratégico",
      "Aumentar a presença da sua marca no mundo digital",
      "Automatizar atendimento, economiza custos, aumenta vendas, personaliza interações e oferece vantagem competitiva"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Gestão de tráfego pago com IA",
    text: "Otimização de anúncios pagos aliados a Inteligência Artificial para aumentar visibilidade e vendas rapidamente.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Social Media",
    text: "Aumenta a presença da marca, envolve o público e direciona tráfego através de criação e gestão de conteúdo estratégico.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Chatbot",
    text: "Automatiza atendimento, gera leads, economiza custos e melhora engajamento do cliente.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
