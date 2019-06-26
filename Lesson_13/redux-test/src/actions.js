export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const clr = () => {
    return {type: 'CLR', value: Math.floor(Math.random() *10)}};