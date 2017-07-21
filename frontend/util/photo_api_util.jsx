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

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: {photo}
  })
);

export const destroyPhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
