import React from 'react';

interface ReaderNavigatorProps {
  onNext: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onPrev: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function ReaderNavigator({ onNext, onPrev }: ReaderNavigatorProps) {
  return (
    <div className="reader-navigator">
      <div className="prev-area" onDoubleClick={onPrev} />
      <div className="next-area" onDoubleClick={onNext} />
    </div>
  );
}

export default ReaderNavigator;
