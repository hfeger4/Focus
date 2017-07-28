Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :albums, only: [:create, :show, :index, :update, :destroy]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only:[:index, :create, :update, :destroy]
    resources :tags, only:[:create,:destroy,:show]

    resources :users do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end

    resources :albums do
      resources :photos, only:[:index,:update]
    end

    resources :photos do
      resources :comments, only:[:index]
      resources :tags, only:[:index]
    end


  end
  root to: 'static_pages#root'
end
