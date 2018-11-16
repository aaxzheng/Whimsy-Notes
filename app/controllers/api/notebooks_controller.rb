class Api::NotebooksController < ApplicationController

  def index
    @notebooks = Notebook.all.includes(:user)
    render :index
  end

  def edit
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook.update(notebook_params)
      render "api/notebooks/show"
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
    @notes = @notebook.notes
    render "api/notebooks/show"
  end

  def create
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook.save(notebook_params)
      render "api/notebooks/show"
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end


  def destroy
     @notebook = current_user.notebooks.find(params[:id])
     @notebook.destroy
     render "api/notebooks/show"
  end

  def note_params
    params.require(:notebook).permit(:title)
  end

end
