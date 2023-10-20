import { prisma } from "../src/server/db";

async function main() {
  // Simple query to test connection
  const user = await prisma.usuario.findUnique({
    where: {
      id: "1",
    },
  });
  console.log(user);
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
