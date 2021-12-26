/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
