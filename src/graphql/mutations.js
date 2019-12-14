/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    tag
    page
    content
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    tag
    page
    content
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    tag
    page
    content
  }
}
`;
export const createPostManage = `mutation CreatePostManage($input: CreatePostManageInput!) {
  createPostManage(input: $input) {
    id
    title
    post {
      id
      tag
      page
      content
    }
    addDate
    updateDate
    comments {
      id
      content
    }
  }
}
`;
export const updatePostManage = `mutation UpdatePostManage($input: UpdatePostManageInput!) {
  updatePostManage(input: $input) {
    id
    title
    post {
      id
      tag
      page
      content
    }
    addDate
    updateDate
    comments {
      id
      content
    }
  }
}
`;
export const deletePostManage = `mutation DeletePostManage($input: DeletePostManageInput!) {
  deletePostManage(input: $input) {
    id
    title
    post {
      id
      tag
      page
      content
    }
    addDate
    updateDate
    comments {
      id
      content
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
  }
}
`;
