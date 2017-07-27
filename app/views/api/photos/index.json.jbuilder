@photos.each do |photo|
  json.set! photo.id do
      json.id photo.id
      json.body photo.body
      json.title photo.title
      json.user_id photo.user_id
      json.image_url photo.image_url
      json.comments photo.comments
  end
end
