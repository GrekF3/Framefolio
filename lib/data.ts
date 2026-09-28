export type PortfolioCategory =
  | "weddings"
  | "portraits"
  | "fashion"
  | "family"
  | "commercial"
  | "travel"
  | "reportage"
  | "lifestyle";

export type Orientation = "portrait" | "landscape" | "square";
export type Tone = "light" | "dark";

export type PortfolioGalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation: Orientation;
  tone: Tone;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  description: string;
  cover: PortfolioGalleryImage & { priority?: boolean };
  gallery: PortfolioGalleryImage[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fashion-grafika",
    title: "Графика света",
    category: "fashion",
    location: "Студия Nordic, Краснодар",
    description:
      "Минималистичная фэшн-съёмка для локального бренда — графичные тени, чистые линии и акцент на фактуре тканей.",
    cover: {
      id: "fashion-grafika-cover",
      src: "https://images.unsplash.com/photo-1524504542391-127872011665?auto=format&fit=crop&w=1600&q=80",
      alt: "Модель в геометричном свете",
      orientation: "portrait",
      tone: "dark",
      priority: true,
    },
    gallery: [
      {
        id: "fashion-grafika-1",
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1600&q=80",
        alt: "Динамичный кадр с летящим платьем",
        orientation: "portrait",
        tone: "dark",
      },
      {
        id: "fashion-grafika-2",
        src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1600&q=80",
        alt: "Close-up силуэта в контровом свете",
        orientation: "landscape",
        tone: "dark",
      },
      {
        id: "fashion-grafika-3",
        src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80",
        alt: "Предметная стилизация аксессуаров",
        orientation: "square",
        tone: "light",
      },
    ],
  },
  {
    id: "wedding-morning",
    title: "Утро невесты",
    category: "weddings",
    location: "Botanic Hall, Краснодар",
    description:
      "Тихая камерная история: подготовка невесты, фактура платья и мягкий дневной свет на белых стенах.",
    cover: {
      id: "wedding-morning-cover",
      src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80",
      alt: "Невеста в утреннем свете",
      orientation: "portrait",
      tone: "dark",
    },
    gallery: [
      {
        id: "wedding-morning-1",
        src: "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1600&q=80",
        alt: "Прогулка пары в парке",
        orientation: "landscape",
        tone: "dark",
      },
      {
        id: "wedding-morning-2",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        alt: "Задержанный взгляд невесты",
        orientation: "landscape",
        tone: "light",
      },
      {
        id: "wedding-morning-3",
        src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
        alt: "Деталь с букетом и украшениями",
        orientation: "portrait",
        tone: "dark",
      },
    ],
  },
  {
    id: "portrait-studio",
    title: "Свет и бетон",
    category: "portraits",
    location: "Loft Studio, Краснодар",
    description:
      "Персональная серия для режиссёра: геометричный свет, индустриальная фактура пространства и уверенная пластика.",
    cover: {
      id: "portrait-studio-cover",
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Портрет в бетонном лофте",
      orientation: "portrait",
      tone: "dark",
    },
    gallery: [
      {
        id: "portrait-studio-1",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1600&q=80",
        alt: "Портрет на фоне окна",
        orientation: "portrait",
        tone: "light",
      },
      {
        id: "portrait-studio-2",
        src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
        alt: "Пластический кадр с движением",
        orientation: "square",
        tone: "dark",
      },
      {
        id: "portrait-studio-3",
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
        alt: "Деталь с руками и светом",
        orientation: "portrait",
        tone: "light",
      },
    ],
  },
  {
    id: "family-loft",
    title: "Семейный портрет",
    category: "family",
    location: "Warm Loft, Краснодар",
    description:
      "Тёплая история для молодой семьи: естественные эмоции, мягкий свет и уютное пространство лофта.",
    cover: {
      id: "family-loft-cover",
      src: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?auto=format&fit=crop&w=1600&q=80",
      alt: "Семья в уютной студии",
      orientation: "landscape",
      tone: "dark",
    },
    gallery: [
      {
        id: "family-loft-1",
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80",
        alt: "Игры с ребёнком на ковре",
        orientation: "landscape",
        tone: "light",
      },
      {
        id: "family-loft-2",
        src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80",
        alt: "Семья у окна",
        orientation: "landscape",
        tone: "dark",
      },
      {
        id: "family-loft-3",
        src: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&w=1600&q=80",
        alt: "Сборы и смех",
        orientation: "portrait",
        tone: "light",
      },
    ],
  },
  {
    id: "commercial-brand",
    title: "Каталог SS24",
    category: "commercial",
    location: "White Hall, Краснодар",
    description:
      "Имиджевые кадры для каталога ресторана: баланс между предметной съёмкой и атмосферой пространства.",
    cover: {
      id: "commercial-brand-cover",
      src: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
      alt: "Коммерческая съёмка в студии",
      orientation: "landscape",
      tone: "light",
    },
    gallery: [
      {
        id: "commercial-brand-1",
        src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1600&q=80",
        alt: "Лайфстайл кадр с напитком",
        orientation: "square",
        tone: "light",
      },
      {
        id: "commercial-brand-2",
        src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
        alt: "Детали сервировки",
        orientation: "portrait",
        tone: "dark",
      },
      {
        id: "commercial-brand-3",
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Интерьерное решение",
        orientation: "landscape",
        tone: "dark",
      },
    ],
  },
  {
    id: "lifestyle-coffee",
    title: "Утро с кофе",
    category: "lifestyle",
    location: "Краснодар",
    description:
      "Съёмка для городского медиа: рабочие ритуалы, натуральный свет и уютная ритмика рабочего утра.",
    cover: {
      id: "lifestyle-coffee-cover",
      src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1600&q=80",
      alt: "Кофе и ноутбук на столе",
      orientation: "portrait",
      tone: "light",
    },
    gallery: [
      {
        id: "lifestyle-coffee-1",
        src: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=1600&q=80",
        alt: "Работа в кафе",
        orientation: "landscape",
        tone: "light",
      },
      {
        id: "lifestyle-coffee-2",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        alt: "Прогулка по городу",
        orientation: "landscape",
        tone: "light",
      },
      {
        id: "lifestyle-coffee-3",
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
        alt: "Вид на утренний свет",
        orientation: "landscape",
        tone: "dark",
      },
    ],
  },
  {
    id: "reportage-forum",
    title: "Репортаж форума",
    category: "reportage",
    location: "Краснодар Экспо",
    description:
      "Деловой форум с живыми реакциями и динамикой выступлений — акцент на эмоциях и атмосферных деталях.",
    cover: {
      id: "reportage-forum-cover",
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      alt: "Доклад на бизнес-форуме",
      orientation: "landscape",
      tone: "dark",
    },
    gallery: [
      {
        id: "reportage-forum-1",
        src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80",
        alt: "Зал конференции",
        orientation: "landscape",
        tone: "dark",
      },
      {
        id: "reportage-forum-2",
        src: "https://images.unsplash.com/photo-1515165562835-c4c24b9bff93?auto=format&fit=crop&w=1600&q=80",
        alt: "Реакция аудитории",
        orientation: "landscape",
        tone: "light",
      },
      {
        id: "reportage-forum-3",
        src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&q=80",
        alt: "Деловая беседа",
        orientation: "square",
        tone: "dark",
      },
    ],
  },
];

