class Api::V1::JournalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    journal = Journal.all
    render json: journal
  end

  def show
    journal = Journal.find(params[:id])
  end

  def new
    journal = Journal.new
  end

  def create
    journal = Journal.new(journal_params)
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
