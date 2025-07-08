import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const benefits = await prisma.benefit.createMany({
    data: [
      { name: "Mengatasi Jerawat" },
      { name: "Mencerahkan Kulit" },
      { name: "Melembapkan Kulit" },
      { name: "Membersihkan Pori-Pori" },
      { name: "Menyegarkan Kulit" },
      { name: "Menghidrasi Kulit" },
      { name: "Anti Aging" },
      { name: "Oil Control" },
    ],
  });

  const brands = await prisma.brand.createMany({
    data: [
      { name: "Acnes" },
      { name: "Azarine" },
      { name: "Facetology" },
      { name: "Focallure" },
      { name: "Garnier" },
      { name: "Glad2Glow" },
      { name: "Hanasui" },
      { name: "Implora" },
      { name: "Kelly" },
      { name: "Kojiesan" },
      { name: "MS Glow" },
      { name: "Natur E" },
      { name: "OMG" },
      { name: "Pixy" },
      { name: "Purbasari" },
      { name: "SYB" },
      { name: "Scarlet" },
      { name: "Scora" },
      { name: "Skintific" },
      { name: "The Face" },
      { name: "The Originote" },
      { name: "Unilever" },
      { name: "Viva" },
      { name: "Vnat" },
      { name: "Wardah" },
      { name: "Xixiu" },
    ],
  });
  const category = await prisma.category.createMany({
    data: [
      { name: "Acne Treatment" },
      { name: "Astringent" },
      { name: "Clay Stick" },
      { name: "Cleanser" },
      { name: "Cream" },
      { name: "Day Cream" },
      { name: "Essence" },
      { name: "Face Mist" },
      { name: "Face Tonic" },
      { name: "Facial Wash" },
      { name: "Micellar Water" },
      { name: "Moisturizer" },
      { name: "Night Cream" },
      { name: "Serum" },
      { name: "Sheetmask" },
      { name: "Spot Treatment" },
      { name: "Sunscreen" },
      { name: "Toner" },
    ],
  });
  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
