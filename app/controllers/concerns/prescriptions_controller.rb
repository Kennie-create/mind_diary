class PrescriptionsController < ApplicationController
  def index
    prescriptions = Prescription.all
  end

  def new
    prescriptions = Prescription.new
  end

  def create
    prescriptions = Prescription.new(prescription_params)
    if prescription.save
      render :prescription
    else
      render :prescription.errors.full_messages
    end
  end

  private

  def prescription_params
    params.require(:prescription).permit(:name, :description, :date, :expiration, :provider, :dosage, :refills, :pharmacy)
  end
end
