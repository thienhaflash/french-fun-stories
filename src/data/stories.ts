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
  },
  {
    id: 4,
    title: "La Fête d'Anniversaire",
    titleTranslation: "The Birthday Party",
    description: "Join Marie as she celebrates her birthday with friends and family.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    audioFile: "/stories/story4/audio.mp3",
    estimatedTime: 4,
    vocabulary: [
      { word: "fête", translation: "party", pronunciation: "fet" },
      { word: "anniversaire", translation: "birthday", pronunciation: "an-ee-ver-sair" },
      { word: "cadeau", translation: "gift", pronunciation: "ka-do" },
      { word: "gâteau", translation: "cake", pronunciation: "ga-to" },
      { word: "amis", translation: "friends", pronunciation: "ah-mee" }
    ],
    content: [
      { id: 1, text: "Aujourd'hui, c'est l'anniversaire de Marie.", translation: "Today is Marie's birthday.", audio: { startTime: 0, endTime: 4 } },
      { id: 2, text: "Elle a treize ans maintenant.", translation: "She is thirteen years old now.", audio: { startTime: 4, endTime: 8 } },
      { id: 3, text: "Sa mère prépare un grand gâteau au chocolat.", translation: "Her mother is preparing a big chocolate cake.", audio: { startTime: 8, endTime: 13 } },
      { id: 4, text: "Son père décore la maison avec des ballons.", translation: "Her father decorates the house with balloons.", audio: { startTime: 13, endTime: 18 } },
      { id: 5, text: "Les amis de Marie arrivent à deux heures.", translation: "Marie's friends arrive at two o'clock.", audio: { startTime: 18, endTime: 22 } },
      { id: 6, text: "Ils apportent beaucoup de cadeaux.", translation: "They bring many gifts.", audio: { startTime: 22, endTime: 26 } },
      { id: 7, text: "Marie ouvre les cadeaux avec excitation.", translation: "Marie opens the gifts with excitement.", audio: { startTime: 26, endTime: 30 } },
      { id: 8, text: "Elle reçoit un livre, un jeu, et une belle robe.", translation: "She receives a book, a game, and a beautiful dress.", audio: { startTime: 30, endTime: 35 } },
      { id: 9, text: "Tout le monde chante 'Joyeux Anniversaire'.", translation: "Everyone sings 'Happy Birthday'.", audio: { startTime: 35, endTime: 39 } },
      { id: 10, text: "Marie souffle les bougies sur son gâteau.", translation: "Marie blows out the candles on her cake.", audio: { startTime: 39, endTime: 43 } },
      { id: 11, text: "La fête continue avec des jeux amusants.", translation: "The party continues with fun games.", audio: { startTime: 43, endTime: 47 } },
      { id: 12, text: "C'est le meilleur anniversaire de Marie.", translation: "It's Marie's best birthday.", audio: { startTime: 47, endTime: 51 } }
    ]
  },
  {
    id: 5,
    title: "Au Marché",
    titleTranslation: "At the Market",
    description: "Follow Pierre as he shops at a traditional French market.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
    audioFile: "/stories/story5/audio.mp3",
    estimatedTime: 4,
    vocabulary: [
      { word: "marché", translation: "market", pronunciation: "mar-shay" },
      { word: "fruits", translation: "fruits", pronunciation: "frew" },
      { word: "légumes", translation: "vegetables", pronunciation: "lay-gume" },
      { word: "acheter", translation: "to buy", pronunciation: "ah-shuh-tay" },
      { word: "vendeur", translation: "seller", pronunciation: "von-dur" }
    ],
    content: [
      { id: 1, text: "Pierre va au marché tous les samedis.", translation: "Pierre goes to the market every Saturday.", audio: { startTime: 0, endTime: 4 } },
      { id: 2, text: "Le marché est grand et coloré.", translation: "The market is big and colorful.", audio: { startTime: 4, endTime: 8 } },
      { id: 3, text: "Il y a beaucoup de stands de fruits et légumes.", translation: "There are many fruit and vegetable stands.", audio: { startTime: 8, endTime: 13 } },
      { id: 4, text: "Pierre achète des pommes rouges.", translation: "Pierre buys red apples.", audio: { startTime: 13, endTime: 17 } },
      { id: 5, text: "Les pommes sont fraîches et juteuses.", translation: "The apples are fresh and juicy.", audio: { startTime: 17, endTime: 21 } },
      { id: 6, text: "Il achète aussi des carottes et des tomates.", translation: "He also buys carrots and tomatoes.", audio: { startTime: 21, endTime: 26 } },
      { id: 7, text: "Le vendeur est très sympathique.", translation: "The seller is very friendly.", audio: { startTime: 26, endTime: 30 } },
      { id: 8, text: "Pierre parle avec lui en français.", translation: "Pierre speaks with him in French.", audio: { startTime: 30, endTime: 34 } },
      { id: 9, text: "Après, il va à la boulangerie du marché.", translation: "After, he goes to the market bakery.", audio: { startTime: 34, endTime: 39 } },
      { id: 10, text: "Il achète une baguette fraîche.", translation: "He buys a fresh baguette.", audio: { startTime: 39, endTime: 43 } },
      { id: 11, text: "Pierre est content de ses achats.", translation: "Pierre is happy with his purchases.", audio: { startTime: 43, endTime: 47 } },
      { id: 12, text: "Il rentre chez lui pour préparer le déjeuner.", translation: "He goes home to prepare lunch.", audio: { startTime: 47, endTime: 52 } }
    ]
  },
  {
    id: 6,
    title: "À l'École",
    titleTranslation: "At School",
    description: "Experience a day in the life of a French student.",
    level: "beginner",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    audioFile: "/stories/story6/audio.mp3",
    estimatedTime: 4,
    vocabulary: [
      { word: "école", translation: "school", pronunciation: "ay-kol" },
      { word: "professeur", translation: "teacher", pronunciation: "pro-fess-ur" },
      { word: "élève", translation: "student", pronunciation: "ay-lev" },
      { word: "classe", translation: "classroom", pronunciation: "klass" },
      { word: "apprendre", translation: "to learn", pronunciation: "ah-prahn-dr" }
    ],
    content: [
      { id: 1, text: "Sophie se réveille à sept heures du matin.", translation: "Sophie wakes up at seven o'clock in the morning.", audio: { startTime: 0, endTime: 5 } },
      { id: 2, text: "Elle prend son petit déjeuner rapidement.", translation: "She has her breakfast quickly.", audio: { startTime: 5, endTime: 9 } },
      { id: 3, text: "L'école commence à huit heures et demie.", translation: "School starts at eight thirty.", audio: { startTime: 9, endTime: 14 } },
      { id: 4, text: "Sa première classe est le français.", translation: "Her first class is French.", audio: { startTime: 14, endTime: 18 } },
      { id: 5, text: "Le professeur est Madame Dubois.", translation: "The teacher is Mrs. Dubois.", audio: { startTime: 18, endTime: 22 } },
      { id: 6, text: "Sophie aime beaucoup cette classe.", translation: "Sophie likes this class very much.", audio: { startTime: 22, endTime: 26 } },
      { id: 7, text: "Après, elle a un cours de mathématiques.", translation: "After, she has a math class.", audio: { startTime: 26, endTime: 31 } },
      { id: 8, text: "À midi, c'est l'heure du déjeuner.", translation: "At noon, it's lunchtime.", audio: { startTime: 31, endTime: 35 } },
      { id: 9, text: "Sophie mange avec ses amis à la cantine.", translation: "Sophie eats with her friends in the cafeteria.", audio: { startTime: 35, endTime: 40 } },
      { id: 10, text: "L'après-midi, ils ont sport.", translation: "In the afternoon, they have sports.", audio: { startTime: 40, endTime: 44 } },
      { id: 11, text: "Sophie joue au basketball avec sa classe.", translation: "Sophie plays basketball with her class.", audio: { startTime: 44, endTime: 49 } },
      { id: 12, text: "À quatre heures, l'école est finie pour aujourd'hui.", translation: "At four o'clock, school is finished for today.", audio: { startTime: 49, endTime: 55 } }
    ]
  },
  {
    id: 7,
    title: "Au Restaurant",
    titleTranslation: "At the Restaurant",
    description: "Join a French family as they dine at a traditional restaurant.",
    level: "intermediate",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    audioFile: "/stories/story7/audio.mp3",
    estimatedTime: 5,
    vocabulary: [
      { word: "restaurant", translation: "restaurant", pronunciation: "res-to-rahn" },
      { word: "menu", translation: "menu", pronunciation: "muh-noo" },
      { word: "commander", translation: "to order", pronunciation: "ko-mahn-day" },
      { word: "délicieux", translation: "delicious", pronunciation: "day-lee-see-uh" },
      { word: "addition", translation: "bill", pronunciation: "ad-dee-see-on" }
    ],
    content: [
      { id: 1, text: "La famille Dubois va au restaurant ce soir.", translation: "The Dubois family is going to the restaurant tonight.", audio: { startTime: 0, endTime: 5 } },
      { id: 2, text: "C'est un restaurant français traditionnel.", translation: "It's a traditional French restaurant.", audio: { startTime: 5, endTime: 9 } },
      { id: 3, text: "Le serveur les accueille avec un sourire.", translation: "The waiter welcomes them with a smile.", audio: { startTime: 9, endTime: 14 } },
      { id: 4, text: "Il leur donne les menus.", translation: "He gives them the menus.", audio: { startTime: 14, endTime: 18 } },
      { id: 5, text: "Monsieur Dubois commande une soupe à l'oignon.", translation: "Mr. Dubois orders an onion soup.", audio: { startTime: 18, endTime: 23 } },
      { id: 6, text: "Madame Dubois choisit une salade niçoise.", translation: "Mrs. Dubois chooses a Niçoise salad.", audio: { startTime: 23, endTime: 28 } },
      { id: 7, text: "Les enfants veulent des steak-frites.", translation: "The children want steak and fries.", audio: { startTime: 28, endTime: 32 } },
      { id: 8, text: "Ils boivent de l'eau et du vin rouge.", translation: "They drink water and red wine.", audio: { startTime: 32, endTime: 37 } },
      { id: 9, text: "La nourriture est délicieuse.", translation: "The food is delicious.", audio: { startTime: 37, endTime: 41 } },
      { id: 10, text: "Pour le dessert, ils partagent une tarte aux pommes.", translation: "For dessert, they share an apple pie.", audio: { startTime: 41, endTime: 47 } },
      { id: 11, text: "Monsieur Dubois demande l'addition.", translation: "Mr. Dubois asks for the bill.", audio: { startTime: 47, endTime: 51 } },
      { id: 12, text: "Ils laissent un bon pourboire au serveur.", translation: "They leave a good tip for the waiter.", audio: { startTime: 51, endTime: 56 } }
    ]
  }
];

// Function to load more stories from an external source (API or JSON file)
export const loadMoreStories = async (): Promise<Story[]> => {
  try {
    // In a real app, this would fetch from an API or JSON file
    // const response = await fetch('/data/more-stories.json');
    // const additionalStories = await response.json();
    // return [...stories, ...additionalStories];
    
    // For now, we'll just return the existing stories
    return stories;
  } catch (error) {
    console.error('Error loading additional stories:', error);
    return stories;
  }
};
