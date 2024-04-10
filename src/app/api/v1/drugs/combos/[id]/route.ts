import prisma from '@lib/prisma'


export const GET = async (request) => {

    const substanceID = 1; // Example substance ID

    const substanceInteractions = await prisma.substanceTwoCombos.findMany({
    where: {
        OR: [
        { substance_1: substanceID },
        { substance_2: substanceID }
        ],
        AND: {
        substance_1: { not: substanceID },
        substance_2: { not: substanceID }
        }
    },
    include: {
        substanceStatus: true, // Assuming you want to include the status details
        substance1: true,      // Include details of the first substance
        substance2: true,      // Include details of the second substance
        substanceComboSources: true // And any sources for the combo
    }
    });

}