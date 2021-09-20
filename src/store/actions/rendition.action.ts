export const SAVE_RENDITION_FONT = 'SAVE_RENDITION_FONT' as const;
export const SAVE_RENDITION_FLOW = 'SAVE_RENDITION_FLOW' as const;
export const SAVE_RENDITION_SIZE = 'SAVE_RENDITION_SIZE' as const;

export interface IRendition {
  flow?: string;
  fontColor?: string;
  fontFamily?: string;
  fontSize?: number;
  height?: string;
  width?: string;
}

export interface SaveRenditionFontAction {
  type: typeof SAVE_RENDITION_FONT;
  payload: IRendition;
}

export interface SaveRenditionFlowAction {
  type: typeof SAVE_RENDITION_FLOW;
  payload: IRendition;
}

export interface SaveRenditionSizeAction {
  type: typeof SAVE_RENDITION_SIZE;
  payload: IRendition;
}

export type RenditionAction =
  | SaveRenditionFontAction
  | SaveRenditionFlowAction
  | SaveRenditionSizeAction;

export const saveRenditionFontAction = (
  payload: IRendition
): RenditionAction => {
  return {
    type: SAVE_RENDITION_FONT,
    payload: {
      fontColor: payload.fontColor,
      fontFamily: payload.fontFamily,
      fontSize: payload.fontSize
    }
  };
};

export const saveRenditionFlowAction = (
  payload: IRendition
): RenditionAction => {
  return {
    type: SAVE_RENDITION_FLOW,
    payload: {
      flow: payload.flow
    }
  };
};

export const saveRenditionSizeAction = (
  payload: IRendition
): RenditionAction => {
  return {
    type: SAVE_RENDITION_SIZE,
    payload: {
      width: payload.width,
      height: payload.height
    }
  };
};
