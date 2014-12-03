/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: ''
	},
	lastName: {
		type: String,
		trim: true,
		default: ''
	},
	displayName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	providerData: {},
	additionalProvidersData: {},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	orderHistory: [{
		type: Schema.Types.ObjectId,
		ref: 'Order',
		required: true
	}]
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
	this.updated = new Date();

	return next();
});

mongoose.model('User', UserSchema);
