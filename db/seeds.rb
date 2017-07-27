# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Album.destroy_all
Comment.destroy_all
#Users
guest = User.create(username: "Guest", password: "password")
guest2 = User.create(username: "Michael", password: "ultimatepassword")
guest3 = User.create(username: "Kimmy", password: "howieisawesome")
guest4 = User.create(username: "Julie", password: "passwordisgood")


#Photos
photo = Photo.create(title: "Carpe Diem",
                     body: "Seize the day. For pictures.",
                     image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943263/pexels-photo-507561_1_ekh1sk.jpg",
                     user_id: 1,
                     album_id: 1)
photo1 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/skydiving-jump-falling-parachuting-37656_aey05z.jpg",
                     user_id: 2,
                     title: "Risk Taker",
                     body: "Just my average saturday.",
                     album_id: 2)
photo2 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/rain-day-car-lights-78497_d1ym6r.jpg",
                     user_id: 1,
                     title: "Car Wash",
                     body: "Rainy day or car wash? You decide.",
                     album_id: 1)
photo3 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-220917_1_m1h3xs.jpg",
                      user_id: 2,
                      title: "Good Boy",
                      body: "Seriously, he's a really good boy.",
                      album_id: 2)
photo4 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/peacock-bird-plumage-display-50557_1_kyxlwg.jpg",
                      user_id: 1,
                      title: "Pretty Chicken",
                      body: "Through careful evolution this chicken evolved to be too beautiful to eat.",
                      album_id: 3)
photo5 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-301292_1_odpybw.jpg",
                      user_id: 2,
                      title: "Smoke Break",
                      body: "Settled on Paris.",
                      album_id: 3)
photo6 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-261877_1_zasbgg.jpg",
                      user_id: 1,
                      title: "Reflection",
                      body: "Pretty picture.",
                      album_id: 3)
photo7 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-265683_1_vzv2hi.jpg",
                      user_id: 2,
                      title: "Tech Setup",
                      body: "2017 tech setup.",
                      album_id: 3)
photo8 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/pexels-photo-518557_kcksal.jpg",
                      user_id: 1,
                      title: "Bale of Hay",
                      body: "Another day on the farm.",
                      album_id: 3)
photo9 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/night-product-watch-dramatic-84475_1_own3hm.jpg",
                      user_id: 2,
                      title: "Classic Watch",
                      body: "On the to-buy list.")
photo10 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1500942189/beer_gdjakq.jpg",
                      user_id: 1,
                      title: "Beers and Candles",
                      body: "There are beers and candles here, very interesting.")
photo11 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139244/smilies-funny-emoticon-faces-160760_mr1sj1.jpg",
                    user_id: 1,
                    title: "Funny Emoticons",
                    body: "The office just got a little better.")
photo12 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139244/pexels-photo-461326_ijwdqd.jpg",
                    user_id: 1,
                    title: "Delicious Dish",
                    body: "Delicious dish prepared for you.")
photo13 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139235/people-man-model-glasses-46503_vkcgfi.jpg",
                    user_id: 1,
                    title: "Cool Guy",
                    body: "Someone has to take a picture of the photographer.",
                    album_id: 1)
photo14 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139232/butterfly-wings-red-flowers-66871_xcavic.jpg",
                    user_id: 1,
                    title: "Butterfly",
                    body: "Another day another flower",
                    album_id: 1)
photo15 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139230/pexels-photo-493774_yajklx.jpg",
                    user_id: 1,
                    title: "Arctic Dog",
                    body: "Looking comfortable in his big jacket.",
                    album_id: 1)
photo16 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139234/pexels-photo-163990_nvkza9.jpg",
                    user_id: 1,
                    title: "Light Up Bridge",
                    body: "They say this bridge can be seen from space.",
                    album_id: 1)

#Tags



#Albums
album1 = Album.create(
        title: "Favorites",
        body: "The world of warcraft",
        user_id: 1)
album2 = Album.create(
        title: "Travel",
        body: "The world of skycraft",
        user_id: 2)
album3 = Album.create(
        title: "Travel",
        body: "The world of earthcraft",
        user_id: 1)
album4 = Album.create(
        title: "Other",
        body: "The world of earthcraft",
        user_id: 1)
album5 = Album.create(
        title: "Sea",
        body: "The world of watercraft",
        user_id: 2)

#Comments
comment1 = Comment.create(
        body: "Woah, cool photo!",
        user_id: 1,
        photo_id: 1)
comment2 = Comment.create(
        body: "Nice",
        user_id: 2,
        photo_id: 1)
comment3 = Comment.create(
        body: "hello there!",
        user_id: 2,
        photo_id: 1)
comment4 = Comment.create(
        body: "hello there!",
        user_id: 2,
        photo_id: 2)
comment5 = Comment.create(
        body: "hello there!",
        user_id: 1,
        photo_id: 2)

rand_comments = ["Amazing!", "This looks soo good!", "I like it.", "Very nice.", "Cool picture!", "I've always wanted to see this.", "This is terrific", "Oh, I've always wanted one!"]

(1..Photo.count).each do |photo_id|
  random_comments = rand_comments.sample(3)
  user_nums = (1..User.all.count).to_a
  user_id = user_nums.sample
  random_comments.each do |comment|
    Comment.create!(body: comment, user_id: user_id, photo_id: photo_id)
  end
end
