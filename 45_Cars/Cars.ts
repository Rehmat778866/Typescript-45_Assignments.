function storeCarInfo(manuFacturer: string, modelName: string, ...extraOption: { [key : string]: any} [] ):
Object {
const carInfo = {
    manuFacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
}
return carInfo;
};

let answere = storeCarInfo('Honda', 'Civic',{color: 'Black'},{features: ['Navigation', 'Power Window']})
console.log(answere);