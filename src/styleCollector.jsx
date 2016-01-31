let canUseDOM = Boolean(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

let css = [];

export let collectOrRender = (styles) => {
    if (canUseDOM === true) {
        return styles._insertCss();
    }

    css.push(styles._getCss());
};

export let renderStyles = () => {
    return css.join('');
};
