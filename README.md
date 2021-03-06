# Focus

## [Focus Website](https://focusthis.herokuapp.com/#/)

Focus is a full-stack web application inspired by Flickr that utilizes:
- A Ruby on Rails backend
- A PostgreSQL database
- React.js with a Redux architectural framework on the frontend.

# Features and Implementation


## Single Page Application
Using [React-Router](https://github.com/ReactTraining/react-router), Focus can use a single page to store it's contents on a root page.

```ruby

const App = () => (
  <div className="main-body">
    <header>
      <GreetingContainer />
    </header>

    <Route exact path="/" component={HomepageContainer} />
    <ProtectedRoute path="/albums/:id" component={AlbumsShowContainer} />
    <ProtectedRoute path="/users/:userId/photos" component={PhotoStreamContainer} />
    <ProtectedRoute path="/users/:userId/albums" component={AlbumStreamContainer} />
    <ProtectedRoute path="/comments/:photoId" component={CommentFormContainer} />
    <ProtectedRoute path="/upload" component={PhotoUploadContainer} />
    <ProtectedRoute path="/photos/:id" component={PhotoShowContainer} />
    <ProtectedRoute path="/photos" component={PhotosIndexContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

```

### Photos
Photos are rendered through two different components, a `photos_index` to display photos through [React Masonry Component](https://github.com/eiriklv/react-masonry-component) and a `photo_show` that displays a single photo using a [React Modal](https://github.com/reactjs/react-modal). The photos are stored in the database side under the columns `id`, `title`, `body`, `image_url`, `user_id`, and `album_id`. An API call is made to that database that joins the user and photo under the `user_id` and the `current sessions` `id`. Filtering through the photos using this `id` populates the `user` page with their photos.


### React Masonry
Using the [React Masonry Component](https://github.com/eiriklv/react-masonry-component), photos are displayed as a responsive gallery that rearrange according to the size of the window. It also allows for endless scrolling for smooth viewing.

```ruby

render(){
  const {photos} = this.props;

  return (

    <div className="masonry">
      <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        >
        {photos.map( photo => (
          <div  key={photo.id + "photo"}
                className="single-photo" >
            <Link to={`/photos/${photo.id}`}>
              <img key={photo.id} src={ photo.image_url }/>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

```

![alt text](./docs/screen_clippings/modal_moving.gif)


### React Modal
Using the [React Modal](https://github.com/reactjs/react-modal), photos are displayed in a convenient pop-up that zooms in on the photo and dims the background.

```ruby

<Modal
  isOpen={this.state.modalIsOpen}
  onRequestClose={this.closeModal}
  style={customStyles}
  contentLabel="Example Modal">
</Modal>

```
<img src="./docs/screen_clippings/modal.png" width="600">

### Cloudinary
[Cloudinary](http://cloudinary.com/) is a cloud based image and video management website. Cloudinary allows users to securely upload and view files on Focus.

<img src="./docs/screen_clippings/cloudinary.png" width="600">



### Comments
```ruby

render()
{
  return(

    <div className="comment-form">
    <div>
        <img src={this.props.photo.image_url}
             className="comments-photo"></img>
       <div className="tag-form">
              <TagIndexContainer/>
              {this.displayTags()}
      </div>
    </div>
    <div className="photo-comments">
      <div>
          <div className="all-comments">
             {this.props.comments.length > 0 ? this.props.comments.map((comment) => (
               <CommentItem currentUser={this.props.currentUser}
                            deleteComment={this.props.deleteComment}
                            key={comment.id + "comment"}
                            comment={comment} />)) : ("")}
          </div>
          <div>
          <CommentCreateContainer photo={this.props.photo}
                                  createComment={this.props.createComment}/>
          </div>
      </div>
    </div>
    </div>

  );
}

```
Comments have three components to create, view, and delete them. Using React these containers can be called in a single form to display the components. Comments are stored in the database under a `comments` table and are joined to both `photos` and `users` through polymorphic associations. It contains the columns `body`, `user_id`, and `photo_id`. Through these associations `comments` can be accessed from `photos` without the need for a joins table.

Nesting comments under photos through the [Rails Jbuilder](https://github.com/rails/jbuilder) lead to difficult situations where grabbing specific comments could lead to undefined problems. This was resolved by using the backend associations mentioned above.


## Future Direction for Project

In the future I plan to add the following to add functionality similar to Flickr:
- Clickable tags that direct you to a show-page full of photos with those tags.
- Clickable photo display that links to comments and tags section.
