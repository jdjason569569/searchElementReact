import { useState } from 'react';
import Result from './results';

export default function SearchBar({ items, onItemSelected }) {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const onResultsCalculated = (results) => {
        setResults(results);
    }

    return <div>
        {results && <div>{results.length} Results</div>}
        <input type="text" onChange={handleChange} value={query}></input>
        <Result items={items} onItemSelected={() => { }} query={query} onResultsCalculated={onResultsCalculated}></Result>
    </div>
}