import { QueryResolvers, MutationResolvers } from '../graphql/schema.graphql'
import { ResolverContext } from './apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {}

const Mutation: Required<MutationResolvers<ResolverContext>> = {}

export default { Query, Mutation }
