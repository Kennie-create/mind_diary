class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
    skip_before_action :verify_authenticity_token, only: [:create]
    before_action :authenticate_user!, only: [:index, :new, :create, :destroy]

  def index
    journal = current_user.journals
    render json: journals
  end

  def new
    journal = Journal.new
  end

  def create
    journal = Journal.new(journal_params)
    journal.user = current_user
    if journal.save
      render json: journal
    else
      render json: journal.errors.full_messages
    end
  end

    def destroy
      journal = Journal.find(params[:id])
      if current_user == journal.user
      journal.destroy
      render json: Journal.all
      else
      render json: { message: "Could not delete" }
      end
    end

  private
  def journal_params
    params.require(:journal).permit(:title, :body)
  end
end
