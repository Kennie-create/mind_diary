class Api::V1::PrescriptionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    prescriptions = Prescription.all
    render json: prescriptions
  end

  def new
    prescriptions = Prescription.new
  end

  def create
    prescription = Prescription.new(prescription_params)
    prescription.user = current_user
    if prescription.save
      render json: prescription
    else
      render json: prescription.errors.full_messages
    end
  end

  private

  def prescription_params
    params.require(:prescription).permit(:name, :description, :date, :expiration, :provider, :dosage, :refills, :pharmacy)
  end
end
