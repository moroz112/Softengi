function parseAddress(string){

    var match,
        AddressObj = {
        index:false,
        city:false,
        street:false,
        number:false
    };

    if(typeof string !== "string"){
        return AddressObj;
    }

    match = string.match(/^ *\d{5}(?= *(,|$))/im);   // /(?!(г|g|ул|ul|д|d)\.[^,+*\r\n]*?\d{5}[^,+*\r\n]*?,)\d{5}(?= *(,|$))/im  //i need lookbehind
    if (match != null) {
        AddressObj.index = match[0];
    }

    match = string.match(/(г|g)\. [a-zа-я]{2}[^,+*\r\n]*?(?=,|$)/im);  // (г|g) - enables transliteration.  [^,+*\r\n] - may contain much more characters.
    if (match != null) {
        AddressObj.city = match[0];
    }
    match = string.match(/(ул|ul)\. [^,+*\r\n]*?[a-zа-я]{2}[^,+*\r\n]*?(?=(,|$))/im);
    if (match != null) {
        AddressObj.street = match[0];
    }

    match = string.match(/(д|d)\. \d+?[^,+*\r\n]*?(?=,|$)/im);
    if (match != null) {
        AddressObj.number = match[0];
    }

    return AddressObj;

}

module.exports = {
    parseAddress: parseAddress
};