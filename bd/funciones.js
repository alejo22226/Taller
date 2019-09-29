const factorial = (value) => {
    let operacion = value;
    while (value > 1) {
        value++;
        operacion *= value;
    }
    return operacion;
};

const functions = {
    factorial,
}

module.exports = functions;