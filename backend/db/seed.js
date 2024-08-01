import dotenv from "dotenv";
import dbService from "./mongo.js";

dotenv.config();

await dbService.initializeDb();
const db = await dbService.getDb();

const seedProductsDb = async () => {
  const seedProducts = [
    {
      name: "Trigo, Centeio e Malte ",
      description:
        "Pão de mistura de trigo e centeio, com um toque de malte de cevada torrado.",
      imageUrl: "https://mygleba.com/images/products/se7vom-malte01.jpg",
      price: 2.5,
      category: "padaria",
      sub_category: "pao_grande",
    },
    {
      name: "Trigo Barbela",
      description:
        "Pão de acidez intensa, miolo húmido/cremoso e côdea caramelizada.",
      imageUrl:
        "https://mygleba.com/images/products/j2jff9-Barbela%20Grande%2002.jpg",
      price: 4.95,
      category: "padaria",
      sub_category: "pao_grande",
    },
    {
      name: "Trigo do Alentejo",
      description:
        "Pão de acidez suave, miolo leve e côdea caramelizada quanto baste.",
      imageUrl:
        "https://mygleba.com/images/products/pdewms-Alentejano%20grande%2001.jpg",
      price: 4.95,
      category: "padaria",
      sub_category: "pao_grande",
    },
    {
      name: "Broa de Milho",
      description:
        "Miolo compacto, húmido, ligeiramente adocicado, pouca acidez, côdea dura, grossa e crocante.",
      imageUrl:
        "https://mygleba.com/images/products/qe1kyl-Broa%20Milho%2001.jpg",
      price: 7.95,
      category: "padaria",
      sub_category: "pao_grande",
    },
    {
      name: "Pão de Água",
      description:
        "Miolo compacto, húmido, ligeiramente adocicado, pouca acidez, côdea dura, grossa e crocante.",
      imageUrl:
        "https://mygleba.com/images/products/qe1kyl-Broa%20Milho%2001.jpg",
      price: 7.95,
      category: "padaria",
      sub_category: "pao_grande",
    },
  ];

  try {
    // CLEAR DB:
    console.log("\nClearing DB...");
    await db.collection("products").deleteMany();
    console.log("DB clean!\n");

    // SEED DB:
    console.log("Seeding DB...");
    await db.collection("products").insertMany(seedProducts);
    console.log("DB seeded!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

await seedProductsDb();
