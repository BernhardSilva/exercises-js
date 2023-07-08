const nums1 = [1, 0, 2, 3, 4, 1];
const nums2 = [1, 2, 3, 4];

const ContainsDuplicate = () => {

    // //easy to read, very efficient
	// const containsDuplicate = (nums) => {
	// 	const numsSet = new Set(nums);
	// 	return numsSet.size !== nums.length;
	// };

    //a little bit hard to read but top efficient (iterate numbers, ask if numbSet has num, if is you got it and add to numbSet that num, return false when finish)
	const containsDuplicatesFast = (numbers, numbSet = new Set()) => {
		for (const num of numbers) {
			if (numbSet.has(num)) return true;
			numbSet.add(num);
		}
		return false;
	};

	return (
		<section>
			<div>
				<p>{JSON.stringify(nums1)}</p>
				<h5 style={{ color: `${containsDuplicatesFast(nums1) ? 'red' : 'green'}` }}>
					{containsDuplicatesFast(nums1) ? 'CONTAINS DUPLICATES' : 'DONT CONTAINS DUPLICATES'}
				</h5>
			</div>
			<div>
				<p>{JSON.stringify(nums2)}</p>
				<h5 style={{ color: `${containsDuplicatesFast(nums2) ? 'red' : 'green'}` }}>
					{containsDuplicatesFast(nums2) ? 'CONTAINS DUPLICATES' : 'DONT CONTAINS DUPLICATES'}
				</h5>
			</div>
		</section>
	);
};

export default ContainsDuplicate;
