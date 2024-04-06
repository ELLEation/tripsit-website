/*
  Warnings:

  - The primary key for the `Categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `category_id` column on the `Categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `SubstanceCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `substance_categories_id` on the `SubstanceCategories` table. All the data in the column will be lost.
  - You are about to drop the `Drugs` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `substance_id` on the `SubstanceCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category_id` on the `SubstanceCategories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "SubstanceCategories" DROP CONSTRAINT "SubstanceCategories_category_id_fkey";

-- DropForeignKey
ALTER TABLE "SubstanceCategories" DROP CONSTRAINT "SubstanceCategories_substance_id_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_pkey",
DROP COLUMN "category_id",
ADD COLUMN     "category_id" SERIAL NOT NULL,
ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("category_id");

-- AlterTable
ALTER TABLE "SubstanceCategories" DROP CONSTRAINT "SubstanceCategories_pkey",
DROP COLUMN "substance_categories_id",
DROP COLUMN "substance_id",
ADD COLUMN     "substance_id" INTEGER NOT NULL,
DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD CONSTRAINT "SubstanceCategories_pkey" PRIMARY KEY ("substance_id", "category_id");

-- DropTable
DROP TABLE "Drugs";

-- CreateTable
CREATE TABLE "Substances" (
    "substance_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pretty_name" TEXT,
    "summary" TEXT,
    "warnings" TEXT,

    CONSTRAINT "Substances_pkey" PRIMARY KEY ("substance_id")
);

-- CreateTable
CREATE TABLE "Units" (
    "unit_id" SERIAL NOT NULL,
    "unit" TEXT NOT NULL,
    "unit_symbol" TEXT,

    CONSTRAINT "Units_pkey" PRIMARY KEY ("unit_id")
);

-- CreateTable
CREATE TABLE "Methods" (
    "method_id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,

    CONSTRAINT "Methods_pkey" PRIMARY KEY ("method_id")
);

-- CreateTable
CREATE TABLE "Effects" (
    "effect_id" SERIAL NOT NULL,
    "effect" TEXT NOT NULL,
    "pwlink" INTEGER,

    CONSTRAINT "Effects_pkey" PRIMARY KEY ("effect_id")
);

-- CreateTable
CREATE TABLE "LinkTypes" (
    "link_type_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "LinkTypes_pkey" PRIMARY KEY ("link_type_id")
);

-- CreateTable
CREATE TABLE "SubstanceComboStatus" (
    "status_id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "SubstanceComboStatus_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Aliases" (
    "alias_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "alias" TEXT NOT NULL,

    CONSTRAINT "Aliases_pkey" PRIMARY KEY ("alias_id")
);

-- CreateTable
CREATE TABLE "SubstanceMethods" (
    "substance_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,
    "substance_method_note" TEXT,

    CONSTRAINT "SubstanceMethods_pkey" PRIMARY KEY ("substance_id","method_id")
);

-- CreateTable
CREATE TABLE "SubstanceEffects" (
    "substance_effects_id" INTEGER NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "effect_id" INTEGER NOT NULL,

    CONSTRAINT "SubstanceEffects_pkey" PRIMARY KEY ("substance_effects_id")
);

-- CreateTable
CREATE TABLE "SubstanceOverdoseEffects" (
    "substance_overdose_effects_id" INTEGER NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "effect_id" INTEGER NOT NULL,

    CONSTRAINT "SubstanceOverdoseEffects_pkey" PRIMARY KEY ("substance_overdose_effects_id")
);

-- CreateTable
CREATE TABLE "SubstanceAfterEffectsDuration" (
    "after_effects_duration_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,
    "after_effects_min" INTEGER,
    "after_effects_max" INTEGER,
    "after_effects_unit" INTEGER NOT NULL,

    CONSTRAINT "SubstanceAfterEffectsDuration_pkey" PRIMARY KEY ("after_effects_duration_id")
);

-- CreateTable
CREATE TABLE "SubstanceOnsetDuration" (
    "onset_duration_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,
    "onset_min" INTEGER,
    "onset_max" INTEGER,
    "onset_unit" INTEGER NOT NULL,

    CONSTRAINT "SubstanceOnsetDuration_pkey" PRIMARY KEY ("onset_duration_id")
);

-- CreateTable
CREATE TABLE "SubstanceDuration" (
    "duration_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,
    "dose_id" INTEGER,
    "duration_min" INTEGER,
    "duration_max" INTEGER,
    "duration_unit" INTEGER NOT NULL,

    CONSTRAINT "SubstanceDuration_pkey" PRIMARY KEY ("duration_id")
);

-- CreateTable
CREATE TABLE "Doses" (
    "dose_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,
    "dose_unit" INTEGER NOT NULL,
    "light_min" TEXT,
    "light_max" TEXT,
    "average_min" TEXT,
    "average_max" TEXT,
    "strong_min" TEXT,
    "strong_max" TEXT,
    "threshold" TEXT,
    "heavy_min" TEXT,
    "heavy_max" TEXT,
    "dangerous" TEXT,
    "fatal" TEXT,

    CONSTRAINT "Doses_pkey" PRIMARY KEY ("dose_id")
);

-- CreateTable
CREATE TABLE "Links" (
    "link_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "link_type_id" INTEGER NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "url" TEXT,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("link_id")
);

-- CreateTable
CREATE TABLE "SubstanceTestKits" (
    "test_kit_id" SERIAL NOT NULL,
    "kit_name" TEXT NOT NULL,

    CONSTRAINT "SubstanceTestKits_pkey" PRIMARY KEY ("test_kit_id")
);

-- CreateTable
CREATE TABLE "SubstanceTestKitResults" (
    "result_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "test_kit_id" INTEGER NOT NULL,
    "result" TEXT NOT NULL,

    CONSTRAINT "SubstanceTestKitResults_pkey" PRIMARY KEY ("result_id")
);

-- CreateTable
CREATE TABLE "SubstanceTwoCombos" (
    "combo_id" SERIAL NOT NULL,
    "substance_1" INTEGER NOT NULL,
    "substance_2" INTEGER NOT NULL,
    "notes" TEXT,
    "status" INTEGER NOT NULL,

    CONSTRAINT "SubstanceTwoCombos_pkey" PRIMARY KEY ("combo_id")
);

-- CreateTable
CREATE TABLE "SubstanceComboSources" (
    "substance_combo_sources_id" SERIAL NOT NULL,
    "combo_id" INTEGER NOT NULL,
    "source_id" INTEGER NOT NULL,

    CONSTRAINT "SubstanceComboSources_pkey" PRIMARY KEY ("substance_combo_sources_id")
);

-- CreateTable
CREATE TABLE "SubstanceChemistry" (
    "chemistry_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "chemistry_notes" TEXT,

    CONSTRAINT "SubstanceChemistry_pkey" PRIMARY KEY ("chemistry_id")
);

-- CreateTable
CREATE TABLE "SubstanceDetection" (
    "detection_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "detection_notes" TEXT,

    CONSTRAINT "SubstanceDetection_pkey" PRIMARY KEY ("detection_id")
);

-- CreateTable
CREATE TABLE "Pharmacology" (
    "pharmacology_id" SERIAL NOT NULL,
    "substance_id" INTEGER NOT NULL,
    "pharmacokinetics" TEXT,
    "pharmacodynamics" TEXT,

    CONSTRAINT "Pharmacology_pkey" PRIMARY KEY ("pharmacology_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubstanceTestKits_kit_name_key" ON "SubstanceTestKits"("kit_name");

-- AddForeignKey
ALTER TABLE "Effects" ADD CONSTRAINT "Effects_pwlink_fkey" FOREIGN KEY ("pwlink") REFERENCES "Links"("link_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aliases" ADD CONSTRAINT "Aliases_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceCategories" ADD CONSTRAINT "SubstanceCategories_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceCategories" ADD CONSTRAINT "SubstanceCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceMethods" ADD CONSTRAINT "SubstanceMethods_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceMethods" ADD CONSTRAINT "SubstanceMethods_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceEffects" ADD CONSTRAINT "SubstanceEffects_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceEffects" ADD CONSTRAINT "SubstanceEffects_effect_id_fkey" FOREIGN KEY ("effect_id") REFERENCES "Effects"("effect_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceOverdoseEffects" ADD CONSTRAINT "SubstanceOverdoseEffects_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceOverdoseEffects" ADD CONSTRAINT "SubstanceOverdoseEffects_effect_id_fkey" FOREIGN KEY ("effect_id") REFERENCES "Effects"("effect_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceAfterEffectsDuration" ADD CONSTRAINT "SubstanceAfterEffectsDuration_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceAfterEffectsDuration" ADD CONSTRAINT "SubstanceAfterEffectsDuration_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceAfterEffectsDuration" ADD CONSTRAINT "SubstanceAfterEffectsDuration_after_effects_unit_fkey" FOREIGN KEY ("after_effects_unit") REFERENCES "Units"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceOnsetDuration" ADD CONSTRAINT "SubstanceOnsetDuration_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceOnsetDuration" ADD CONSTRAINT "SubstanceOnsetDuration_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceOnsetDuration" ADD CONSTRAINT "SubstanceOnsetDuration_onset_unit_fkey" FOREIGN KEY ("onset_unit") REFERENCES "Units"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceDuration" ADD CONSTRAINT "SubstanceDuration_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceDuration" ADD CONSTRAINT "SubstanceDuration_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceDuration" ADD CONSTRAINT "SubstanceDuration_duration_unit_fkey" FOREIGN KEY ("duration_unit") REFERENCES "Units"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doses" ADD CONSTRAINT "Doses_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doses" ADD CONSTRAINT "Doses_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doses" ADD CONSTRAINT "Doses_dose_unit_fkey" FOREIGN KEY ("dose_unit") REFERENCES "Units"("unit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_link_type_id_fkey" FOREIGN KEY ("link_type_id") REFERENCES "LinkTypes"("link_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceTestKitResults" ADD CONSTRAINT "SubstanceTestKitResults_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceTestKitResults" ADD CONSTRAINT "SubstanceTestKitResults_test_kit_id_fkey" FOREIGN KEY ("test_kit_id") REFERENCES "SubstanceTestKits"("test_kit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceTwoCombos" ADD CONSTRAINT "SubstanceTwoCombos_status_fkey" FOREIGN KEY ("status") REFERENCES "SubstanceComboStatus"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceTwoCombos" ADD CONSTRAINT "SubstanceTwoCombos_substance_1_fkey" FOREIGN KEY ("substance_1") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceTwoCombos" ADD CONSTRAINT "SubstanceTwoCombos_substance_2_fkey" FOREIGN KEY ("substance_2") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceComboSources" ADD CONSTRAINT "SubstanceComboSources_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "SubstanceTwoCombos"("combo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceComboSources" ADD CONSTRAINT "SubstanceComboSources_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "Links"("link_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceChemistry" ADD CONSTRAINT "SubstanceChemistry_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubstanceDetection" ADD CONSTRAINT "SubstanceDetection_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pharmacology" ADD CONSTRAINT "Pharmacology_substance_id_fkey" FOREIGN KEY ("substance_id") REFERENCES "Substances"("substance_id") ON DELETE RESTRICT ON UPDATE CASCADE;
