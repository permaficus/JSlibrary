indexOf = (data,target) => {
    for (let i in data){
        if (data[i] == target) {
            return +i;
        }
    }
    return -1;
}

lastIndexOf = (data,target) => {
    for (let i=data.length-1;i>0;i--) {
        if (data[i] == target) {
            return +i;
        }
    }
    return -1;
}

substr = (string,start,end) => {
    let newString = ''
    for (let i=start;i<end;i++) {
        newString += string[i];
    }
    return newString;
}

split = (string,delimiter) => {
    let result = [], cacheString = '';
    for (let i=0;i<string.length;i++) {
        if (delimiter !== '') {
            if (string[i] !== delimiter) {
                cacheString += string[i]
            } else {
                result.push(cacheString);
                cacheString = ''
            }
        } else {
            result.push(string[i])
        }
    }
    if (delimiter !== '') {result.push(cacheString);}
    return result;
}

// test case
console.log(substr('edan@gmail.com',0,indexOf('edan@gmail.com','@')));
console.log(split('kentang-gandum-jeruk-anggur-durian','-'))