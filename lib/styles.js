"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_1 = require("emotion");
exports.default = (styleOverride) => {
    const { variables: overrideVariables, ...styles } = styleOverride;
    const variables = {
        ...{
            diffViewerBackground: '#fff',
            addedBackground: '#e6ffed',
            addedColor: '#24292e',
            removedBackground: '#ffeef0',
            removedColor: '#24292e',
            wordAddedBackground: '#acf2bd',
            wordRemovedBackground: '#fdb8c0',
            addedGutterBackground: '#cdffd8',
            removedGutterBackground: '#ffdce0',
            gutterBackground: '#f7f7f7',
            gutterBackgroundDark: '#f3f1f1',
            highlightBackground: '#fffbdd',
            highlightGutterBackground: '#fff5b1',
            codeFoldGutterBackground: '#dbedff',
            codeFoldBackground: '#f1f8ff',
            emptyLineBackground: '#fafbfc',
        },
        ...overrideVariables,
    };
    const diffContainer = emotion_1.css({
        width: '100%',
        background: variables.diffViewerBackground,
        pre: {
            margin: 0,
            whiteSpace: 'pre-wrap',
            lineHeight: '25px',
        },
        label: 'diff-container',
    });
    const diffRemoved = emotion_1.css({
        background: variables.removedBackground,
        color: variables.removedColor,
        pre: {
            color: variables.removedColor,
        },
        label: 'diff-removed',
    });
    const diffAdded = emotion_1.css({
        background: variables.addedBackground,
        color: variables.addedColor,
        pre: {
            color: variables.addedColor,
        },
        label: 'diff-added',
    });
    const wordDiff = emotion_1.css({
        padding: 2,
        display: 'inline-flex',
        borderRadius: 1,
        label: 'word-diff',
    });
    const wordAdded = emotion_1.css({
        background: variables.wordAddedBackground,
        label: 'word-added',
    });
    const wordRemoved = emotion_1.css({
        background: variables.wordRemovedBackground,
        label: 'word-removed',
    });
    const codeFoldGutter = emotion_1.css({
        backgroundColor: variables.codeFoldGutterBackground,
        label: 'code-fold-gutter',
    });
    const codeFold = emotion_1.css({
        backgroundColor: variables.codeFoldBackground,
        height: 40,
        fontSize: 14,
        fontWeight: 700,
        label: 'code-fold',
        a: {
            textDecoration: 'underline !important',
            cursor: 'pointer',
            pre: {
                display: 'inline',
            },
        },
    });
    const emptyLine = emotion_1.css({
        backgroundColor: variables.emptyLineBackground,
        label: 'empty-line',
    });
    const marker = emotion_1.css({
        width: 25,
        paddingLeft: 10,
        userSelect: 'none',
        label: 'marker',
        [`&.${diffAdded}`]: {
            pre: {
                color: variables.addedColor,
            },
        },
        [`&.${diffRemoved}`]: {
            pre: {
                color: variables.removedColor,
            },
        },
    });
    const highlightedLine = emotion_1.css({
        background: variables.highlightBackground,
        label: 'highlighted-line',
        [`.${wordAdded}, .${wordRemoved}`]: {
            backgroundColor: 'initial',
        },
    });
    const highlightedGutter = emotion_1.css({
        label: 'highlighted-gutter',
    });
    const gutter = emotion_1.css({
        userSelect: 'none',
        minWidth: 40,
        padding: '0 10px',
        label: 'gutter',
        textAlign: 'right',
        background: variables.gutterBackground,
        '&:hover': {
            cursor: 'pointer',
            background: variables.gutterBackgroundDark,
            pre: {
                opacity: 1,
            },
        },
        pre: {
            opacity: 0.5,
        },
        [`&.${diffAdded}`]: {
            background: variables.addedGutterBackground,
        },
        [`&.${diffRemoved}`]: {
            background: variables.removedGutterBackground,
        },
        [`&.${highlightedGutter}`]: {
            background: variables.highlightGutterBackground,
            '&:hover': {
                background: variables.highlightGutterBackground,
            },
        },
    });
    const emptyGutter = emotion_1.css({
        '&:hover': {
            background: variables.gutterBackground,
            cursor: 'initial',
        },
        label: 'empty-gutter',
    });
    const line = emotion_1.css({
        verticalAlign: 'baseline',
        label: 'line',
    });
    const defaultStyles = {
        diffContainer,
        diffRemoved,
        diffAdded,
        marker,
        highlightedGutter,
        highlightedLine,
        gutter,
        line,
        wordDiff,
        wordAdded,
        wordRemoved,
        codeFoldGutter,
        codeFold,
        emptyGutter,
        emptyLine,
    };
    const computerOverrideStyles = Object.keys(styles)
        .reduce((acc, key) => ({
        ...acc,
        ...{
            [key]: emotion_1.css(styles[key]),
        },
    }), {});
    return Object.keys(defaultStyles)
        .reduce((acc, key) => ({
        ...acc,
        ...{
            [key]: computerOverrideStyles[key]
                ? emotion_1.cx(defaultStyles[key], computerOverrideStyles[key])
                : defaultStyles[key],
        },
    }), {});
};
