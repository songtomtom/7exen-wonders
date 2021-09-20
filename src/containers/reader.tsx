import React, { useEffect, useRef, useState } from 'react';
import ePub, { Rendition, Location, Book, NavItem } from 'epubjs';

import { useDispatch, useSelector } from 'react-redux';
import ReaderComponent from '../components/reader/reader';
import { RootState } from '../store/reducers/reducers';
import {
  saveEbookInfoAction,
  saveEbookPercentAction
} from '../store/actions/ebook.action';

interface ReaderProps {
  cfi: string | null;
  isOpen: boolean;
  onRelocated?: (location?: Location) => void;
}

function useEbookSelector() {
  return useSelector((state: RootState) => state.ebook);
}

function useRenditionSelector() {
  return useSelector((state: RootState) => state.rendition);
}

function Reader({ cfi, isOpen, onRelocated }: ReaderProps) {
  const [ebook, setEbook] = useState<Book | null>(null);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const [tocs, setTocs] = useState<Array<NavItem>>([]);

  const { url } = useEbookSelector();
  const {
    flow,
    fontColor,
    fontFamily,
    fontSize,
    height,
    width
  } = useRenditionSelector();

  const readerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // document.addEventListener('keyup', onKeyPress, false);
    // return document.removeEventListener('keyup', onKeyPress, false);
  }, []);

  useEffect(() => {
    onDispose();

    if (readerRef.current && url) {
      const ebook = ePub(url);
      const rendition = ebook!.renderTo(readerRef.current, {
        flow,
        width,
        height
      });

      onReaderLoad(ebook, rendition);
    }

    return onDispose();
  }, [url]);

  useEffect(() => {
    if (rendition && flow) {
      rendition.flow(flow);
    }
  }, [flow]);

  useEffect(() => {
    if (rendition) {
      const { book } = rendition;
      book.ready.then(() => {
        const { navigation } = book;
        const { toc } = navigation;
        setTocs(toc);
      });
    }
  }, [rendition]);

  useEffect(() => {
    if (rendition) {
      setStyles(rendition);
    }
  }, [fontSize]);

  const onKeyPress = ({ key }: KeyboardEvent) => {
    if (key === 'ArrowRight') {
      onNext();
    }

    if (key === 'ArrowLeft') {
      onPrev();
    }
  };

  const onDispose = () => {
    if (ebook) {
      ebook.destroy();
    }

    if (rendition) {
      rendition.destroy();
    }
  };

  const onReaderLoad = (ebook: Book, rendition: Rendition) => {
    console.log(ebook);
    if (ebook && rendition) {
      setEbook(ebook);
      setRendition(rendition);

      rendition.display();

      if (cfi) {
        rendition.display(cfi);
      } else {
        rendition.display();
      }

      setStyles(rendition);

      ebook.ready.then(async () => {
        ebook.locations.generate(1600);

        if (onRelocated) {
          rendition.on('keyup', onKeyPress);
          // document.addEventListener('keyup', onKeyPress, false);
          rendition.on('relocated', onDefaultRelocated(ebook));
        }
      });
    }
  };

  const setStyles = (rendition: Rendition) => {
    setFontSize(rendition);
    setFontColor(rendition);
    setFontFamily(rendition);
  };

  const setFontSize = (rendition: Rendition) => {
    if (fontSize) {
      rendition.themes.default({
        p: { 'font-size': `${fontSize}px !important` }
      });
    }
  };

  const setFontColor = (rendition: Rendition) => {
    if (fontColor) {
      rendition.themes.default({ p: { color: `${fontColor} !important` } });
    }
  };

  const setFontFamily = (rendition: Rendition) => {
    if (fontFamily) {
      rendition.themes.default({
        p: { fontFamily: `${fontFamily} !important` }
      });
    }
  };

  const onDefaultRelocated = (ebook: Book) => (location: Location): void => {
    if (onRelocated) {
      /**
       * 읽은 곳까지 저장
       */
      // onRelocated(location);
    }
    dispatchEbookInfo(ebook);
    dispatchEbookPercent(ebook, location);
  };

  const dispatchEbookInfo = (ebook: Book) => {
    const {
      packaging: {
        metadata: { title, creator }
      }
    } = ebook;

    dispatch(
      saveEbookInfoAction({
        title,
        creator
      })
    );
  };

  const dispatchEbookPercent = (ebook: Book, location: Location) => {
    const percent = ebook.locations.percentageFromCfi(location.start.cfi);
    dispatch(saveEbookPercentAction({ percent: Math.floor(percent * 100) }));
  };

  const onNext = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e) {
      e.preventDefault();
    }

    if (rendition) {
      rendition.next();
    }
  };

  const onPrev = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e) {
      e.preventDefault();
    }

    if (rendition) {
      rendition.prev();
    }
  };

  const goChapter = (toc: NavItem) => () => {
    if (rendition) {
      rendition.display(toc.href);
    }
  };

  return (
    <ReaderComponent
      goChapter={goChapter}
      isOpen={isOpen}
      onNext={onNext}
      onPrev={onPrev}
      readerRef={readerRef}
      rendition={rendition}
      tocs={tocs}
    />
  );
}

export default Reader;
