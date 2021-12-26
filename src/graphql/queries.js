/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      username
      caption
      profileImage
      image
      createdAt
      updatedAt
      comments {
        items {
          id
          postID
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          postID
          username
          cognitoUsername
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        caption
        profileImage
        image
        createdAt
        updatedAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      username
      content
      createdAt
      updatedAt
      post {
        id
        username
        caption
        profileImage
        image
        createdAt
        updatedAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        username
        content
        createdAt
        updatedAt
        post {
          id
          username
          caption
          profileImage
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      postID
      username
      cognitoUsername
      createdAt
      updatedAt
      post {
        id
        username
        caption
        profileImage
        image
        createdAt
        updatedAt
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        username
        cognitoUsername
        createdAt
        updatedAt
        post {
          id
          username
          caption
          profileImage
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
