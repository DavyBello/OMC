import gql from 'graphql-tag'
import { CANDIDATE_ISAUTHENTICATED_QUERY } from '../backendApi/queries'
export default apolloClient => (
  apolloClient.query({
    query: CANDIDATE_ISAUTHENTICATED_QUERY
  }).then(({ data }) => {
    // console.log(data.candidateIsAuthenticated);
    return { isAuthenticated: data.candidateIsAuthenticated}
  }).catch(() => {
    // Fail gracefully
    return { isAuthenticated: false }
  })
)
