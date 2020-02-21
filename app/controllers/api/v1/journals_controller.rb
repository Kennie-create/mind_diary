class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
    skip_before_action :verify_authenticity_token, only: [:create]

  def index
    journals = Journal.all
    render json: journals
  end

  def new
    journals = Journal.new
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

  def destroy
    journals = Journal.find(params[:id])
    render json: journal
  end


  private
  def journal_params
    params.require(:journal).permit(:title, :body)
  end
end
