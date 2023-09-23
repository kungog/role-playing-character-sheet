import { json } from '@sveltejs/kit'
import { getMongoClient } from '$lib/server/client'
import { DATABASE, COLLECTION } from '$lib/server/database'
import { ObjectId } from 'mongodb'
import { validateUserAccess } from '$lib/helpers/validate.js'

export async function POST({ request, cookies }) {
  const { body, modal, passcode } = await request.json()
  const validate = cookies.get('passcode')

  validateUserAccess(passcode, validate)

  console.log('POST --->', body, modal, passcode)

  // const { id } = await database.createTodo({ userid, description });
  const database = await getMongoClient()
  const response = await database
    .db(DATABASE)
    .collection(COLLECTION.CHARACTERS)
    .findOneAndUpdate({ _id: new ObjectId(modal.id) }, { $push: body })

  return json({ response }, { status: 201 })
}

export async function PUT({ request, cookies }) {
  const { body, modal, passcode } = await request.json()
  const validate = cookies.get('passcode')

  validateUserAccess(passcode, validate)

  // const arrayKey = `${modal.key}.$`;
  console.log('PUT --->', body, modal)
  console.log({ _id: new ObjectId(modal.id), [modal.key]: modal.index })
  console.log({
    $set: {
      [`${modal.key}.$`]: body,
    },
  })

  const database = await getMongoClient()
  const response = await database
    .db(DATABASE)
    .collection(COLLECTION.CHARACTERS)
    .findOneAndUpdate(
      { _id: new ObjectId(modal.id) },
      {
        $set: {
          [`${modal.key}.${modal.index}`]: body,
        },
      }
    )

  return json({ response }, { status: 201 })
}
