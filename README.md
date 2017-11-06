# ManageIQ Experimental UI plugin

The aim of this plugin is to provide modern UI infrastructure for UI developers working on ManageIQ

## Current features

* Allow per plugin package.json to include your own kind of dependencies.
* Supports webpack based development with hot live reload (Core feature - PR at https://github.com/ManageIQ/manageiq-ui-classic/pull/2545)
* Uses React component registry (currently from https://github.com/ohadlevy/manageiq-ui-classic/tree/2132) - it's aim is
have an official API how to publish top level reuseable components and how to consume them across multiple plugins.
* Uses ReactJS
* Uses patternfly-react
* Uses ReactRouter and integration with rails routes so it can refresh the URL back to the same page
* Uses Jest with snapshot testing
* Adds Patternfly list-view page as a demo

## TODO
* Add Redux Support
* .. and much more :-)

## Usage

You need to checkout manageiq, manageiq-ui-classic next to each other and setup the gem overrides.

Then you need to add this gem to your Gemfile or bundler.d/:

```ruby
gem 'miq_experimental_ui', :path => File.expand_path('../../miq_experimental_ui/', __dir__)
```

You need this branch: https://github.com/ohadlevy/manageiq-ui-classic/tree/2132
