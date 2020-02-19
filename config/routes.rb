Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get '/journals', to: 'journals#index'
  get '/prescriptions', to: 'prescriptions#index'

  namespace "api" do
    namespace "v1" do
      resources :journals, only: [:index, :show, :new, :create]
      resources :prescriptions, only: [:index, :show, :new, :create]
    end
  end
end
