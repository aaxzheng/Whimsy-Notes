class Api::TagsController < ApplicationController

  def create
    @tag = current_user.tags.find_by_tag(params[:tag][:tag]) || Tag.new(tag_params)
    if @tag.save
      @tag.tag_notes.create({tag_id: @tag.id,note_id: params[:note_id]})
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
    @tag = current_user.tags.find(params[:id])
    if @tag.update(tag_params)
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

  def tag_note_params
    params.require(:tag_note).permit(:tag_id,:note_id)
  end

end
