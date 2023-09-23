import { json } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import { DATABASE, COLLECTION } from '$lib/server/database';

/*
 *	Get all user specific characters
 */
export async function GET({ params }) {
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.find({ profile_id: params.id })
		.toArray();

	// close connection
	database.close();

	return json({ characters: response }, { status: 201 });
}
