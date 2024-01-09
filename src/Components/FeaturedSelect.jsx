import React, { useState } from 'react';

function FeaturedSelect() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // You can add additional logic here based on the selected option
  };

  return (
    <select className='absolute top-36 right-5 border border-black px-2 py-1 font-mono cursor-pointer' value={selectedOption} onChange={handleSelectChange}>
      <option value="featured">Featured</option>
      <option value="newestToOldest">Newest to Oldest</option>
      <option value="oldestToNewest">Oldest to Newest</option>
      <option value="lowToHigh">Low to High</option>
      <option value="highToLow">High to Low</option>
    </select>
  );
}

export default FeaturedSelect;
