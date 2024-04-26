import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Kyle",
      email: "divine@gmail.com",
      age: 27,
      isAdmin: false,
      role: "BASIC",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      email: true,
      userPreference: {
        select: {
          emailUpdates: true
        }
      }
    }
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
