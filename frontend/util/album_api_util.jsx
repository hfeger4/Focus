export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums',
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
  })
);

export const destroyAlbum = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: {album}
  })
);

export const updateAlbum = (album, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${id}`,
    data: album
  })
);
