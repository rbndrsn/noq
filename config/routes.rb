Noq::Application.routes.draw do
  root :to => 'home#index'
  get "signup" => "home#signup", :as => :signup
  get "login" => "sessions#new", :as => :login
  resources :users, only: [:create]
  resources :sessions, only: [:new, :create, :destroy]

end
