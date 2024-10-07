import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const transactionSchema = new Schema({
	transactionDate: String,
	description: String,
	category: String,
	amount: Number,
	type: String,
});

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;
