import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const typeSchema = new Schema({
	_id: String,
	type: String,
});

const Type = mongoose.models.Type || mongoose.model("Type", typeSchema);

export default Type;
