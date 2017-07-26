export const selectAllPhotos = ({ photos }) => Object.keys(photos).map(id => photos[id]);
export const selectAllAlbums = ({ albums }) => Object.keys(albums).map(id => albums[id]);
export const selectAllComments = ({ comments }) => Object.keys(comments).map(id => comments[id]);

export const selectPhoto = ({photos}, id) => {
  return photos[id] || {};
};
export const selectAlbum = ({albums}, id) => {
  return albums[id] || {};
};
export const selectComment = ({comments}, id) => {
  return comments[id] || {};
};
