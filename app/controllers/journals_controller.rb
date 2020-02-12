class JournalsController < ApplicationController

  def index
    @journal = Journal.all
  end

  def show
    @journal = Journal.find(params[:id])
  end

  def new
    @journal = Journal.new
  end

  def create
    @journal = Journal.new(journal_params)

    if @journal.save
      flash[:notice] = "Journal added successfully"
      redirect_to @journal
    else
      flash.now[:alert] = @journal.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:title, :body)
  end

end
