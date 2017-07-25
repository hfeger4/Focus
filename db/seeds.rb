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
#Users
guest = User.create(username: "Guest", password: "password")
guest2 = User.create(username: "User", password: "password")


#Photos
photo = Photo.create(title: "Carpe Diem",
                     body: "Seize the day. For pictures.",
                     image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943263/pexels-photo-507561_1_ekh1sk.jpg",
                     user_id: 1,
                     album_id: 1)
photo1 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/skydiving-jump-falling-parachuting-37656_aey05z.jpg",
                     user_id: 1,
                     title: "Risk Taker",
                     body: "Just my average saturday.",
                     album_id: 1)
photo2 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/rain-day-car-lights-78497_d1ym6r.jpg",
                     user_id: 1,
                     title: "Car Wash",
                     body: "Rainy day or car wash? You decide.",
                     album_id: 1)
photo3 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-220917_1_m1h3xs.jpg",
                      user_id: 1,
                      title: "Good Boy",
                      body: "Seriously, he's a really good boy.",
                      album_id: 1)
photo4 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/peacock-bird-plumage-display-50557_1_kyxlwg.jpg",
                      user_id: 1,
                      title: "Pretty Chicken",
                      body: "Through careful evolution this chicken evolved to be too beautiful to eat.")
photo5 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-301292_1_odpybw.jpg",
                      user_id: 1,
                      title: "Smoke Break",
                      body: "Settled on Paris.")
photo6 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-261877_1_zasbgg.jpg",
                      user_id: 1,
                      title: "Reflection",
                      body: "Pretty picture.")
photo7 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/pexels-photo-265683_1_vzv2hi.jpg",
                      user_id: 1,
                      title: "Tech Setup",
                      body: "2017 tech setup.")
photo8 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943156/pexels-photo-518557_kcksal.jpg",
                      user_id: 1,
                      title: "Bale of Hay",
                      body: "Another day on the farm.")
photo9 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500943155/night-product-watch-dramatic-84475_1_own3hm.jpg",
                      user_id: 2,
                      title: "Classic Watch",
                      body: "On the to-buy list.")
photo10 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500942189/beer_gdjakq.jpg",
                      user_id: 2,
                      title: "Beers and Candles",
                      body: "There are beers and candles here, very interesting.")


#Albums
album1 = Album.create(
        title: "World",
        body: "The world of warcraft",
        user_id: 1)
album2 = Album.create(
        title: "Sky",
        body: "The world of skycraft",
        user_id: 1)
album3 = Album.create(
        title: "Dirt",
        body: "The world of earthcraft",
        user_id: 1)
album4 = Album.create(
        title: "Land",
        body: "The world of earthcraft",
        user_id: 2)
album5 = Album.create(
        title: "Sea",
        body: "The world of watercraft",
        user_id: 2)
#
# photo = Photo.create(title: "camera",
#                      body: "lol",
#                      image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500488349/wood-night-camera-vintage_icnhpi.jpg",
#                      user_id: 1)
# photo1 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653696/pexels-photo-265683_ofcd0g.jpg",
#                      user_id: 1)
# photo2 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653695/pexels-photo-277803_vhjaxw.jpg",
#                      user_id: 1)
# photo3 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653683/peacock-bird-plumage-display-50557_oycz4c.jpg",
#                       user_id: 1)
# photo4 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653661/pexels-photo-261877_jifasr.jpg",
#                       user_id: 1)
# photo5 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653650/pexels-photo-220917_ungjeo.jpg",
#                       user_id: 1)
# photo6 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653640/pexels-photo-492543_udtrha.jpg",
#                       user_id: 1)
# photo7 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653630/pexels-photo-301292_i9tzyg.jpg",
#                       user_id: 1)
# photo8 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653612/night-product-watch-dramatic-84475_yj5f0w.jpg",
#                       user_id: 1)
# photo9 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653602/pexels-photo-507561_mo9hkf.jpg",
#                       user_id: 1)
# photo10 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500942189/beer_gdjakq.jpg",
#                       user_id: 1)
