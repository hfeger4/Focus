class Api::TagsController < ApplicationController
  def index
    if params[:photo_id]
      @tags = Photo.find(params[:photo_id]).tags
      render :index
    else
      @tags = Tags.all
    end
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
