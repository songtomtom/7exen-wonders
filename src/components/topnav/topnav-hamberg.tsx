import React from 'react';

interface TopnavHambergeProps {
  onOpen: () => void;
}

function TopnavHamberge({ onOpen }: TopnavHambergeProps) {
  return (
    <div className="topnav-hamberg">
      <i className="fas fa-hamburger fa-2x text-warning" onClick={onOpen} />
    </div>
  );
}

export default TopnavHamberge;
