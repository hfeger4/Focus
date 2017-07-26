class Api::AlbumsController < ApplicationController
  def index
    if params[:current_user]
      @albums = current_user.albums
    elsif params[:user_id]
      @albums = User.find(params[:user_id]).albums
    else
      @albums = Album.all
    end
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find_by(id: params[id])

    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy!
    render :show
  end

  private
  def album_params
    params.require(:album).permit(
      :title,
      :body,
      :user_id
    )
  end
end
