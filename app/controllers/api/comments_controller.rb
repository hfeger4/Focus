class Api::CommentsController < ApplicationController
  def index
    if params[:photo_id]
      @comments = Photo.find(params[:photo_id]).comments
      render :index
    else
      @comments = Comment.all
    end
    # @comment = Comment.where(photo_id: params[:photo_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body,:user_id,:photo_id)
  end
end
