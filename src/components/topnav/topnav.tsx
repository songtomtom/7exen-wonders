import React from 'react';

import TabnavMenu from './topnav-menu';
import TabnavProgress from './topnav-progress';

interface TopnavProps {
  onExpanded: () => void;
  onOpen: () => void;
  percent: number;
}

function Topnav({
  onExpanded,
  onOpen,

  percent
}: TopnavProps) {
  return (
    <div className="topnav">
      <TabnavMenu onExpanded={onExpanded} onOpen={onOpen} />
      <TabnavProgress percent={percent} />
    </div>
  );
}

export default Topnav;
