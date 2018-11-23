class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.notebooks.create(title:"Default Notebook", user_id:@user.id)
      @user.notebooks.first.notes.create(title:"Welcome!", body:"Welcome to Whimsy Notes! Currently implemented features include note creation, notebook creation, indexes and editting for the previous two, as well as a tag index. Text editting is now available in a basic capacity! I hope you enjoy the services offered by Whimsy Notes.", user_id:@user.id, preview: "Welcome to Whimsy Notes! Currently implemented features include note creation, notebook creation, indexes and editting for the previous two, as well as a tag index. Text editting is now available in a basic capacity! I hope you enjoy the services offered by Whimsy Notes." )
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
