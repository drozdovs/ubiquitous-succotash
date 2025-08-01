import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.plan.createMany({
    data: [
      { name: 'Basic', price: 499, durationDays: 30, remnawaveProductId: 'basic' },
      { name: 'Pro', price: 999, durationDays: 30, remnawaveProductId: 'pro' },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
