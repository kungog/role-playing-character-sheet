import { error } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { ObjectId } from 'mongodb';

export const load = (async ({ params }) => {
	const { id } = params as { id: Character['_id'] };
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOne({ _id: new ObjectId(id) });

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			character: JSON.parse(parsedData) as Character
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
