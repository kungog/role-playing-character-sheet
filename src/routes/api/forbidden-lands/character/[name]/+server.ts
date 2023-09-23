import { json } from '@sveltejs/kit'
import { getMongoClient } from '$lib/server/client'
import { DATABASE, COLLECTION } from '$lib/server/database'
import { emptyCharacter } from '$lib/helpers/getCharacterObject.js'
import { validateAccess } from '$lib/helpers/validate.js'

/*
 *	Create a new user specific character
 */
export async function POST({ params, cookies }) {
  const passcode = cookies.get('passcode')
  const database = await getMongoClient()

  validateAccess(passcode)

  const body = { ...emptyCharacter, profile_id: passcode, name: params.name }
  const response = await database
    .db(DATABASE)
    .collection(COLLECTION.CHARACTERS)
    .insertOne(body)

  // close connection
  database.close()

  return json({ _id: response.insertedId, ...body }, { status: 201 })
}
