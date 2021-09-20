import {
  SAVE_RENDITION_FLOW,
  SAVE_RENDITION_FONT,
  SAVE_RENDITION_SIZE,
  RenditionAction,
  IRendition
} from '../actions/actions';

const initCode: IRendition = {
  flow: 'paginated',
  fontSize: 16,
  height: '100%',
  width: '100%'
};

const renditionReducer = (state = initCode, action: RenditionAction) => {
  switch (action.type) {
    case SAVE_RENDITION_FLOW: {
      return {
        ...state,
        flow: action.payload.flow
      };
    }

    case SAVE_RENDITION_FONT: {
      return {
        ...state,
        fontSize: action.payload.fontSize,
        fontColor: action.payload.fontColor,
        fontFamily: action.payload.fontFamily
      };
    }

    case SAVE_RENDITION_SIZE: {
      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width
      };
    }

    default: {
      return state;
    }
  }
};

export default renditionReducer;
