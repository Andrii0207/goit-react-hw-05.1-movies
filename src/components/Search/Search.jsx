import { useState } from 'react';

export const Search = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handeSubmit = evt => {
    evt.preventDefault();
    onChange(query);
    evt.target.reset();
  };

  return (
    <form onSubmit={handeSubmit}>
      <input
        type="text"
        placeholder="Enter movie name"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      Movies page
    </form>
  );
};
