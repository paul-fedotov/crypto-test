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
	},
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

exports.User = mongoose.model('User', User);
exports.Test = mongoose.model('Test', Test);

exports.Question = class Question {
	constructor(question, answers) {
    	this.question = question;
    	this.answers = answers;
  	}
  	get Question(){
  		return(this);
  	}
};


exports.Answer = class Answer{
	constructor(answer, isTrue){
		this.answer = answer;
		this.isTrue = isTrue;
	}
	get Answer(){
		return(this);
	}
}