export type ServicePackage = {
  name: string;
  description: string;
  price: string;
};

export const servicePackages: ServicePackage[] = [
  {
    name: "Студийная съёмка",
    description:
      "Индивидуальные или парные портреты, подбор студии, базовый свет, помощь в позировании. Отдаём 15 обработанных кадров и дубли в цветокоррекции.",
    price: "от 2 000 ₽ / час",
  },
  {
    name: "Контент для бренда",
    description:
      "Каталожные и имиджевые кадры для локальных марок. Разрабатываем референсы, снимаем лукбук, готовим материалы для маркетплейсов и соцсетей.",
    price: "от 6 000 ₽ / смену",
  },
  {
    name: "Семейный день",
    description:
      "Тёплая семейная история в студии или на частной локации. До 3-х часов, смена образов, подбор реквизита, 30 готовых кадров.",
    price: "от 8 000 ₽",
  },
  {
    name: "Свадебная история",
    description:
      "Love-story, утро невесты и камерная церемония в пределах Краснодара. Помогаем с графиком, светом и студией на случай непогоды.",
    price: "индивидуально",
  },
];

export const testimonials = [
  {
    name: "Екатерина Смирнова",
    role: "Основатель бренда Matinee, Краснодар",
    quote:
      "Нам важно было получить стильные кадры каталога без перелётов. Кирилл собрал команду в Краснодаре, подобрал студию и выдал идеальные материалы для запуска коллекции.",
  },
  {
    name: "Александр и Анна",
    role: "Семейная пара",
    quote:
      "Выбрали утреннюю студию и спокойную атмосферу. Получили природные портреты, в которых чувствуется наш характер и настроение дня.",
  },
  {
    name: "Мария Корнилова",
    role: "PR-директор локального ресторана",
    quote:
      "Съёмка прошла в один день: от предметки до портретов команды. Фото выглядели так, будто сняты в столице, и идеально легли в пресс-кит.",
  },
];

export const servicesForBooking = servicePackages.map((service) => service.name);
