import { useState, useMemo, useEffect } from 'react';

export default function Result({items, onItemSelected, query, onResultsCalculated}){

    const [results, setResults] = useState([]);
    const filteredItems = useMemo(()=>{
        return findMatch(items,query);
    }, [items,query]);


    useEffect(()=>{
       onResultsCalculated(results);
    }, [results]);

    function findMatch(items, query){
        const result = items.filter((item)=>{
            return item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        });
        setResults(result);
        return result;
    }

    
    return <div>
         {query !== "" ? filteredItems.map((item) => <div key={item.id}> {item.title}</div>) : ""}
    </div>
}