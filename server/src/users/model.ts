//   /lib/models/crmModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

enum UserType {
	'CompoundAdmin',
	'BranchAdmin',
	'Guard',
	'RegisteredGuest',
}

export const UserSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
        type: String,
        required: true,
	},
	userType: {
        type: UserType,
        required: true,
	},
});
