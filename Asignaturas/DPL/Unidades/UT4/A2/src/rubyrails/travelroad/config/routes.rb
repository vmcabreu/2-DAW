Rails.application.routes.draw do
  get "/", to: "places#index"
  get "/wished", to: "places#wished"
  get "/visited", to: "places#visited"
end
