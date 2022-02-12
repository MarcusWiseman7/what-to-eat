import db from '$lib/db';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const card = await db.get(params.id);

    if (card) {
        return {
            body: { card },
        };
    }

    return {
        status: 404,
    };
}
