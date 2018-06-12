import gql from 'graphql-tag'


export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
    query viewerInstitutionQuery{
      viewerInstitution{
        institution{
          _id
        }
      }
    }
    `
  }).then(({ data }) => {
    //return loggedInUser
    return { loggedInUser: data.viewerInstitution}
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
