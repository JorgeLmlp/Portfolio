import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContext";

const translations = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT ME",
      skills: "SKILLS",
      contact: "CONTACT",
      resume: "MY CV",
    },
    theme: { light: "Switch to light mode", dark: "Switch to dark mode" },
    languageLabel: "Change language to Portuguese",
    home: {
      role: "BACK-END DEVELOPER · WEB & MOBILE",
      location: "BRAZIL",
      availability: "OPEN TO WORK, INTERNSHIPS & PROJECTS",
      introduction:
        "I design the systems behind digital products — reliable APIs, integrations and data flows connected to thoughtful web and mobile experiences.",
      aboutAction: "EXPLORE MY WORK",
      contactAction: "LET’S TALK",
      photoAlt: "Portrait of Jorge Moraes",
      portraitLabel: "JORGE MORAES",
      cardLabel: "Development profile",
      focus: "BACK-END . MOBILE . WEB",
      status: "OPEN TO OPPORTUNITIES",
    },
    about: {
      kicker: "01 / ABOUT",
      title: "WHO AM I?",
      lead: "I build reliable back-end systems and turn them into complete experiences across web, mobile and beyond.",
      chatName: "Jorge Moraes",
      chatRole: "Back-end Developer · Web & Mobile",
      online: "Online",
      visitor: "Visitor",
      now: "Now",
      questionOne: "What kind of software do you build?",
      answerOne:
        "My main focus is back-end development: APIs, business rules, integrations, databases and reliable server-side solutions. I also build the web and mobile experiences that connect people to those systems.",
      questionTwo: "What makes your work different?",
      answerTwo:
        "I combine strong technical foundations with creative problem-solving, adaptability and clear communication. I care about clean architecture, performance, maintainability and solutions that remain useful as they grow.",
      closing:
        "Always learning, always improving and ready for the next challenge.",
      typing: "Jorge is typing",
      channel: "SECURE CONVERSATION",
      conversations: "ABOUT ME / TOPICS",
      topics: [
        {
          title: "Back-end & APIs",
          preview: "Systems, data and integrations",
        },
        {
          title: "Web & Mobile",
          preview: "Complete digital experiences",
        },
        {
          title: "How I work",
          preview: "Architecture, quality and growth",
        },
      ],
      scrollHint: "SCROLL TO CONTINUE",
      today: "TODAY",
      delivered: "Delivered",
      messagePlaceholder: "Continue the conversation...",
    },
    skills: {
      kicker: "MY TOOLKIT",
      title: "SKILLS",
      description:
        "A back-end focused toolkit for building reliable APIs, data flows and complete web and mobile products.",
      categories: {
        web: "WEB",
        mobile: "MOBILE",
        ui: "UI",
        language: "LANGUAGE",
        frontend: "FRONT-END",
        tooling: "TOOLING",
        versioning: "VERSIONING",
        backend: "BACK-END",
        database: "DATABASE",
        dataAnalysis: "DATA ANALYSIS",
      },
    },
    footer: {
      eyebrow: "LET’S BUILD SOMETHING GREAT",
      title: "Have a role, internship or project in mind?",
      contact: "GET IN TOUCH",
      navigation: "NAVIGATION",
      social: "SOCIAL",
      rights: "Designed and developed by Jorge Moraes.",
      top: "BACK TO TOP",
    },
  },
  pt: {
    nav: {
      home: "INÍCIO",
      about: "SOBRE MIM",
      skills: "HABILIDADES",
      contact: "CONTATO",
      resume: "MEU CV",
    },
    theme: { light: "Ativar modo claro", dark: "Ativar modo escuro" },
    languageLabel: "Mudar idioma para inglês",
    home: {
      role: "DESENVOLVEDOR BACK-END · WEB & MOBILE",
      location: "BRASIL",
      availability: "ABERTO A TRABALHOS, ESTÁGIOS E PROJETOS",
      introduction:
        "Desenvolvo os sistemas por trás de produtos digitais — APIs confiáveis, integrações e fluxos de dados conectados a experiências web e mobile bem construídas.",
      aboutAction: "CONHEÇA MEU TRABALHO",
      contactAction: "VAMOS CONVERSAR",
      photoAlt: "Retrato de Jorge Moraes",
      portraitLabel: "JORGE MORAES",
      cardLabel: "Perfil de desenvolvimento",
      focus: "BACK-END . MOBILE . WEB",
      status: "ABERTO A OPORTUNIDADES",
    },
    about: {
      kicker: "01 / SOBRE",
      title: "QUEM SOU?",
      lead: "Desenvolvo sistemas back-end confiáveis e os transformo em experiências completas para web, mobile e outras áreas.",
      chatName: "Jorge Moraes",
      chatRole: "Desenvolvedor Back-end · Web & Mobile",
      online: "Online",
      visitor: "Visitante",
      now: "Agora",
      questionOne: "Que tipos de software você desenvolve?",
      answerOne:
        "Meu foco principal é o desenvolvimento back-end: APIs, regras de negócio, integrações, bancos de dados e soluções confiáveis no servidor. Também desenvolvo as experiências web e mobile que conectam as pessoas a esses sistemas.",
      questionTwo: "Qual é o seu diferencial?",
      answerTwo:
        "Combino fundamentos técnicos sólidos, resolução criativa de problemas, adaptabilidade e comunicação clara. Valorizo arquitetura limpa, performance, manutenção e soluções que continuam úteis conforme crescem.",
      closing:
        "Sempre aprendendo, sempre evoluindo e pronto para o próximo desafio.",
      typing: "Jorge está digitando",
      channel: "CONVERSA SEGURA",
      conversations: "SOBRE MIM / TÓPICOS",
      topics: [
        {
          title: "Back-end & APIs",
          preview: "Sistemas, dados e integrações",
        },
        {
          title: "Web & Mobile",
          preview: "Experiências digitais completas",
        },
        {
          title: "Como eu trabalho",
          preview: "Arquitetura, qualidade e evolução",
        },
      ],
      scrollHint: "ROLE PARA CONTINUAR",
      today: "HOJE",
      delivered: "Entregue",
      messagePlaceholder: "Continue a conversa...",
    },
    skills: {
      kicker: "MINHAS FERRAMENTAS",
      title: "SKILLS",
      description:
        "Ferramentas com foco em back-end para criar APIs confiáveis, fluxos de dados e produtos completos para web e mobile.",
      categories: {
        web: "WEB",
        mobile: "MOBILE",
        ui: "INTERFACE",
        language: "LINGUAGEM",
        frontend: "FRONT-END",
        tooling: "FERRAMENTAS",
        versioning: "VERSIONAMENTO",
        backend: "BACK-END",
        database: "BANCO DE DADOS",
        dataAnalysis: "ANÁLISE DE DADOS",
      },
    },
    footer: {
      eyebrow: "VAMOS CRIAR ALGO INCRÍVEL",
      title: "Tem uma vaga, estágio ou projeto em mente?",
      contact: "ENTRE EM CONTATO",
      navigation: "NAVEGAÇÃO",
      social: "SOCIAL",
      rights: "Design e desenvolvimento por Jorge Moraes.",
      top: "VOLTAR AO TOPO",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "en",
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      copy: translations[language],
      toggleLanguage: () =>
        setLanguage((current) => (current === "en" ? "pt" : "en")),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
