import React from 'react';

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
