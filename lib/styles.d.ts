import { Interpolation } from 'create-emotion';
export interface ReactDiffViewerStyles {
    diffContainer?: string;
    diffRemoved?: string;
    diffAdded?: string;
    line?: string;
    highlightedGutter?: string;
    gutter?: string;
    highlightedLine?: string;
    marker?: string;
    wordDiff?: string;
    wordAdded?: string;
    wordRemoved?: string;
    codeFoldGutter?: string;
    emptyGutter?: string;
    emptyLine?: string;
    codeFold?: string;
    [key: string]: string;
}
export interface ReactDiffViewerStylesOverride {
    variables?: {
        diffViewerBackground?: string;
        addedBackground?: string;
        addedColor?: string;
        removedBackground?: string;
        removedColor?: string;
        wordAddedBackground?: string;
        wordRemovedBackground?: string;
        addedGutterBackground?: string;
        removedGutterBackground?: string;
        gutterBackground?: string;
        gutterBackgroundDark?: string;
        highlightBackground?: string;
        highlightGutterBackground?: string;
        codeFoldGutterBackground?: string;
        codeFoldBackground?: string;
        emptyLineBackground?: string;
    };
    diffContainer?: Interpolation;
    diffRemoved?: Interpolation;
    diffAdded?: Interpolation;
    marker?: Interpolation;
    emptyGutter?: Interpolation;
    highlightedLine?: Interpolation;
    highlightedGutter?: Interpolation;
    gutter?: Interpolation;
    line?: Interpolation;
    wordDiff?: Interpolation;
    wordAdded?: Interpolation;
    wordRemoved?: Interpolation;
    codeFoldGutter?: Interpolation;
    emptyLine?: Interpolation;
}
declare const _default: (styleOverride: ReactDiffViewerStylesOverride) => ReactDiffViewerStyles;
export default _default;
