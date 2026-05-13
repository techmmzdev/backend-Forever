-- CreateTable
CREATE TABLE "product_colors" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "hexCode" TEXT,
    "currentStock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "product_colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movement_colors" (
    "id" SERIAL NOT NULL,
    "movementId" INTEGER NOT NULL,
    "productColorId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "movement_colors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_colors_productId_name_key" ON "product_colors"("productId", "name");

-- AddForeignKey
ALTER TABLE "product_colors" ADD CONSTRAINT "product_colors_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movement_colors" ADD CONSTRAINT "movement_colors_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "movements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movement_colors" ADD CONSTRAINT "movement_colors_productColorId_fkey" FOREIGN KEY ("productColorId") REFERENCES "product_colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
