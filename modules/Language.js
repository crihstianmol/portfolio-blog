const getLanguage = () => {
    if (navigator.language.includes('es')) {
        return 'ES'
    } else {
        return 'EN'
    }
};

export { getLanguage }