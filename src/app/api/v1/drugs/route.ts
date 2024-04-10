import prisma from '@lib/prisma'


export const GET = async (request) => {
    try{
        //Get all items from database table Drugs
        const dbDrugs = await prisma.Drugs.findMany({
            select: {
                pretty_name: true,
                summary: true,
                SubstanceCategories: {
                  select: {
                    Categories: {
                      select: {
                        category: true,
                      },
                    },
                  },
                },
              },
            });

        const sDbDrugs = dbDrugs.map(drug => ({
            pretty_name: drug.pretty_name,
            summary: drug.summary,
            categories: drug.SubstanceCategories.map(sc => sc.Categories.category),
            }));
            
            //console.log(sDbDrugs);

        //console.log(dbDrugs[0].SubstanceCategories)

        //Return object of drugs
        return new Response(JSON.stringify(sDbDrugs), {status: 200})
    }
    catch (error) {
        console.log(error)
        return new Response("Whoopsies: Couldn't query database", {status: 500})
    }
}