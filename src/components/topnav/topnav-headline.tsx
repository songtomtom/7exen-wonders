import React from 'react';

interface TopnavHeadlineProps {
  creator?: string;
  title?: string;
}

function TopnavHeadline({ creator, title }: TopnavHeadlineProps) {
  return (
    <div className="topnav-headline">
      <h1 className="headline">
        <span className="text-white">{title}&nbsp;/&nbsp;</span>
        <span className="text-white">{creator}</span>
      </h1>
    </div>
  );
}

export default TopnavHeadline;
