import React from 'react';
import { NavItem, Rendition } from 'epubjs';

import ReaderLoader from './reader-loader';
import ReaderNavigator from './reader-navigator';
import ReaderEpub from './reader-epub';
import ReaderChapter from './reader-chapter';
import ReaderSwipeable from '../../containers/reader-swipeable';

interface ReaderProps {
  goChapter: (toc: NavItem) => () => void;
  isOpen: boolean;
  onNext: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onPrev: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  readerRef: React.RefObject<HTMLDivElement>;
  rendition: Rendition | null;
  tocs: Array<NavItem>;
}

function Reader({
  goChapter,
  isOpen,
  onNext,
  onPrev,
  readerRef,
  rendition,
  tocs
}: ReaderProps) {
  return (
    <div className="reader">
      <div className="reader-container">
        <ReaderSwipeable onNext={onNext} onPrev={onPrev}>
          {!rendition && <ReaderLoader />}
          <ReaderChapter tocs={tocs} goChapter={goChapter} isOpen={isOpen} />

          <ReaderEpub readerRef={readerRef}>
            <ReaderNavigator onNext={onNext} onPrev={onPrev} />
          </ReaderEpub>
        </ReaderSwipeable>
      </div>
    </div>
  );
}

export default Reader;
