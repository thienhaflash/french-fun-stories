
export interface StoryLine {
  id: number;
  text: string;
  translation: string;
  audio?: {
    startTime: number;
    endTime: number;
  };
}

export interface Story {
  id: number;
  title: string;
  titleTranslation: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  audioFile: string;
  estimatedTime: number; // in minutes
  vocabulary: {
    word: string;
    translation: string;
    pronunciation?: string;
  }[];
  content: StoryLine[];
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Le Chat et La Souris",
    titleTranslation: "The Cat and The Mouse",
    description: "A simple tale about a clever mouse and a hungry cat.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    audioFile: "/stories/story1/audio.mp3", // This will be a placeholder until real audio files are added
    estimatedTime: 3,
    vocabulary: [
      { word: "chat", translation: "cat", pronunciation: "sha" },
      { word: "souris", translation: "mouse", pronunciation: "soo-ree" },
      { word: "maison", translation: "house", pronunciation: "may-zon" },
      { word: "petit", translation: "small", pronunciation: "puh-tee" }
    ],
    content: [
      { id: 1, text: "Il était une fois un petit chat gris.", translation: "Once upon a time there was a little gray cat.", audio: { startTime: 0, endTime: 4 } },
      { id: 2, text: "Le chat habitait dans une jolie maison.", translation: "The cat lived in a pretty house.", audio: { startTime: 4, endTime: 8 } },
      { id: 3, text: "Chaque jour, le chat cherchait une souris.", translation: "Every day, the cat looked for a mouse.", audio: { startTime: 8, endTime: 12 } },
      { id: 4, text: "La souris était très intelligente.", translation: "The mouse was very smart.", audio: { startTime: 12, endTime: 16 } },
      { id: 5, text: "Elle se cachait toujours du chat.", translation: "She always hid from the cat.", audio: { startTime: 16, endTime: 20 } },
      { id: 6, text: "Un jour, le chat a trouvé la souris dans la cuisine.", translation: "One day, the cat found the mouse in the kitchen.", audio: { startTime: 20, endTime: 25 } },
      { id: 7, text: "La souris a couru très vite.", translation: "The mouse ran very fast.", audio: { startTime: 25, endTime: 29 } },
      { id: 8, text: "Elle est sortie par un petit trou.", translation: "She went out through a small hole.", audio: { startTime: 29, endTime: 33 } },
      { id: 9, text: "Le chat ne pouvait pas suivre la souris.", translation: "The cat could not follow the mouse.", audio: { startTime: 33, endTime: 37 } },
      { id: 10, text: "Il était trop grand pour le trou.", translation: "He was too big for the hole.", audio: { startTime: 37, endTime: 41 } },
      { id: 11, text: "Le chat était triste mais il a appris une leçon.", translation: "The cat was sad but he learned a lesson.", audio: { startTime: 41, endTime: 46 } },
      { id: 12, text: "Parfois, être petit a des avantages.", translation: "Sometimes, being small has advantages.", audio: { startTime: 46, endTime: 50 } }
    ]
  },
  {
    id: 2,
    title: "Le Croissant Magique",
    titleTranslation: "The Magic Croissant",
    description: "Discover the story of a special croissant that grants wishes.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    audioFile: "/stories/story2/audio.mp3",
    estimatedTime: 5,
    vocabulary: [
      { word: "croissant", translation: "croissant", pronunciation: "kwah-sahn" },
      { word: "boulangerie", translation: "bakery", pronunciation: "boo-lanj-ree" },
      { word: "magique", translation: "magic", pronunciation: "ma-jeek" },
      { word: "souhait", translation: "wish", pronunciation: "soo-ay" }
    ],
    content: [
      { id: 1, text: "Marie va à la boulangerie chaque matin.", translation: "Marie goes to the bakery every morning.", audio: { startTime: 0, endTime: 4 } },
      { id: 2, text: "Elle aime acheter un croissant frais.", translation: "She likes to buy a fresh croissant.", audio: { startTime: 4, endTime: 8 } },
      { id: 3, text: "Aujourd'hui, le boulanger lui donne un croissant spécial.", translation: "Today, the baker gives her a special croissant.", audio: { startTime: 8, endTime: 13 } },
      { id: 4, text: "\"Ce croissant est magique,\" dit le boulanger.", translation: "\"This croissant is magic,\" says the baker.", audio: { startTime: 13, endTime: 17 } },
      { id: 5, text: "Marie ne croit pas à la magie.", translation: "Marie doesn't believe in magic.", audio: { startTime: 17, endTime: 21 } },
      { id: 6, text: "Elle prend une bouchée du croissant.", translation: "She takes a bite of the croissant.", audio: { startTime: 21, endTime: 25 } },
      { id: 7, text: "Soudain, elle peut parler français parfaitement!", translation: "Suddenly, she can speak French perfectly!", audio: { startTime: 25, endTime: 30 } },
      { id: 8, text: "Marie est surprise et heureuse.", translation: "Marie is surprised and happy.", audio: { startTime: 30, endTime: 34 } },
      { id: 9, text: "Elle retourne à la boulangerie pour remercier le boulanger.", translation: "She returns to the bakery to thank the baker.", audio: { startTime: 34, endTime: 39 } },
      { id: 10, text: "\"Merci pour le croissant magique!\" dit-elle en français.", translation: "\"Thank you for the magic croissant!\" she says in French.", audio: { startTime: 39, endTime: 44 } },
      { id: 11, text: "Le boulanger sourit. \"La magie est dans l'apprentissage,\" dit-il.", translation: "The baker smiles. \"The magic is in learning,\" he says.", audio: { startTime: 44, endTime: 50 } },
      { id: 12, text: "Maintenant, Marie achète un croissant magique chaque jour.", translation: "Now, Marie buys a magic croissant every day.", audio: { startTime: 50, endTime: 55 } }
    ]
  },
  {
    id: 3,
    title: "Le Chien au Parc",
    titleTranslation: "The Dog at the Park",
    description: "Follow the adventures of a playful dog at the park.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    audioFile: "/stories/story3/audio.mp3",
    estimatedTime: 4,
    vocabulary: [
      { word: "chien", translation: "dog", pronunciation: "shee-en" },
      { word: "parc", translation: "park", pronunciation: "park" },
      { word: "jouer", translation: "to play", pronunciation: "zjoo-ay" },
      { word: "balle", translation: "ball", pronunciation: "bal" }
    ],
    content: [
      { id: 1, text: "Max est un chien très énergique.", translation: "Max is a very energetic dog.", audio: { startTime: 0, endTime: 4 } },
      { id: 2, text: "Son propriétaire l'emmène au parc tous les jours.", translation: "His owner takes him to the park every day.", audio: { startTime: 4, endTime: 9 } },
      { id: 3, text: "Au parc, Max aime courir et jouer.", translation: "At the park, Max likes to run and play.", audio: { startTime: 9, endTime: 13 } },
      { id: 4, text: "Sa chose préférée est de chercher la balle.", translation: "His favorite thing is to fetch the ball.", audio: { startTime: 13, endTime: 18 } },
      { id: 5, text: "Aujourd'hui, il y a beaucoup de chiens au parc.", translation: "Today, there are many dogs at the park.", audio: { startTime: 18, endTime: 23 } },
      { id: 6, text: "Max veut jouer avec tous les chiens.", translation: "Max wants to play with all the dogs.", audio: { startTime: 23, endTime: 27 } },
      { id: 7, text: "Il court d'un chien à l'autre.", translation: "He runs from one dog to another.", audio: { startTime: 27, endTime: 31 } },
      { id: 8, text: "Soudain, il voit une grande flaque d'eau.", translation: "Suddenly, he sees a big puddle of water.", audio: { startTime: 31, endTime: 36 } },
      { id: 9, text: "Max saute dans la flaque et se mouille complètement.", translation: "Max jumps in the puddle and gets completely wet.", audio: { startTime: 36, endTime: 41 } },
      { id: 10, text: "Son propriétaire n'est pas content.", translation: "His owner is not happy.", audio: { startTime: 41, endTime: 45 } },
      { id: 11, text: "Il est temps de rentrer à la maison et de prendre un bain.", translation: "It's time to go home and take a bath.", audio: { startTime: 45, endTime: 50 } },
      { id: 12, text: "Malgré tout, c'était une journée parfaite pour Max.", translation: "Despite everything, it was a perfect day for Max.", audio: { startTime: 50, endTime: 55 } }
    ]
  }
];
