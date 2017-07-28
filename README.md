# Focus

## [Focus Website](https://focusthis.herokuapp.com/#/)

Focus is a full-stack web application inspired by Flickr that utilizes:
- A Ruby on Rails backend
- A PostgreSQL database
- React.js with a Redux architectural framework on the frontend.

# Features and Implementation


## Single Page Application
Using [React-Router](https://github.com/ReactTraining/react-router), Focus can use a single page to store it's contents on a root page.

<img src="docs/screen_clippings/react_router.png" width="600">

### Photos
Photos are rendered through two different components, a `photos_index` to display photos through [React Masonry Component](https://github.com/eiriklv/react-masonry-component) and a `photo_show` that displays a single photo using a [React Modal](https://github.com/reactjs/react-modal). The photos are stored in the database side under the columns `photo_url` and `user_id` and an API call is made to that database that joins the user and photo under the `user_id` and the current sessions `id`. Filtering through the photos using this id populates the user page with their photos.



Using the [React Masonry Component](https://github.com/eiriklv/react-masonry-component), photos are displayed as a responsive gallery that rearrange according to the size of the window. It also allows for endless scrolling for smooth viewing.

<img src="./docs/screen_clippings/masonry_code.png" width="600">

<img src="./docs/screen_clippings/gallery.png" width="600">

Using the [React Modal](https://github.com/reactjs/react-modal), photos are displayed in a convenient pop-up that zooms in on the photo.

<img src="./docs/screen_clippings/modal-snippet.png" width="600">

<img src="./docs/screen_clippings/modal.png" width="600">

## Future Direction for Project

In the future I plan to add the following to add functionality similar to Flickr:
- Clickable tags that direct you to a show-page full of photos with those tags.
- Clickable photo display that links to comments and tags section.
