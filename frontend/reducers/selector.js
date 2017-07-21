export const selectAllPhotos = ({ photos }) => Object.keys(photos).map(id => photos[id]);

export const selectPhoto = ({photos}, id) => {
  return photos[id] || {};
};
