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
Tag.destroy_all
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
                    body: "Another day another flower")
photo15 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139230/pexels-photo-493774_yajklx.jpg",
                    user_id: 1,
                    title: "Arctic Dog",
                    body: "Looking comfortable in his big jacket."
                    )
photo16 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501139234/pexels-photo-163990_nvkza9.jpg",
                    user_id: 1,
                    title: "Light Up Bridge",
                    body: "They say this bridge can be seen from space."
                    )
photo17 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242367/pexels-photo-414825_jvex1r.jpg",
                    user_id: 1,
                    title: "Gaming Laptops",
                    body: "I'm pretty sure that's not how it works.")
photo18 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242369/pexels-photo-526421_ukgpuv.jpg",
                    user_id: 1,
                    title: "Church",
                    body: "This is one beautiful church."
                    )
photo19 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242370/pexels-photo-538626_l0mmus.jpg
",
                    user_id: 1,
                    title: "Sorted Ingredients",
                    body: "Spices and ingredients for dinner.",
                    album_id: 4)
photo20 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242368/pexels-photo-538509_hzfwb4.jpg
",
                    user_id: 1,
                    title: "Reflection",
                    body: "A cool view of the lake.",
                    album_id: 4)
photo21 = Photo.create(image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1501242361/pexels-photo-476313_l1s2up.jpg
",
                    user_id: 1,
                    title: "Sunrise",
                    body: "I always enjoy some yoga on the lake before sunrise."
                    )
photo22 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242362/pexels-photo-534455_rx1d5l.jpg
",
                    user_id: 1,
                    title: "Vacation Home",
                    body: "This was my 2017 vaca!")
photo23 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242363/pexels-photo-372959_w3qcka.jpg
",
                     user_id: 1,
                     title: "Saturday Nights",
                     body: "Just my average saturday.")
photo24 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242367/pexels-photo-414544_ysghnx.jpg
",
                     user_id: 1,
                     title: "Cool Garden",
                     body: "Decided to make my garden prettier.")
photo25 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242365/pexels-photo-459735_uwrdxq.jpg
",
                      user_id: 1,
                      title: "Other Half",
                      body: "Now you know who was taking a picture of the cool guy.")
photo26 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242367/pexels-photo-538628_lzg9ut.jpg
",
                      user_id: 1,
                      title: "Tired Kitten",
                      body: "He isn't allowed on the bed but I can't say no!",
                      )
photo27 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242370/night-85029_uvbe0f.jpg
",
                      user_id: 1,
                      title: "Classy",
                      body: ""
                      )
photo23 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242370/butterflies-insect-bezkregowiec-macro-70850_oxjcbx.jpg
",
                     user_id: 1,
                     title: "Silver Butterfly",
                     body: "This is a shiny Butterfree.")
photo24 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501242370/parachute-paratrooper-parachutist-land-67298_uxw8ne.jpg

",
                     user_id: 1,
                     title: "Trooper",
                     body: "")
photo25 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244212/pexels-photo-266497_y75s2s.jpg

",
                      user_id: 1,
                      title: "Fireworks",
                      body: "4th of July celebration!")
photo26 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244212/pexels-photo-533319_ms9w55.jpg

",
                      user_id: 1,
                      title: "Cherry Diet Coke",
                      body: "",
                      )
photo27 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244213/pexels-photo-415233_hrzvsf.jpg

",
                      user_id: 1,
                      title: "Snowstorm",
                      body: ""
                      )
photo28 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244213/pexels-photo-506908_tta3hj.jpg

",
                     user_id: 2,
                     title: "Monkey",
                     body: "His fauxhawk is natural.")
photo29 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244674/pexels-photo-371878_mtjux8.jpg
",
                     user_id: 2,
                     title: "Lights",
                     body: "")
photo30 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244672/snow-snow-heart-heart-winter-159829_yahrzq.jpg

",
                      user_id: 2,
                      title: "Snow Heart",
                      body: "Just a couple of HighSchool sweethearts.")
photo31 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244675/flying-scotsman-square-73444_zx4tgv.jpg

",
                      user_id: 2,
                      title: "Train",
                      body: "This train is only allowed to go 87 mph.",
                      )
photo32 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244671/pexels-photo-473083_sambon.jpg

",
                      user_id: 2,
                      title: "Grasping for Sunrise",
                      body: ""
                      )
photo33 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244671/pexels-photo-235941_f1iuji.jpg

