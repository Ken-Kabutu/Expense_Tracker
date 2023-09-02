class ExpenseCategorySerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :date, :description
  belongs_to :user
  belongs_to :expense_category
end
