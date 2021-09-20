import React from 'react';

import TopnavAuth from './topnav-auth';
import TopnavHeadline from '../../containers/topnav-headline';
import TopnavButtons from '../../containers/topnav-buttons';
import TopnavHamberge from './topnav-hamberg';

interface TopnavMenuProps {
  onExpanded: () => void;
  onOpen: () => void;
}

function TopnavMenu({ onExpanded, onOpen }: TopnavMenuProps) {
  return (
    <div className="topnav-menu">
      <TopnavHamberge onOpen={onOpen} />
      <TopnavHeadline />
      <TopnavButtons onExpanded={onExpanded} />
      <TopnavAuth />
    </div>
  );
}

export default TopnavMenu;
