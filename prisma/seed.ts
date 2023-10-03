import { prisma } from "../src/server/db";

async function main() {
  const id = 1;
  const user = await prisma.usuario.findUnique({
    where: {
      id,
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
