import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     age:  20,
  //     name: "Sally2",
  //     email: "sally2@gmail.com",
  //     role: "ADMIN",
  //     isAdmin: true
  //   }
  // })
  // const user = await prisma.user.update({
  //   where: {
  //     email: "therealkayks@gmail.com"
  //   },
  //   data: {
  //     userPreference: {
  //       disconnect: true
  //     }
  //   }
  // })
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Kayks"
  //   }
  // })
  const user = await prisma.user.deleteMany()
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
