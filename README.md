[![Codeship Status for Kennie-create/mind_diary](https://app.codeship.com/projects/5245fbc0-2e74-0138-91f9-56b7d5cdb6a3/status?branch=master)](https://app.codeship.com/projects/384898)

## Mind Diary
* An app where mental health patients can write daily journals to send to their doctor; they can also store information about their prescriptions.

## Dependencies
* Ruby 2.6.5
* Ruby-On-Rails 5.2.3
* React 16.8.0
* Devise



## How to run the test suite
* bundle exec rspec
* yarn run test

## Setup Instructions
* bundle install
* yarn install
* bundle exec rake db:create
* bundle exec rake db:migrate
* bundle exec rake db:seed
* rails s
* In a separate tab, yarn start
* In a browser, visit, http://localhost:3000

## Deployment instructions
* git push heroku master
* heroku run rake db:migrate
* heroku ps:scale web=1
* heroku ps
* heroku open

## Deployment instructions
* Images from Unsplash
