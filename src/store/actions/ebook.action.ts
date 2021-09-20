export const SAVE_EBOOK_URL = 'SAVE_EBOOK_URL' as const;
export const SAVE_EBOOK_PERCENT = 'SAVE_EBOOK_PERCENT' as const;
export const SAVE_EBOOK_INFO = 'SAVE_EBOOK_INFO' as const;

export interface IEbook {
  url?: string;
  percent?: number;
  title?: string;
  creator?: string;
}

export interface SaveEbookUrlAction {
  type: typeof SAVE_EBOOK_URL;
  payload: IEbook;
}

export interface SaveEbookPercentAction {
  type: typeof SAVE_EBOOK_PERCENT;
  payload: IEbook;
}

export interface SaveEbookInfoAction {
  type: typeof SAVE_EBOOK_INFO;
  payload: IEbook;
}

export type EbookAction =
  | SaveEbookUrlAction
  | SaveEbookPercentAction
  | SaveEbookInfoAction;

export const saveEbookUrlAction = (payload: IEbook): EbookAction => {
  return {
    type: SAVE_EBOOK_URL,
    payload: {
      url: payload.url
    }
  };
};

export const saveEbookPercentAction = (payload: IEbook): EbookAction => {
  return {
    type: SAVE_EBOOK_PERCENT,
    payload: {
      percent: payload.percent
    }
  };
};

export const saveEbookInfoAction = (payload: IEbook): EbookAction => {
  return {
    type: SAVE_EBOOK_INFO,
    payload: {
      title: payload.title,
      creator: payload.creator
    }
  };
};
