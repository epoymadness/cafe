-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);
