var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crypto');

var Schema = mongoose.Schema;

var User = new Schema({
	login: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
	isAdmin: {
		type: Boolean,
		default: false
	}
});

var Test = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	questions: {
		type: Array,
		required: true
	} 
});

var Question = new Schema({
	question: {
		type: String,
		required: true
	},
	answers: {
		type: Array,
		required: true
	}
});

var Answer = new Schema({
	answer: {
		type: String,
		required: true
	},
	isTrue: {
		type: Boolean,
		required: true
	}
});