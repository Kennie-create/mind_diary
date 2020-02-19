class Api::V1::PrescriptionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Prescription.all
  end

  def create
    prescription = Prescription.new(prescription_params)
    user = current_user
    prescription.user = user
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
