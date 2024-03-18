import { prisma } from "@/server/db";

async function main() {
  const user = await prisma.usuario.findUnique({
    where: {
      id: "1",
    },
  });
  if (user) {
    console.log(user);
  } else {
    console.log("No user found");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
