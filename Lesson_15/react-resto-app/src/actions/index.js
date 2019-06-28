const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuCancelled = () => {
    return {
        type: 'MENU_CANCELLED'
    };
};

export {
    menuLoaded,
    menuRequested,
    menuCancelled
};