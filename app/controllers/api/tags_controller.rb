class Api::TagsController < ApplicationController

  def create
    @tag = current_user.tags.find(params[:id]) || Tag.new(tag_params)
    @tag.tag_note.create(tag_note_params)
    if @tag.save
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def index
    @tags = current_user.tags
    render "api/tags/index"
  end

  def update
<<<<<<< HEAD
    @tag = current_user.tags.find(params[:id])
    if @tag.update(tag_params)
=======
    @tag = current_user.notes.find(params[:id])
    if @tag.update(note_params)
>>>>>>> master
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = current_user.tags.find(params[:id])
    render "api/tags/show"
  end


  def destroy
     @tag = current_user.tags.find(params[:id])
     @tag.destroy
     render "api/tags/show"
  end

  private

  def tag_params
    params.require(:tag).permit(:tag,:user_id)
  end

  def tag_tag_params
    params.require(:tag_tag).permit(:tag_id)
  end

end
