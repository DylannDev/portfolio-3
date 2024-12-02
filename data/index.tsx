import { FaGithub } from "react-icons/fa";
import { PiPaperPlaneTilt, PiTrendUp, PiUser } from "react-icons/pi";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

export const navItems = [
  {
    name: "À propos",
    link: "/#about",
    icon: <PiUser />,
  },
  {
    name: "Projets",
    link: "/#projects",
    icon: <PiTrendUp />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <PiPaperPlaneTilt />,
  },
  // { name: "Testimonials", link: "/#testimonials" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je privilégie la collaboration avec mes clients, en maintenant une communication ouverte",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] min-h-[20rem] xs:min-h-[24rem] sm:min-h-[32rem] md:min-h-[40rem]",
    imgClassName: "",
    titleClassName: "justify-end w-full",
    img: "/portrait-dylann-ai.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis basé entre Paris et Montpellier",
    description: "Ouvert à de nouvelles collaborations",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[10rem] lg:min-h-fit",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes Skills",
    description: "Je cherche toujours à améliorer",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[10rem] lg:min-h-fit",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "les nouvelles technologies et l'entrepreneuriat",
    description: "Développeur passionné par ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "En train de lancer ma propre agence web",
    description: "En ce moment :",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Découvrez mon parcours et mes compétences !",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pygmalion Conseil - Application",
    slug: "pygmalion-conseil-application",
    des: "Développement d'un simulateur de crédit d'impôt permettant aux entreprises de réaliser des simulations précises, d'automatiser l'envoi des récapitulatifs par email et de centraliser les données dans une interface unique.",
    img: "/pygmalion.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/wix.svg",
      "/mailchimp.svg",
    ],
    linkDemo: "https://www.pygmalionpulse.fr/simulateur-credit-d-impot",
    linkGithub: "pygmalion-simulator",
    isClientProject: true,
    paragraphs: [
      "Mon client, une entreprise spécialisée dans l'accompagnement des PME, souhaitait développer un outil en ligne pour simplifier et automatiser l'estimation des crédits d'impôt auxquels ses clients pourraient prétendre. Le but était de centraliser toutes les informations nécessaires, de permettre aux utilisateurs de soumettre leurs simulations en ligne, et de leur fournir des récapitulatifs précis par email.",
      "J'ai conçu et développé une application web interactive permettant aux utilisateurs d'entrer les informations de leur entreprise et de simuler les crédits d'impôt auxquels ils sont éligibles en temps réel. L'application intègre une interface intuitive pour la sélection des crédits d'impôt et la saisie des données nécessaires.",
      "La solution comprend également un système d'authentification via une API pour sauvegarder automatiquement les résultats dans un CRM (Wix) et assurer un suivi précis des simulations. J'ai mis en place l'envoi automatisé d'emails récapitulatifs via Mandrill, garantissant que les utilisateurs reçoivent un résumé clair de leurs estimations.",
      "J'ai utilisé React, Next.js et Zustand pour le développement frontend, combinés avec des API externes (Wix CRM et Mandrill) pour le backend, assurant ainsi une architecture évolutive et performante. Ce projet a permis à mon client de centraliser et automatiser efficacement le processus de simulation des crédits d'impôt pour ses prospects, tout en facilitant la gestion des données et le suivi des résultats.",
    ],
    features: [
      "Interface intuitive pour simuler des crédits d'impôt",
      "Gestion des formules spécifiques pour chaque crédit",
      "Envoi d'emails via l'API Mandrill",
      "Résultats de simulation envoyés automatiquement par mail",
      "Sauvegarde des données de simulation dans les contacts Wix",
    ],
  },
  {
    id: 2,
    title: "Amazonia Academy - Plateforme de Formation",
    slug: "amazonia-academy-landing-page",
    des: "Développement d’une landing page de vente pour une formation en trading, visant à maximiser les conversions et à refléter l’expertise de l’académie.",
    img: "/amazonia.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/calendly.svg",
      "/stripe.svg",
      "/mongo.svg",
    ],
    linkDemo: "https://amazonia-academy.vercel.app/",
    linkGithub: "amazonia-academy",
    isClientProject: true,
    paragraphs: [
      "Actuellement, je travaille sur le développement d'une landing page de vente pour une formation en trading, conçue pour maximiser les conversions et attirer de nouveaux clients. En parallèle, le client m'a demandé de développer une plateforme complète où ses clients pourront accéder à leurs vidéos de formation, suivre leur progression, et bénéficier d'un espace personnel sécurisé.",
      "Le projet suit une approche complète du cycle de développement, allant de la conception initiale à la mise en production. Je prends en charge le design en utilisant Figma, tout en m'occupant du copywriting pour maximiser l'impact marketing. Chaque section de la landing page est pensée pour optimiser l'engagement à l'aide de techniques de marketing digital.",
      "La landing page comprendra des fonctionnalités avancées telles que l'intégration de Stripe pour les paiements sécurisés et un système de réservation en ligne via l'API Calendly. Quant à la plateforme, elle inclura un système d'authentification pour sécuriser l'accès aux espaces personnels des utilisateurs et une gestion des vidéos permettant aux clients de suivre leur progression de manière intuitive.",
      "Pour les vidéos de formation, je prévois d'utiliser un service d'hébergement cloud tel qu'AWS, garantissant des performances optimales et une scalabilité adaptée aux besoins du projet. Cela permettra de centraliser et sécuriser les contenus tout en offrant une expérience utilisateur fluide et fiable.",
      "Le projet utilise Next.js et Tailwind CSS pour garantir performance et flexibilité, ainsi que des solutions externes telles que Stripe et Calendly pour les paiements et la planification. Ces technologies permettent de construire un écosystème robuste et intuitif, répondant aux besoins des utilisateurs et du client.",
    ],

    // paragraphs : [
    //   "Développement d'une landing page de vente pour une formation en trading Forex, conçue pour maximiser les conversions et attirer de nouveaux clients. L'objectif était de créer un site moderne, engageant et optimisé, intégrant des solutions de paiement et de réservation en ligne pour une expérience utilisateur fluide.",
    //   "Le projet a été réalisé en tenant compte de toutes les étapes du cycle de développement, de la conception initiale à la mise en ligne. J'ai pris en charge le design en utilisant Figma, tout en assurant le copywriting pour optimiser l'impact marketing. Chaque section de la page a été structurée pour maximiser l'engagement, en s’appuyant sur des techniques de marketing digital.",
    //   "La page comprend plusieurs fonctionnalités avancées, comme l'intégration de Stripe pour les paiements sécurisés, un système de réservation en ligne via l’API Calendly, ainsi qu'un blog intégré pour améliorer le référencement et attirer du trafic organique. J'ai également développé un espace admin pour gérer facilement les publications d'articles.",
    //   "Le projet a été réalisé avec Next.js et Tailwind CSS pour une performance et une flexibilité optimales. J’ai également intégré des solutions externes comme Stripe et Calendly pour les paiements et la planification, offrant ainsi une expérience utilisateur complète et fluide."
    // ],
    features: [
      "Design personnalisé et responsive",
      "Sections marketing optimisées pour le SEO",
      "Système de blog pour publier des articles",
      "Amélioration du SEO avec des articles",
      "Intégration de Stripe pour les paiements",
      "Paiement en ligne sécurisé",
      "Authentification sécurisée pour l’administration",
      "Réservation en ligne via l’API Calendly",
    ],
  },
  {
    id: 3,
    title: "Hippokom - Agence de Communication",
    slug: "hippokom-agence-de-communication",
    des: "Développement du site web d’une agence de communication, avec intégration d’un système de gestion de contenu pour permettre à la cliente de gérer son blog de manière autonome.",
    img: "/hippokom.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/calendly.svg",
      "/firebase.svg",
    ],
    linkDemo: "",
    linkGithub: "hippokom",
    isClientProject: true,
    paragraphs: [
      "Actuellement, je développe le site web d'une agence de communication digitale. Le projet inclut une refonte complète du design, incluant la création d'un nouveau logo, afin d'aligner l'image de marque avec les valeurs et les objectifs de l'agence. Ce site sera un outil clé pour l’agence, permettant de gérer le blog de manière autonome grâce à un back-office sur mesure.",
      "Le site intègrera des fonctionnalités avancées, notamment un système de gestion des articles du blog où l’administratrice pourra publier, modifier et supprimer des articles en toute simplicité. La sécurité et l’authentification sont gérées via Firebase, assurant un accès sécurisé au back-office.",
      "En plus de ces fonctionnalités, j’ajoute un système de prise de rendez-vous en ligne via l’intégration de Calendly, facilitant ainsi la gestion des rendez-vous clients directement depuis le site. Le projet est développé en Next.js et TypeScript, garantissant des performances optimales et un référencement optimisé pour les moteurs de recherche.",
    ],
    features: [
      "Design personnalisé et responsive",
      "Sections marketing optimisées pour le SEO",
      "Optimisation pour la conversion",
      "Back-office personnalisé pour gérer les articles",
      "Publier, modifier, supprimer des articles",
      "Authentification sécurisée pour l’administration",
      "Système de rendez-vous en ligne via Calendly",
    ],
  },
  {
    id: 4,
    title: "Oshun - Ecommerce",
    slug: "oshun-ecommerce",
    des: "Développement d'un site e-commerce avec Wix Headless pour une gestion flexible des produits et commandes.",
    img: "/oshun.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/wix.svg"],
    linkDemo: "https://oshun.vercel.app/",
    linkGithub: "oshun-jewelry",
    isClientProject: true,
    paragraphs: [
      "J'ai initialement développé un site e-commerce pour une cliente spécialisée dans la vente de bijoux artisanaux, afin de l'aider à promouvoir et vendre ses créations en ligne. Cependant, suite à la mise en pause du projet à la demande de la cliente, je l'ai transformé en projet personnel, en le réorientant vers la vente de vêtements et d'accessoires.",
      "Le projet inclut plusieurs fonctionnalités essentielles : ajout de produits au panier, gestion des commandes, et une page dédiée permettant aux utilisateurs de consulter l'historique de leurs commandes.",
      "Je me suis également chargé de la conception et de l'optimisation de l'interface utilisateur, en veillant à offrir une navigation intuitive et une expérience utilisateur fluide, adaptée aux besoins des clients potentiels du site.",
      "Le site a été développé en utilisant Next.js, TypeScript, et Tailwind CSS pour le frontend. Wix est utilisé pour la gestion du backend, couvrant les fonctionnalités liées aux produits, aux stocks, et aux commandes.",
    ],
    features: [
      "Catalogue de produits avec filtrage (taille, prix)",
      "Gestion dynamique du panier",
      "Système de paiement intégré",
      "Page de profil pour l’historique des commandes",
      "Suivi des statuts de commande",
      "Gestion des profils utilisateurs",
      "Mise à jour des informations personnelles",
      "Authentification sécurisée des utilisateurs",
    ],
  },
];

