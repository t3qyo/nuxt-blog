/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: String!, $page: Int!) {
  getPost(id: $id, page: $page) {
    id
    tag
    page
    content
  }
}
`;
export const listPosts = `query ListPosts(
  $id: String
  $page: ModelIntKeyConditionInput
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPosts(
    id: $id
    page: $page
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      tag
      page
      content
    }
    nextToken
  }
}
`;
export const getPostManage = `query GetPostManage($id: ID!) {
  getPostManage(id: $id) {
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
export const listPostManages = `query ListPostManages(
  $filter: ModelPostManageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostManages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
