import React, { useState } from 'react';

function SearchFilter() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
