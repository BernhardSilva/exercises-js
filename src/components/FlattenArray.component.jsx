// const oneDimensionalArray = [[1], [2]];
// const twoDimensionalArray = [[1, [2]], [5]];
// const threeDimensionalArray = [[1 , 2], [3, [4,5]], 6]
const threeDimensionalArray = [[1, 2], [3, [4, 5, [6, 7]]], 6];

const FlattenArray = () => {

	// Array.prototype.flatten = function (dimension) {

  // };

	console.log(threeDimensionalArray.flat(3));

	return <section>hi</section>;
};

export default FlattenArray;
