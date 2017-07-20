Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    resources :photos, only: [:index, :create, :show, :update, :destroy]

    resources :users do
      resources :photos, only: [:index]
    end


  end
  root to: 'static_pages#root'
end
