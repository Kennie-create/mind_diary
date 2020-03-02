class Api::V1::PrescriptionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    prescription = Prescription.all
    render json: prescription
  end

  def new
    prescription = Prescription.new
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

  def update
    prescription = Prescription.find(params[:id])
    prescription.assign_attributes(prescription_params)
    if prescription.save
      render json: prescription
    else
      render json: prescription.errors.full_messages
    end
  end

  def destroy
    prescription = Prescription.find(params[:id])
    prescription.destroy
    render json: Prescription.all
  end

  private

  def prescription_params
    params.require(:prescription).permit(:name, :description, :date, :expiration, :provider, :dosage, :refills, :pharmacy)
  end
end
