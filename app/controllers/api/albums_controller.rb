class Api::AlbumsController < ApplicationController
  def index

  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
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
