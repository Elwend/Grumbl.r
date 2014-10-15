Rails.application.routes.draw do
 root 'application#index'
 resources :grumbles, only: [:index,:show,:create,:update,:destroy]
end
