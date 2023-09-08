const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, type, category, description } = req.body;
    const newExpense = new ExpenseSchema({
      title,
      amount,
      type,
      category,
      description,
    });

    // Validations
    if (!title || !amount || !type || !category || !description) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await ExpenseSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