export const reviews = [
  {
    message:
      "Travailler avec Dylann a été une expérience transformative. Son sens du détail et son engagement envers l'excellence ont permis de créer un site exceptionnel qui reflète parfaitement notre marque.",
    name: "Sophie Martin",
    title: "Fondatrice de Lumina Créations",
    img: "/portrait-dylann-ai.jpg",
    stars: 5,
  },
  {
    message:
      "Dylann a su allier créativité et rigueur technique pour nous offrir une solution sur mesure. Sa capacité à comprendre nos besoins spécifiques a été un vrai plus pour ce projet.",
    name: "Lucas Dumont",
    title: "Responsable Marketing chez NovaCorp",
    img: "/portrait-dylann-ai.jpg",
    stars: 3,
  },
  {
    message:
      "Je recommande vivement Dylann. Non seulement il est réactif, mais il propose aussi des solutions innovantes qui ont permis de rendre notre plateforme plus performante et intuitive.",
    name: "Isabelle Tremblay",
    title: "CEO de Tremblay Conseil",
    img: "/portrait-dylann-ai.jpg",
    stars: 4,
  },
  {
    message:
      "Le professionnalisme de Dylann est remarquable. Il a su livrer dans les délais et a dépassé nos attentes avec un site esthétique et efficace. Un partenaire de choix pour tout projet web.",
    name: "Alexandre Leroy",
    title: "Directeur Technique chez SphereLab",
    img: "/portrait-dylann-ai.jpg",
    stars: 5,
  },
  {
    message:
      "Dylann est non seulement compétent, mais aussi passionné par son travail. Son approche axée sur les résultats a été déterminante pour le succès de notre refonte de site.",
    name: "Camille Moreau",
    title: "Directrice Artistique de Studio Velvet",
    img: "/portrait-dylann-ai.jpg",
    stars: 5,
  },
];

