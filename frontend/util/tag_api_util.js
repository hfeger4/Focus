export const fetchTags = (photoId) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/tags`
  })
);

export const destroyTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
);

export const createTag = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: {comment}
  })
);
