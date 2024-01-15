import React, { useState } from 'react';

const MyList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    // Perform additional actions if needed
  };

  const listItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {listItems.map((item, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(index)}
          className={selectedItem === index ? 'selected' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MyList;
