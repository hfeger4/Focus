## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**PhotosContainer**
 - PhotosHeader
  * PhotosIndex

**AlbumsContainer**
 - AlbumsHeader
  + AlbumsIndex

**SearchResultsContainer**
 - Search
 - PhotosIndex

**TagContainer**
 - AlbumHeader
  + PhotoIndex

**PhotoIndex**
 - PhotoIndexItem
  + PhotoDetail
    + PhotoTools
    - AlbumSearch
    - Tags
      - Tag
    * Photo

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**

**NewAlbum**
 - NewAlbum

**NewTag**
 - NewTag

**AlbumSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/photo/:photoId" | "PhotosContainer" |
| "/home/album/:albumId/photo/:photoId" | "AlbumContainer" |
| "/home/tag/:tagId/note/:photoId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-photo" | "NewPhotoContainer" |
| "/search" | "Search" |
| "/new-album" | "NewAlbum" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/album-search" | "AlbumSearch" |
