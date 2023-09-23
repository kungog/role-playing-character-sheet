export const formValues = (formObject: object) => {
  let newObj = {}
  let objKey = ''

  for (const [key, value] of Object.entries(formObject)) {
    newObj = { ...newObj, [key.split('_')[1]]: value }
    objKey = key.split('_')[0]
  }

  return { values: newObj, key: objKey }
}
