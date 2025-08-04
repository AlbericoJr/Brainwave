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
    title: "Características",
    url: "#features",
  },
  {
    id: "1",
    title: "Preços",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Como usar",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Nova conta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Entrar",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Geração de fotos",
  "Melhoria de fotos",
  "Integração perfeita",
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
    title: "Reconhecimento de voz",
    text: "Permita que o chatbot entenda e responda aos comandos de voz, facilitando a interação dos usuários com o aplicativo sem usar as mãos.",
    date: "Maio 2025",
    status: "feito",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamificação",
    text: "Adicione elementos semelhantes aos de um jogo, como emblemas ou tabelas de classificação, para incentivar os usuários a interagir com o chatbot com mais frequência.",
    date: "Junho 2025",
    status: "em progresso",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalização do chatbot",
    text: "Permita que os usuários personalizem a aparência e o comportamento do chatbot, tornando-o mais envolvente e divertido de interagir.",
    date: "Maio 2025",
    status: "feito",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integração com APIs",
    text: "Permita que o chatbot acesse fontes de dados externas, como APIs de previsão do tempo ou APIs de notícias, para fornecer recomendações mais relevantes.",
    date: "Junho 2025",
    status: "em progresso",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Com automação inteligente e segurança avançada, é a solução ideal para equipes que querem trabalhar com mais agilidade e confiança.";

export const collabContent = [
  {
    id: "0",
    title: "Integração perfeita",
    text: collabText,
  },
  {
    id: "1",
    title: "Automação Inteligente",
  },
  {
    id: "2",
    title: "Segurança de alto nível",
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
    title: "Básico",
    description: "Chatbot de IA, recomendações personalizadas",
    price: "0",
    features: [
      "Interaja com um chatbot inteligente que responde às suas dúvidas com clareza.",
      "Receba sugestões personalizadas com base nas suas interações.",
      "Explore os recursos do app gratuitamente e sem limitações iniciais.",
    ],
  },
  {
    id: "1",
    title: "Prêmio",
    description: "Chatbot de IA avançado, suporte prioritário, painel de análise",
    price: "55.00",
    features: [
      "Acesse um chatbot avançado capaz de lidar com perguntas mais complexas.",
      "Monitore suas conversas e desempenho com um painel analítico dedicado.",
      "Conte com suporte prioritário para resolver qualquer problema rapidamente.",
    ],
  },
  {
    id: "2",
    title: "Empresa",
    description: "Chatbot de IA personalizado, análises avançadas, conta dedicada",
    price: null,
    features: [
      "Tenha um chatbot treinado e ajustado às necessidades específicas do seu negócio.",
      "Obtenha análises completas sobre o uso e comportamento dos usuários.",
      "Trabalhe com uma conta gerenciada, com atendimento exclusivo e soluções sob medida.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pergunte qualquer coisa",
    text: "Encontre respostas instantâneas para qualquer pergunta, sem precisar perder tempo pesquisando em várias fontes.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Melhore a cada dia",
    text: "Com tecnologia de linguagem natural, o Brainwave entende suas perguntas e fornece respostas precisas que ajudam você a evoluir continuamente.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Conecte-se em todos os lugares",
    text: "Acesse o Brainwave de onde estiver, em qualquer dispositivo, praticidade e inteligência na palma da sua mão.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Resposta rápida",
    text: "Obtenha respostas imediatas e confiáveis, agilizando sua rotina com a inteligência do Brainwave.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Explore novos horizontes",
    text: "Descubra insights e conteúdos valiosos com o apoio do Brainwave, expandindo seu conhecimento de forma contínua e dinâmica.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Personalize sua experiência",
    text: "Adapte o Brainwave às suas preferências e necessidades, criando interações mais naturais, eficientes e personalizadas.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
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