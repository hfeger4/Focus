class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      @photos = User.find(params[:user_id]).photos
    elsif params[:current_user]
      @photos = current_user.photos
    else
      @photos = Photo.all
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(
      :title,
      :body,
      :image_url,
      :user_id,
      :album_id
    )
  end
end
