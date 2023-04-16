import { IContent } from "../models/icontent";

export const CONTENTARRAY: IContent[] = [
    {
        id: 10,
        author: "Asaf Jha",
        description: "It is a dish from hyderabad, made with the use of basmati rice, spices and meat.",
        name: "Chicken biryani",
        type: "Non-Veg",
        imgSrc: "https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
      },
      {
        id: 11,
        author: "Kundan Lal Gujral",
        description: "A curry made from chicken with spiced tomatoes and butter.",
        name: "Butter Chicken",
        type: "Non-Veg"
      },
      {
        id: 12,
        author: "Sui Dynasty",
        description: "A dish of cooked rice that has been stir-fried in a wok.",
        name: "Fried Rice",
        type: "Veg",
        tags: [
          "Rice",
          "Vegetables"
        ]
      },
      {
        id: 13,
        author: "Alfredo di Leilo",
        description: "A creamy pan sauce made from butter and cheese.",
        name: "Alfredo Pasta",
        type: "Veg",
        imgSrc: "https://thedefineddish.com/wp-content/uploads/2020/05/2020-04-24-00.51.42.jpg"
      },
      {
        id: 14,
        author: "D. r. dale",
        description: "Onion soup is a type of vegetable soup with sliced onions as the main ingredient.",
        name: "Onion Soup",
        imgSrc: "https://www.budgetbytes.com/wp-content/uploads/2020/11/French-Onion-Soup-V1.jpg"
      },
      {
        id: 15,
        author: "Duck Confit & Fleur de Sel | Keith Reeves,",
        description: "Duck confit is a classic French preparation that produces silky, tender meat that can be preserved.",
        name: "Duck Confit",
        type: "Non-Veg",
        imgSrc: "https://www.seriouseats.com/thmb/LdVImuWAyuQY9pYuh2HUXpxsw48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200107-duck-confit-44-vicky-wasik-a9d310a1fcc3404190eb28853896762d.jpg"
      },
      {
        id: 16,
        author: "Abul-Fazl Beyhaqi",
        description: "A samosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas.",
        name: "Samosas",
        type: "Veg",
        imgSrc: "https://hips.hearstapps.com/hmg-prod/images/delish-091621-samosas-04-jg-1632847515.jpg?crop=0.888671875xw:1xh;center,top&resize=1200:*"
      }
];