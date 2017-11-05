# MiqExperimentalUI::Engine.routes.draw do
Rails.application.routes.draw do
  match '/demo' => 'demo#index', :via => [:get]
  match 'demo/*page' => 'demo#index', :via => [:get]
end
