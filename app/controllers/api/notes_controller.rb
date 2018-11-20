class Api::NotesController < ApplicationController

  def index
    @notes = Note.all.includes(:user)
    @tags = Tag.all.includes(:notes)
    render :index
  end

  def update
    @note = current_user.notes.find(params[:id])
    @tags = @note.tags
    if @note.update(note_params)
      render "api/notes/show"
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = current_user.notes.find(params[:id])
    @tags = @note.tags
    render "api/notes/show"
  end


  def destroy
     @note = current_user.notes.find(params[:id])
     @note.destroy
     render "api/notes/show"
  end

  def note_params
    params.require(:note).permit(:body,:title,:preview)
  end

end
