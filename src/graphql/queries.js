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
      likes
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
        likes
        createdAt
        updatedAt
        comments {
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
        likes
        createdAt
        updatedAt
        comments {
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
          likes
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
