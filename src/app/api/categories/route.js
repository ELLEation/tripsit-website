import prisma from '@lib/prisma'


export const GET = async (request) => {
    try{
        //Get all items from database table Drugs
        const dbCategories = await prisma.Categories.findMany({});

        //Return object of drugs
        return new Response(JSON.stringify(dbCategories), {status: 200})
    }
    catch (error) {
        console.log(error)
        return new Response("Whoopsies: Couldn't query database", {status: 500})
    }
}