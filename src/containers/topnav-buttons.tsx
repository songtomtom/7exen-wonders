import React, { useState } from 'react';

import TopnavButtonsComponent from '../components/topnav/topnav-buttons';

interface TopnavButtonsProps {
  onExpanded: () => void;
}

function TopnavButtons({ onExpanded }: TopnavButtonsProps) {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const onDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <TopnavButtonsComponent
      isDropdown={isDropdown}
      onDropdown={onDropdown}
      onExpanded={onExpanded}
    />
  );
}

export default TopnavButtons;
