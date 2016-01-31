const canUseDOM = Boolean(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

let css = [];

export const collectOrRender = (styles) => {
    if (canUseDOM === true) {
        return styles._insertCss();
    }

    css.push(styles._getCss());
};

export const renderStyles = () => {
    return css.join('');
};
