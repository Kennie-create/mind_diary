Rails.application.routes.draw do
  root 'homes#index'
  
  namespace :api do
    namespace :v1 do
      resources :journals, only: [:index, :show, :new, :create]
      devise_for :users
    end
  end
end
