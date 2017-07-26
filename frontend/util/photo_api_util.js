export const fetchPhotos = photos => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    photos
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
  })
);

export const destroyPhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: {photo}
  })
);

export const fetchUserPhotos = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/photos`
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {photo}
  })
);
