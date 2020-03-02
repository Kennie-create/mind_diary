Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get '/journals', to: 'homes#index'
  get '/prescriptions', to: 'homes#index'

  namespace "api" do
    namespace "v1" do
      resources :journals, only: [:index, :show, :new, :create, :update, :destroy]
      resources :prescriptions, only: [:index, :show, :new, :create, :update, :destroy]
    end
  end
end
