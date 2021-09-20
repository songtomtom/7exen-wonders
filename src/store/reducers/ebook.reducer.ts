import {
  SAVE_EBOOK_PERCENT,
  SAVE_EBOOK_URL,
  SAVE_EBOOK_INFO,
  EbookAction,
  IEbook
} from '../actions/actions';

const initCode: IEbook = {
  url:
    'https://d28pw7lag74to8.cloudfront.net/LESSON/3200524046/Event_Streams_in_Action_v15.epub',
  percent: 0
};

const ebookReducer = (state = initCode, action: EbookAction) => {
  switch (action.type) {
    case SAVE_EBOOK_URL: {
      return {
        ...state,
        url: action.payload.url
      };
    }

    case SAVE_EBOOK_PERCENT: {
      return {
        ...state,
        percent: action.payload.percent
      };
    }

    case SAVE_EBOOK_INFO: {
      return {
        ...state,
        title: action.payload.title,
        creator: action.payload.creator
      };
    }

    default: {
      return state;
    }
  }
};

export default ebookReducer;
