import React from 'react';
import classnames from 'classnames';
import { NavItem } from 'epubjs';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface ReaderChapterProps {
  goChapter: (toc: NavItem) => () => void;
  isOpen: boolean;
  tocs: Array<NavItem>;
}

function ReaderChapter({ goChapter, isOpen, tocs }: ReaderChapterProps) {
  return (
    <div className={classnames('reader-chapters', { open: isOpen })}>
      <ListGroup flush>
        {tocs.map((toc: NavItem, index: number) => {
          const { label } = toc;
          return (
            <ListGroupItem tag="a" key={index} onClick={goChapter(toc)}>
              {index}: {label}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default ReaderChapter;
