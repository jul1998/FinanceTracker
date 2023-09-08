const IncomeModel = require("../models/IncomeModel")







exports.addIncome = async (req, res) => {
    try{
        const {title, amount, type, category, description} = req.body
        const newIncome = new IncomeModel({
            title, amount, type, category, description
        })

        // Validations
        if(!title || !amount || !type || !category || !description){
            return res.status(400).json({msg: "Not all fields have been entered."})
        }


        const savedIncome = await newIncome.save()
        res.status(200).json(savedIncome)


    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getIncomes = async (req, res) => {
    try{
        const incomes = await IncomeModel.find().sort({date: -1})
        res.status(200).json(incomes)

    } catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteIncome = async (req, res) => {    
    try{
        const deletedIncome = await IncomeModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedIncome)

    } catch(err){
        res.status(500).json({error: err.message})
    }
}