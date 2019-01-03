Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

    namespace :api, defaults: { format: :json } do
      delete '/notes/deleted', to: 'notes#empty_trash'
      delete '/tagnotes/remove', to: 'tags#remove_tag_note'
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :notebooks do
        resources :notes, only: [:create]
      end
      resources :notes, only: [:destroy,:show,:update,:index]


      resources :tags, only: [:index,:show,:update,:destroy,:create]
    end
end
