import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    // cria um novo cliente
    const prismic = Prismic.client(
        // entry point pra minha API
        process.env.PRISMIC_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic
}