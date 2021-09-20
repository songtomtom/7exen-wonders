import React from 'react';
import { EventData } from 'react-swipeable';

import ReaderSwipeableComponent from '../components/reader/reader-swipeable';

interface ReaderSwipeableProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onNext: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onPrev: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function ReaderSwipeable({ children, onNext, onPrev }: ReaderSwipeableProps) {
  const onSwiped = (eventData: EventData) => {
    const { dir } = eventData;

    if (dir === 'Left') {
      onNext();
    }
    if (dir === 'Right') {
      onPrev();
    }
  };

  return (
    <ReaderSwipeableComponent onSwiped={onSwiped}>
      {children}
    </ReaderSwipeableComponent>
  );
}

export default ReaderSwipeable;
