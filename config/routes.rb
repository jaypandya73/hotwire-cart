Rails.application.routes.draw do
  get '/cart', to: 'cart#index', as: :all_cart
  post '/cart/update_item', to: 'cart#update_item', as: :update_item
  patch '/cart/update_item', to: 'cart#update_item', as: :update_item_pc
  get '/cart/items', to: 'cart#items', as: :fetch_items
  post '/cart/items', to: 'cart#items', as: :fetch_items_pst
  get '/cart/:cart_id/shipping', to: 'cart#shipping', as: :cart_shipping
  get '/products/:id', to: 'cart#fetch_products', as: :fetch_products
  resources :players do
    collection do
      post 'search'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
