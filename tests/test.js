const chai = require('chai');
const expect = chai.expect;

const FizzBuzz = require('../app/app.js'); 

describe('Test kata fizzbuzz', function () {
	it('should return result not null', function () {
		let fizzbuzz = new FizzBuzz();
		let result = fizzbuzz.getResult(100);
		expect(result).to.not.be.null;
	});

	it('should return the input if its not multiple of 3 or 5', function () {
		let fizzbuzz = new FizzBuzz();
		let result = fizzbuzz.getResult(1);
		expect(fizzbuzz.getResult(1)).to.be.equal('1');
		expect(fizzbuzz.getResult(2)).to.be.equal('2');
		expect(fizzbuzz.getResult(7)).to.be.equal('7');
		expect(fizzbuzz.getResult(8)).to.be.equal('8');
	});

	it('should return fizz if input is multiple of 3', function () {
		let fizzbuzz = new FizzBuzz();
		expect(fizzbuzz.getResult(3)).to.be.equal('fizz');
		expect(fizzbuzz.getResult(6)).to.be.equal('fizz');
		expect(fizzbuzz.getResult(9)).to.be.equal('fizz');
		expect(fizzbuzz.getResult(12)).to.be.equal('fizz');
	});

	it('should return buzz if input is multiple of 5', function () {
		let fizzbuzz = new FizzBuzz();
		expect(fizzbuzz.getResult(5)).to.be.equal('buzz');
		expect(fizzbuzz.getResult(10)).to.be.equal('buzz');
		expect(fizzbuzz.getResult(20)).to.be.equal('buzz');
		expect(fizzbuzz.getResult(25)).to.be.equal('buzz');
	});

	it('should return fizzbuzz if input is multiple of 3 and of 5', function () {
		let fizzbuzz = new FizzBuzz();
		expect(fizzbuzz.getResult(15)).to.be.equal('fizzbuzz');
		expect(fizzbuzz.getResult(30)).to.be.equal('fizzbuzz');
		expect(fizzbuzz.getResult(45)).to.be.equal('fizzbuzz');
		expect(fizzbuzz.getResult(60)).to.be.equal('fizzbuzz');
	});

	it('should throw error when input if lesser than 1 and greater than 100', function () {
		let fizzbuzz = new FizzBuzz();
		expect(fizzbuzz.getResult(-1)).to.throw(Error);
		expect(fizzbuzz.getResult(101)).to.throw(Error);
	});

});

