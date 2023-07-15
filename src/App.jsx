import './App.css';
import ContainsDuplicate from './components/ContainsDuplicate.component';
import FlattenArray from './components/FlattenArray.component';
import ManualMap from './components/ManualMap.component';
import Palindrome from './components/Palindrome.component';

function App() {
	return (
		<>
			<Palindrome />
			<ManualMap />
			<FlattenArray />
			<ContainsDuplicate />
		</>
	);
}

export default App;
