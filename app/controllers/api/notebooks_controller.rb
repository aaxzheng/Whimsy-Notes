class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook.update(notebook_params)
      @notes = @notebook.notes
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
    @notebook = Notebook.new(notebook_params)
    @notes = @notebook.notes
    if @notebook.save
      render "api/notebooks/show"
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end


  def destroy
     @notebook = current_user.notebooks.find(params[:id])
     @notes = @notebook.notes
     @notebook.destroy
     render "api/notebooks/show"
  end

  def notebook_params
    params.require(:notebook).permit(:title,:user_id)
  end

end
