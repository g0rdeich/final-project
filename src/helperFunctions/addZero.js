function addZero(arg) {
    let num = parseInt(arg);
    if(num < 10) {
        return '0' + arg;
    } else {
        return arg;
    }
}

export default addZero;