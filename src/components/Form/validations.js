
const regexCharacters = /^[A-Za-z]{3,15}$/
const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
const integerRegex = /^([1-9]|[1-9]\d|100)$/; // Esta expresión valida números enteros entre 1 y 100

export function Validations(data){
    const errors = {}

    if(!regexCharacters.test(data.name)) errors.name = "Only alphabetic with length between 3 and 15";
    if(!urlRegex.test(data.image)) errors.image = "Image must be a URL";
    if(!integerRegex.test(data.hp))errors.hp = 'Integer number between 1 and 100';
    if(!integerRegex.test(data.attack))errors.attack = 'Integer number between 1 and 100';
    if(!integerRegex.test(data.defense))errors.defense = 'Integer number between 1 and 100';
    if(data.speed < 0 || data.speed >100) errors.speed = 'Integer number between 0 and 100'
    if(data.height < 0 || data.height >100 ) errors.height = 'Integer number between 0 and 100'
    if(data.weight < 0 || data.weight >100) errors.weight = 'Integer number between 0 and 100'
    if(data.types.length < 1) errors.types = 'Select at least 1 type'

    return errors;
}