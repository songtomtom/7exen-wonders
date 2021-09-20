import React from 'react';

interface ReaderEpubProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  readerRef: React.RefObject<HTMLDivElement>;
}

function ReaderEpub({ children, readerRef }: ReaderEpubProps) {
  return (
    <div className="reader-epub" ref={readerRef}>
      {children}
    </div>
  );
}

export default ReaderEpub;
