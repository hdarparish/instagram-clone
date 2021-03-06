/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
