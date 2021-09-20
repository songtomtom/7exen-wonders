import React from 'react';
import { Swipeable, SwipeCallback } from 'react-swipeable';

interface ReaderSwipeableProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onSwiped: SwipeCallback;
}

function ReaderSwipeable({ children, onSwiped }: ReaderSwipeableProps) {
  return (
    <Swipeable className="reader-swipeable" onSwiped={onSwiped}>
      {children}
    </Swipeable>
  );
}

export default ReaderSwipeable;
