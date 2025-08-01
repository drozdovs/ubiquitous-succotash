const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // TODO: auto renew subscriptions
  console.log('Renewal job placeholder');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
