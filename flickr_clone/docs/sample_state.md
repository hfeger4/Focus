```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: ["body can't be blank"]}
  },
  photos: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      user_id: 1,
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
      user_id: 1,
      body: "is cool"
    }
  }
}
```
