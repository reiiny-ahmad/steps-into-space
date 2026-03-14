import { siteContentEn } from "@/lib/site-content-en";

export const siteContentFr = {
  ...siteContentEn,
  languageName: "Francais",
  preferences: {
    language: "Langue",
    theme: "Theme",
    light: "Clair",
    dark: "Sombre",
    backHome: "Retour a l'accueil",
  },
  brand: {
    lead: "Steps Into",
    accent: "Space",
    tagline: "Association marocaine a but non lucratif",
  },
  nav: {
    home: "Accueil",
    activities: "Activites",
    about: "A propos",
    calendar: "Calendrier",
    contact: "Contact",
    join: "Nous rejoindre",
  },
  hero: {
    titleLead: "Steps Into",
    titleAccent: "Space",
    subtitle:
      "Apprendre et diffuser l'astronomie a travers des experiences simples et inspirantes.",
    description:
      "Decouvrez les merveilles de l'univers grace a des ateliers, des observations du ciel et des programmes educatifs a travers le Maroc.",
    primaryAction: "Voir les activites",
    secondaryAction: "En savoir plus",
  },
  activities: {
    badge: "Ce que nous faisons",
    titleLead: "Nos",
    titleAccent: "Activites",
    description:
      "Des observations du ciel aux ateliers educatifs, nous rendons l'astronomie accessible et passionnante pour tous.",
    items: [
      {
        title: "Nuits d'observation",
        description:
          "Vivez des nuits inoubliables sous les etoiles avec des telescopes professionnels et observez planetes, nebuleuses et galaxies.",
        image: siteContentEn.activities.items[0].image,
      },
      {
        title: "Ateliers d'astronomie",
        description:
          "Des ateliers interactifs pour rendre les concepts d'astronomie clairs et accessibles, des debutants aux passionnes.",
        image: siteContentEn.activities.items[1].image,
      },
      {
        title: "Visites scolaires",
        description:
          "Nous emmenons l'univers dans les classes a travers le Maroc pour inspirer la prochaine generation.",
      },
      {
        title: "Astrophotographie",
        description:
          "Apprenez a capturer la beaute du ciel nocturne et partagez vos propres images cosmiques.",
      },
      {
        title: "Conferences publiques",
        description:
          "Des conferences gratuites sur des sujets fascinants, des trous noirs a la vie au-dela de la Terre.",
      },
      {
        title: "Sessions telescope",
        description:
          "Des sessions pratiques pour apprendre a installer, regler et utiliser un telescope en autonomie.",
      },
    ],
  },
  about: {
    badge: "Qui sommes-nous",
    titleLead: "A propos de",
    titleAccent: "notre association",
    description:
      "Steps Into Space est une association marocaine a but non lucratif dediee a rapprocher les merveilles de l'astronomie de tout le monde.",
    community: "Construire une communaute de passionnes du ciel",
    values: [
      {
        title: "Notre mission",
        description:
          "Rendre l'astronomie accessible au Maroc grace a des ressources gratuites, des experiences pratiques et des evenements communautaires.",
      },
      {
        title: "Notre vision",
        description:
          "Un Maroc ou chaque personne a l'occasion de lever les yeux vers les etoiles et de comprendre les merveilles de l'univers.",
      },
      {
        title: "Nos valeurs",
        description:
          "Inclusion, education, curiosite et communaute. Nous croyons que le ciel appartient a tout le monde.",
      },
    ],
    teamTitleLead: "Rencontrez notre",
    teamTitleAccent: "equipe",
    teamDescription:
      "Des personnes passionnees, unies par l'amour du cosmos et la mission de le partager avec tous.",
    teamMembers: [
      { name: "Ahmed El Fassi", role: "President", initials: "AE" },
      { name: "Sara Bennani", role: "Vice-presidente", initials: "SB" },
      { name: "Youssef Amrani", role: "Tresorier", initials: "YA" },
      {
        name: "Fatima Zahra Idrissi",
        role: "Responsable communication",
        initials: "FZ",
      },
      { name: "Omar Tazi", role: "Coordinateur des evenements", initials: "OT" },
      { name: "Khadija Moussaoui", role: "Responsable education", initials: "KM" },
    ],
  },
  calendar: {
    badge: "Evenements a venir",
    titleLead: "Calendrier des",
    titleAccent: "evenements",
    description:
      "Planifiez vos prochaines sorties. Voici quelques evenements et activites educatives a venir.",
    events: [
      {
        date: "15 mars 2026",
        day: "15",
        month: "MAR",
        title: "Nuit d'observation du printemps",
        time: "20h00 - 23h00",
        location: "Montagnes de l'Atlas, Oukaimeden",
        description:
          "Une nuit magique d'observation des etoiles dans l'Atlas avec des telescopes professionnels.",
        category: "Observation",
        tone: "violet",
      },
      {
        date: "22 mars 2026",
        day: "22",
        month: "MAR",
        title: "Introduction a l'astrophotographie",
        time: "15h00 - 18h00",
        location: "Centre communautaire de Marrakech",
        description:
          "Apprenez les bases pour photographier le ciel nocturne avec votre appareil.",
        category: "Atelier",
        tone: "amber",
      },
      {
        date: "5 avril 2026",
        day: "05",
        month: "AVR",
        title: "Le systeme solaire pour les enfants",
        time: "10h00 - 12h00",
        location: "Musee des sciences de Rabat",
        description:
          "Une session interactive pour les enfants de 6 a 12 ans afin de decouvrir les planetes.",
        category: "Education",
        tone: "sky",
      },
      {
        date: "12 avril 2026",
        day: "12",
        month: "AVR",
        title: "Atelier de construction de telescope",
        time: "14h00 - 17h00",
        location: "Casablanca Tech Hub",
        description:
          "Construisez un telescope simple a partir de zero et comprenez les principes optiques.",
        category: "Atelier",
        tone: "amber",
      },
      {
        date: "22 avril 2026",
        day: "22",
        month: "AVR",
        title: "Conference astronomie et Jour de la Terre",
        time: "18h00 - 20h00",
        location: "En ligne",
        description:
          "Une conference speciale sur la facon dont l'astronomie nous aide a comprendre et proteger notre planete.",
        category: "Conference",
        tone: "emerald",
      },
      {
        date: "3 mai 2026",
        day: "03",
        month: "MAI",
        title: "Observation du ciel profond",
        time: "21h00 - 01h00",
        location: "Desert de Merzouga",
        description:
          "Profitez d'un des ciels les plus sombres du Maroc pour une session inoubliable d'observation du ciel profond.",
        category: "Observation",
        tone: "violet",
      },
    ],
  },
  contact: {
    badge: "Entrer en contact",
    titleLead: "Contactez",
    titleAccent: "nous",
    description:
      "Une question, une idee de partenariat ou une demande d'evenement ? Ecrivez-nous et votre message arrivera directement par email.",
    locationValue: "Maroc",
    infoTitles: {
      email: "Email",
      location: "Localisation",
      instagram: "Instagram",
      follow: "Suivre et echanger",
    },
    infoDescription:
      "Rejoignez notre communaute via Instagram, les evenements et les contacts directs.",
    note:
      "Que vous soyez passionne d'astronomie, ecole ou futur benevole, nous serons ravis d'echanger avec vous et de continuer a faire grandir l'education spatiale ensemble.",
    form: {
      name: "Votre nom",
      email: "Votre email",
      subject: "Sujet",
      message: "Message",
      namePlaceholder: "Ahmed El Fassi",
      emailPlaceholder: "ahmed@example.com",
      subjectPlaceholder: "Je souhaite collaborer avec l'association",
      messagePlaceholder:
        "Parlez-nous de votre demande, de votre evenement ou de votre question...",
      sending: "Envoi en cours...",
      submit: "Envoyer le message",
    },
    messages: {
      success: "Message envoye avec succes a Steps Into Space.",
      error: "Impossible d'envoyer votre message pour le moment.",
    },
  },
  footer: {
    description:
      "Une association marocaine a but non lucratif dediee a l'enseignement et a la diffusion de l'astronomie a travers des experiences accessibles.",
    quickLinksTitle: "Liens rapides",
    activitiesTitle: "Activites",
    contactTitle: "Contact",
    activities: [
      "Nuits d'observation",
      "Ateliers d'astronomie",
      "Visites scolaires",
      "Astrophotographie",
      "Conferences publiques",
    ],
    copyright:
      "Copyright 2026 Steps Into Space Association. Tous droits reserves.",
    tagline: "Concu pour l'amour de l'astronomie",
  },
  join: {
    badge: "Rejoindre l'association",
    title: "Un nouveau parcours vers l'astronomie, l'apprentissage et la communaute",
    description:
      "Postulez pour rejoindre Steps Into Space. Chaque inscription est recue par email sous forme de dossier structure et facile a consulter.",
    cards: [
      {
        title: "Dossier de candidature lisible",
        description:
          "Chaque envoi cree une piece jointe claire afin que l'equipe puisse etudier rapidement chaque inscription.",
      },
      {
        title: "Pour etudiants et benevoles",
        description:
          "Partagez vos interets, votre niveau d'etude et votre motivation afin de vous orienter vers les activites les plus pertinentes.",
      },
    ],
    formTitle: "Formulaire d'inscription",
    formDescription:
      "Renseignez vos informations et nous les recevrons directement sur l'email de l'association.",
    fields: {
      lastName: "Nom",
      firstName: "Prenom",
      age: "Age",
      studyLevel: "Niveau d'etude",
      cin: "CIN",
      massarCode: "Code Massar",
      city: "Ville",
      phone: "Telephone",
      address: "Adresse",
      email: "Email",
      interests: "Interets",
      motivation: "Motivation ou informations supplementaires",
      lastNamePlaceholder: "El Fassi",
      firstNamePlaceholder: "Ahmed",
      agePlaceholder: "17",
      studyLevelPlaceholder: "Lycee, universite, etc.",
      cinPlaceholder: "Optionnel si disponible",
      massarCodePlaceholder: "Obligatoire s'il n'y a pas de CIN",
      cityPlaceholder: "Casablanca",
      phonePlaceholder: "+212 ...",
      addressPlaceholder: "Quartier, rue ou adresse complete",
      emailPlaceholder: "Optionnel mais utile pour le suivi",
      interestsPlaceholder:
        "Astronomie, robotique, astrophotographie, benevolat...",
      motivationPlaceholder:
        "Expliquez pourquoi vous souhaitez rejoindre Steps Into Space",
    },
    sending: "Envoi de l'inscription...",
    submit: "Envoyer l'inscription",
    messages: {
      missingId: "Merci de fournir soit une CIN, soit un code Massar.",
      success:
        "Inscription envoyee avec succes. Le dossier a ete transmis par email.",
      error: "Impossible d'envoyer votre inscription pour le moment.",
    },
  },
} satisfies typeof siteContentEn;
