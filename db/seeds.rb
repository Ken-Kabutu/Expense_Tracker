puts "seeding..."

# Create default expense categories
ExpenseCategory.create(name: 'General')
ExpenseCategory.create(name: 'Family and Friends')
ExpenseCategory.create(name: 'Business Related')

# Create a sample user with a password
user = User.create(username: 'your_username', password_digest: 'your_password')

# Create a sample expense associated with the user
user.expenses.create(
  expense_category_id: ExpenseCategory.first.id,
  amount: 50.0,
  date: Date.today,
  description: 'Lunch with friends'
)

puts "...seeding complete"
