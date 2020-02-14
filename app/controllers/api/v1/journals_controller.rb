class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Journal.all
  end

  def new
    render json: Journal.new
  end

  def create
    journal = Journal.new(journal_params)
    user = current_user
    journal.user = user
    if journal.save
      render json: journal
    else
      render json: journal.errors.full_messages
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:title, :body)
  end

end
