class Api::NotesController < ApplicationController

  def index
    @notes = current_user.notes
    render :index
  end

  def create
    @note = Note.new(note_params)
    @tags = @note.tags
    if @note.save
      render "api/notes/show"
    else
      render json: @note.errors.full_messages,status: 422
    end
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
     # @tags = @note.tags
     @note.destroy
     render "api/notes/index"
  end

  def empty_trash
     @notes = current_user.notes.where(trashed: true)
     # @tags = @note.tags
     @notes.each do |note|
       debugger;
       note.destroy
     end
     render "api/notes/index"
  end

  def note_params
    params.require(:note).permit(:body,:title,:preview,:notebook_id,:user_id,:trashed)
  end

end
