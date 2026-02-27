require("dotenv").config();
const app = require("./app");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function start() {
  await prisma.$connect();
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

start();
