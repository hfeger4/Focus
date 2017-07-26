export const fetchComments = (photoId) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/comments`
  })
);

export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`,
  })
);

export const destroyComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  })
);
