
import { nanoid } from 'nanoid'

const countSubstitutions = (pattern:string) => {
  let count = 0
  let message = pattern

  for (let ith = 32; ith >= 0; --ith) {
    let target = `\$${ith}`

    if (pattern.includes(target)) {
      count++
      message = message.replace(target, 'dummy-text')
    }
  }

  return count
}

const performSubstitutions = (pattern:any, args:any) => {
  const count = countSubstitutions(pattern)

  if (!args.args && count === 0) {
    return pattern
  }

  if (args.args?.length !== count) {
    throw new Error(`pattern requires ${count} arguments but you provided ${args.args?.length || 0}`)
  }

  let final = pattern
  let pairs:any = {}

  for (let ith = args.args.length - 1; ith >=0; --ith) {
    let sub = nanoid()
    final = final.replace('$' + ith, sub)

    pairs[sub] = args.args[ith]
  }

  for (const [key, val] of Object.entries(pairs)) {
    final = final.replace(key, val)
  }

  return final
}

export default performSubstitutions
