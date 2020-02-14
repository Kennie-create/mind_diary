class JournalsController < ApplicationController

  def index
    journals = Journal.all
  end

  def new
    journals = Journal.new
  end

  def create
    journals = Journal.new(journal_params)
    if journal.save
      render :journal
    else
      render :journal.errors.full_messages
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:title, :body)
  end
end
