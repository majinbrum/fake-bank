import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const categorySchema = new Schema({
	_id: String,
	category: String,
});

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
