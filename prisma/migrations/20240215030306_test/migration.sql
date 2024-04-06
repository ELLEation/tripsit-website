-- CreateTable
CREATE TABLE "Drugs" (
    "substance_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pretty_name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "Drugs_pkey" PRIMARY KEY ("substance_id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "category_id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "SubstanceCategories" (
    "substance_categories_id" TEXT NOT NULL,
    "substance_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "SubstanceCategories_pkey" PRIMARY KEY ("substance_categories_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drugs_name_key" ON "Drugs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Drugs_pretty_name_key" ON "Drugs"("pretty_name");

-- AddForeignKey
ALTER TABLE "SubstanceCategories" ADD CONSTRAINT "SubstanceCategories_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Drugs"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceCategories" ADD CONSTRAINT "SubstanceCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