",
                   user_id: 2,
                   title: "Wedding Gift",
                   body: "")
photo34 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244670/pexels-photo-257554_y7vbq2.jpg

",
                    user_id: 2,
                    title: "SpiderBro",
                    body: "He eats the bugs in your house, be kind.")
photo35 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244675/pexels-photo-493743_buji6z.jpg

",
                    user_id: 2,
                    title: "New additions to Bart.",
                    body: "",
                    )
photo36 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244672/pexels-photo-468908_i46c3d.jpg

",
                    user_id: 2,
                    title: "Lost",
                    body: ""
                    )
photo37 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244673/tunnel-arch-bricks-military-fort-161759_kz0sgf.jpg

",
                    user_id: 2,
                    title: "Tunnel Arch",
                    body: "")
photo38 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244675/pexels-photo-260697_gmxnbo.jpg

",
                    user_id: 2,
                    title: "Huddle",
                    body: "",
                    )
photo39 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244677/pexels-photo-466617_hvhjoa.jpg

",
                    user_id: 2,
                    title: "Waterfall",
                    body: "Definitely on my list of places to visit."
                    )
photo40 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244676/pexels-photo-500738_xhifco.jpg

",
                    user_id: 2,
                    title: "Stern Guy",
                    body: "")
photo41 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501244677/pexels-photo-434497_tmeops.jpg

",
                    user_id: 2,
                    title: "",
                    body: "",
                    )
photo42 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245349/pexels-photo-260024_qwgebx.jpg

",
                    user_id: 2,
                    title: "Dream Big",
                    body: ""
                    )
photo43 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245350/pexels-photo-461063_nwfw6g.jpg


",
                    user_id: 2,
                    title: "",
                    body: ""
                    )
photo44 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245350/pexels-photo-530869_qpuraa.jpg


",
                    user_id: 2,
                    title: "",
                    body: "")
photo45 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245350/pexels-photo-486123_dvn93s.jpg


",
                    user_id: 2,
                    title: "",
                    body: "",
                    )
photo46 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245349/pexels-photo-530858_m4wsxo.jpg

",
                    user_id: 2,
                    title: "",
                    body: ""
)
photo47 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245349/pexels-photo-482007_sniwt1.jpg


",
                user_id: 2,
                title: "",
                body: ""
                )
photo48 = Photo.create(image_url: "https://res.cloudinary.com/ds7hk07wv/image/upload/v1501245350/mario-luigi-yoschi-figures-163036_dvlrum.jpg


",
                user_id: 2,
                title: "Heroes",
                body: "The princess must be in another castle.")



#Tags

rand_tags = [
tag1 = Tag.create(name: "Awesome"),
tag2 = Tag.create(name: "Incredible"),
tag3 = Tag.create(name: "Cute"),
tag4 = Tag.create(name: "Interesting"),
tag5 = Tag.create(name: "Mind-Blowing"),
tag6 = Tag.create(name: "Cool")
]


tagging1 = Tagging.create(photo_id: photo1.id, tag_id: tag1.id)
(0..Photo.count).each do |photoId|
  random_tags = rand_tags.sample(2)
  random_tags.each do |tag|
    Tagging.create!(photo_id: photoId, tag_id: tag.id)
  end
end


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
comment2 = Comment.create(
        body: "Beautiful Fish",
        user_id: 2,
        photo_id: 1)


rand_comments = ["Amazing!", "This looks soo good!", "I like it.", "Very nice.", "Cool picture!", "I've always wanted to see this.", "This is terrific", "Do you know where this is?"]

(2..Photo.count).each do |photo_id|
  random_comments = rand_comments.sample(1)
  user_nums = (1..User.all.count).to_a
  user_id = user_nums.sample
  random_comments.each do |comment|
    Comment.create!(body: comment, user_id: user_id, photo_id: photo_id)
  end
end

(1..Photo.count).each do |photo_id|
  random_comments = rand_comments.sample(1)
  user_nums = (1..User.all.count).to_a
  user_id = user_nums.sample
  random_comments.each do |comment|
    Comment.create!(body: comment, user_id: user_id, photo_id: photo_id)
  end
end

(1..Photo.count).each do |photo_id|
  random_comments = rand_comments.sample(1)
  user_nums = (1..User.all.count).to_a
  user_id = user_nums.sample
  random_comments.each do |comment|
    Comment.create!(body: comment, user_id: user_id, photo_id: photo_id)
  end
end
