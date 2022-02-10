import {
  QueryResolvers,
  MutationResolvers,
  Thing,
} from 'graphql-let/__generated__/__types__'
import { ResolverContext } from './'

const things: Array<Thing> = [
  { id: '1', name: 'Charlie' },
  { id: '2', name: 'a ghost' },
  { id: '3', name: 'Mrs Hoo-Hoo' },
  { id: '4', name: 'you' },
]

const Query: Required<QueryResolvers<ResolverContext>> = {
  things(_parent, _args, _context, _info) {
    return things
  },
  thing(_parent, args, _context, _info) {
    const thing = things.find((thing) => thing.id === args.id)
    if (thing === undefined) throw new Error('Thing not found!')
    return thing
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {}

export default { Query, Mutation }
