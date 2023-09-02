puts "seeding..."

# Create default expense categories
ExpenseCategory.create(name: 'General')
ExpenseCategory.create(name: 'Family and Friends')
ExpenseCategory.create(name: 'Business Related')

# Create sample expenses
User.first.expenses.create(
  expense_category_id: ExpenseCategory.first.id,
  amount: 50.0,
  date: Date.today,
  description: 'Lunch with friends'
)


puts "...seeding complete"