export const reviewsInputsConfig = [
  {
    type: "text",
    name: "name",
    placeholder: "Nom et Prénom",
  },
  {
    type: "text",
    name: "title",
    placeholder: "Titre (ex. Directeur de NovaCorp)",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "textarea",
    name: "message",
    placeholder: "Rédigez votre avis...",
    rows: 6,
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const processApproach = [
  {
    id: 1,
    title: "Découverte et Planification",
    desc: "Lors de cette phase initiale, nous prenons le temps de bien comprendre les besoins et les objectifs de votre projet. Cela inclut des réunions approfondies pour discuter de vos attentes, la définition des fonctionnalités clés, et l'établissement d'un plan d'action détaillé. Nous analysons également votre audience cible pour nous assurer que le produit final répondra à leurs besoins.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Conception et Développement",
    desc: "Avec une compréhension claire de vos besoins, nous passons à la conception et au développement. Cette phase inclut la création de maquettes pour visualiser le produit final. Une fois approuvés, nous procédons au développement en utilisant les meilleures pratiques et technologies modernes. Des revues régulières et des feedbacks sont intégrés pour garantir que le projet progresse selon vos attentes.", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Tests et Livraison",
    desc: "La phase finale consiste à tester minutieusement le produit pour s'assurer qu'il est fonctionnel, performant et sans bugs majeurs. Cela inclut des tests d'interface utilisateur et des vérifications de performance. Après avoir obtenu votre approbation finale, nous procédons à la livraison du produit. Vous bénéficiez également d'un support post-lancement pour résoudre toute question ou problème qui pourrait survenir.", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/DylannDev/",
  },
  {
    id: 2,
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/dylann-xavero-349765a4/",
  },
  {
    id: 3,
    icon: <RiTwitterXFill />,
    link: "https://x.com/DylannDev",
  },
];
