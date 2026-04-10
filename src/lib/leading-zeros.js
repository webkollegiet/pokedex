export default function leadingZeros(number, totalLength = 4) {
	let newNumber = number;
	for (let i = newNumber.length; i < totalLength; i++) {
		newNumber = "0" + newNumber;
	}
	return newNumber;
}