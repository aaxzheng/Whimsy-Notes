class Api::TagsController < ApplicationController

  def create
    @tag = current_user.tags.find(params[:id]) || Tag.new(tag_params)
    @tag.tag_notes.create(tag_note_params)
    if @tag.save
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def index

  end

  def update

  end

  def show

  end

  def destroy

  end

  private

  def tag_params
    params.require(:tag).permit(:tag)
  end

  def tag_note_params
    params.require(:tag_note).permit(:note_id)
  end

end
