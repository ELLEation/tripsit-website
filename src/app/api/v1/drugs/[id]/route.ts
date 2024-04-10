//Include stuff up here


export const GET = async (request) => {
    try{
        //Connect to db

        //Query drug with [id] db

        //Format data

        //Return data
        return new Response(JSON.stringify(prompts), {status: 200})
    }
    catch (error) {
        return new Response("Whoopsies", {status: 500})
    }
}

export const PATCH = async (request) => {
    try{
        //Connect to db

        //Query drug with [id] db

        //Format data

        //Return data
        return new Response(JSON.stringify(prompts), {status: 200})
    }
    catch (error) {
        return new Response("Whoopsies", {status: 500})
    }
}

export const DELETE = async (request) => {
    try{
        //Connect to db

        //Query drug with [id] db

        //Format data

        //Return data
        return new Response(JSON.stringify(prompts), {status: 200})
    }
    catch (error) {
        return new Response("Whoopsies", {status: 500})
    }
}