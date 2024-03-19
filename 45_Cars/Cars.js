"use strict";
function storeCarInfo(manuFacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manuFacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answere = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['Navigation', 'Power Window'] });
console.log(answere);
