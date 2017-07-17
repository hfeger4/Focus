```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  photos: {
    1: {
      title: "Sample State",
      description: "is useful to plan",
      author_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  album: {
    1: {
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  }
}
```
