import { error } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';

export const load = (async ({ cookies }) => {
	const passcode = cookies.get('passcode');
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.find({ profile_id: passcode })
		.toArray();

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			characters: JSON.parse(parsedData)
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
