const arr = [
	{ id: 1, name: 'Robert' },
	{ id: 2, name: 'Matías' },
	{ id: 3, name: 'Gretchen' }
];

const ManualMap = () => {

  //A map is a function that receive a callback function with the same length of the given array and creates a copy of the array
	Array.prototype.myMap = function (cb) {
		let returnArray = [];
		for (let i = 0; i < this?.length; i++) {
			returnArray[i] = cb(this[i]);
		}
		return returnArray;
	};

	return (
		<section>
      <h2>My Map</h2>
			{arr?.myMap((person) => (
				<div key={person.id}>{person.name}</div>
			))}
		</section>
	);
};

export default ManualMap;
