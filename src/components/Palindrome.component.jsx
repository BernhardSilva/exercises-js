import { useState } from 'react';

const Palindrome = () => {
	const [word, setWord] = useState('');

	// //Create a reversed array and compares the original with the reversed
	// const isPalindromeCreatingReversedArray = (str) => {
	// 	const filter = str.replace(/[^\w]/gi, '').toLowerCase();
	// 	const reverse = filter.split('').reverse().join('');
	// 	return filter === reverse;
	// };

	//Iterate from i from start and j from the end, comparing values to reach middle, if nothing is different is a palindrome. (more efficient)
	const isPalindromeSameString = (str) => {
		const filtered = str.replace(/[^a-z]/gi, '').toLowerCase();
		for (let i = 0, j = filtered.length - 1; i < j; i++, j--) {
			if (filtered[i] !== filtered[j]) return false;
		}
		return true;
	};

	const filterWord = (str) => {
		return str.replace(/[^a-z]/gi, '').toUpperCase();
	};

	return (
		<section>
			<h2>Is Palindrome?</h2>
			<input placeholder='Insert any word' type='text' onChange={(e) => setWord(e.target.value)} value={word} />
			<div>
				<h3>
					<span style={{ color: `${isPalindromeSameString(word) ? 'green' : 'red'}` }}>
						{!word
							? ''
							: isPalindromeSameString(word)
							? `${filterWord(word)} IS PALINDROME`
							: `${filterWord(word)} IS NOT PALINDROME`}
					</span>
				</h3>
			</div>
		</section>
	);
};

export default Palindrome;
