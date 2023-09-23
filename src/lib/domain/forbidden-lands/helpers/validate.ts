import { error } from '@sveltejs/kit'
export const validateAccess = (passcode: string | undefined) => {
  if (!passcode) {
    throw error(404, 'Invalid passcode')
  }
}

export const validateUserAccess = (
  profile_id: string,
  passcode: string | undefined
) => {
  if (!passcode || profile_id !== passcode) {
    throw error(404, 'Invalid passcode')
  }
}
