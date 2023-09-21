export type Joke = {
    type: string
    setup: string
    punchline: string
    id: number
}

export async function getRandomJoke():Promise<Joke>{

    let response = await fetch('https://official-joke-api.appspot.com/random_joke')

    if (!response.ok){
        throw new Error('Error reading jokes API')
    }

    const joke = await response.json();

    return joke;
}