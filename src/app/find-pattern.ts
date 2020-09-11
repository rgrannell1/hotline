
const findPattern = (config:any, args:any) => {
  for (const {id, url} of config) {
    if (id === args.id) {
      return {id, url}
    }
  }

  const sorted = config
    .map((data:any) => data.id)
    .sort()

  throw new Error(`no patterns matched id ${args.id}. Available patterns:\n${sorted}\n`)
}

export default findPattern
