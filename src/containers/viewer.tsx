import React, { useState } from 'react';
import { Location } from 'epubjs';

import ViewerComponent from '../components/viewer/viewer';

function Viewer() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cfi = localStorage.getItem('cfi');

  const onRelocated = (location?: Location) => {
    if (location) {
      const { cfi } = location.start;
      localStorage.setItem('cfi', cfi);
    }
  };

  const onExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ViewerComponent
      cfi={cfi}
      isExpanded={isExpanded}
      isOpen={isOpen}
      onExpanded={onExpanded}
      onOpen={onOpen}
      onRelocated={onRelocated}
    />
  );
}

export default Viewer;
