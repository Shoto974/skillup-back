const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Modèle
const Course = mongoose.model("Course", courseSchema);

// Jeu de données
const data = [
  {
    id: 1,
    title: "Cours de mathématiques personnalisés",
    description:
      "Un accompagnement sur mesure du collège au lycée pour progresser en algèbre, géométrie et préparation au bac.",
  },
  {
    id: 2,
    title: "Soutien scolaire en français",
    description:
      "Aide à la compréhension des textes, amélioration de la grammaire et préparation aux examens écrits et oraux.",
  },
  {
    id: 3,
    title: "Initiation à l’anglais",
    description:
      "Cours adaptés aux débutants pour acquérir les bases de la langue anglaise à l’écrit comme à l’oral.",
  },
  {
    id: 4,
    title: "Préparation au TOEFL et IELTS",
    description:
      "Un entraînement intensif avec exercices corrigés pour maximiser vos scores aux tests d’anglais internationaux.",
  },
  {
    id: 5,
    title: "Cours de physique-chimie",
    description:
      "Des explications claires et des expériences pratiques pour maîtriser les notions essentielles.",
  },
  {
    id: 6,
    title: "Aide aux devoirs",
    description:
      "Un suivi hebdomadaire pour accompagner les élèves dans toutes les matières et développer leur autonomie.",
  },
  {
    id: 7,
    title: "Ateliers méthodologie",
    description:
      "Apprendre à organiser son travail, gérer son temps et optimiser ses révisions pour gagner en efficacité.",
  },
  {
    id: 8,
    title: "Cours de programmation Python",
    description:
      "Découverte de la logique de programmation et réalisation de projets simples pour débutants.",
  },
  {
    id: 9,
    title: "Préparation concours grandes écoles",
    description:
      "Des cours intensifs pour réussir les épreuves écrites et orales des concours d’entrée.",
  },
  {
    id: 10,
    title: "Cours de guitare débutant",
    description:
      "Apprentissage des accords, rythmiques et premières chansons pour se lancer avec plaisir.",
  },
];

// Insérer les données
Course.insertMany(data)
  .then(() => {
    console.log("✅ Données insérées avec succès !");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Erreur d'insertion :", err);
    mongoose.connection.close();
  });

module.exports = mongoose.model("Course", courseSchema);
