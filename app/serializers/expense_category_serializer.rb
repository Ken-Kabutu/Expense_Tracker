class ExpenseCategorySerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :expenses
end
