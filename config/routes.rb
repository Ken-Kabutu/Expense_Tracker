Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # route for devise
  devise_for :users, controllers: { sessions: 'users/sessions' }

  
  resources :expenses, only: [:index, :show, :create, :update, :destroy]
  resources :expense_categories, only: [:index, :show, :create, :update, :destroy]

end
