
class FizzBuzz {

	getResult(value){
		if(value < 1 || value > 100){
			throw new Error('The input should be lesser than 1 and greater than 100')
		}
		if(this.isMultipleOf3(value) && this.isMultipleOf5(value)){
			return 'fizzbuzz';
		}
		if(this.isMultipleOf3(value)){
			return 'fizz';
		} 
		if(this.isMultipleOf5(value)){
			return 'buzz';
		}
		return value.toString();
	}

	isMultipleOf3(value){
		return value%3 === 0;
	}

	isMultipleOf5(value){
		return value%5 === 0;
	}
}

const fizzbuzz = new FizzBuzz;
console.log(fizzbuzz.getResult(process.argv[2]));

module.exports = FizzBuzz;