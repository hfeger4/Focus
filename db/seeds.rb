# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
#Users
guest = User.create(username: "Guest", password: "password")

#Photos
photo = Photo.create(title: "camera", body: "lol", image_url: "http://res.cloudinary.com/ds7hk07wv/image/upload/v1500488349/wood-night-camera-vintage_icnhpi.jpg", user_id: 1)
photo1 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653696/pexels-photo-265683_ofcd0g.jpg", user_id: 1)
photo2 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653695/pexels-photo-277803_vhjaxw.jpg", user_id: 1)
photo3 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653683/peacock-bird-plumage-display-50557_oycz4c.jpg", user_id: 1)
photo4 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653661/pexels-photo-261877_jifasr.jpg", user_id: 1)
photo5 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653650/pexels-photo-220917_ungjeo.jpg", user_id: 1)
photo6 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653640/pexels-photo-492543_udtrha.jpg", user_id: 1)
photo7 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653630/pexels-photo-301292_i9tzyg.jpg", user_id: 1)
photo8 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653612/night-product-watch-dramatic-84475_yj5f0w.jpg", user_id: 1)
photo9 = Photo.create("http://res.cloudinary.com/ds7hk07wv/image/upload/v1500653602/pexels-photo-507561_mo9hkf.jpg", user_id: 1)
