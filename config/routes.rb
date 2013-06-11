Noq::Application.routes.draw do
  root :to => 'home#index'
  get "signup" => "home#signup", :as => :signup
  get "login" => "home#login", :as => :login
  get "logout" => "sessions#destroy", :as => :logout
  get "reset" => "users#reset_password", :as => :reset
  post "reset" => "users#deliver_password", :as => :reset
  resources :users, only: [:create]
  resources :sessions, only: [:new, :create, :destroy]
end
