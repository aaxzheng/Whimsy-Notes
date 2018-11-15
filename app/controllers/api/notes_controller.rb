class Api::NotesController < ApplicationController

  def index
    @notes = Note.all.includes(:user)
    render :index
  end

  def edit
    @note = current_user.notes.find(params[:id])
    if @note.update(note_params)
      render "api/notes/show"
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = current_user.notes.find(params[:id])
    @tags = Tag.all.includes(:tagged_notes)
    render "api/notes/show"
  end


  def destroy
     @note = current_user.notes.find(params[:id])
     @note.destroy
     render "api/notes/show"
  end

  def note_params
    params.require(:note).permit(:body)
  end

end
