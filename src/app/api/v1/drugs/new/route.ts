import { getToken } from "next-auth/jwt"

export const POST = async (req) => {
    try{

        //Check if user is authorized.
        const token = await getToken({ req })
        if(!token) return new Response(":(", {status: 401})
        if(token.role === 'admin') return new Response(":(", {status: 403})

        //Gather data
        const { name, summary, categories } = await req.json()
        //Format data

        //Insert into db
        // Step 1: Insert the Drug
        const drug = await prisma.drugs.create({
            data: {
                name,
                pretty_name: name, // Assuming pretty_name can be the same as name
                summary,
                email: token.email
            },
        });

        // Step 2: Ensure all categories exist and collect their IDs
        const categoryIds = [];
        for (const categoryId of categories) {
            let category = await prisma.categories.findUnique({
            where: { category_id: categoryId },
            });

            if (!category) {
            // Convert categoryId to a category name
            const categoryName = convertCategoryIdToName(categoryId);
            category = await prisma.categories.create({
                data: {
                category_id: categoryId,
                category: categoryName,
                },
            });
            }

            categoryIds.push(category.category_id);
        }

        // Step 3: Link drug with categories
        for (const categoryId of categoryIds) {
            await prisma.substanceCategories.create({
                data: {
                    substance_id: drug.substance_id,
                    category_id: categoryId,
                },
            });
        }
        //Return data
        return new Response("Oke doke", {status: 200})
    }
    catch (error) {
        console.log(error)
        return new Response("Whoopsies", {status: 500})
    }
}