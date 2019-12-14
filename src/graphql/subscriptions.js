/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    tag
    page
    content
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    tag
    page
    content
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    tag
    page
    content
  }
}
`;
export const onCreatePostManage = `subscription OnCreatePostManage {
  onCreatePostManage {
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
export const onUpdatePostManage = `subscription OnUpdatePostManage {
  onUpdatePostManage {
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
export const onDeletePostManage = `subscription OnDeletePostManage {
  onDeletePostManage {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
  }
}
`;
