var element = document.getElementById('element');
var currentSize = 'small';
var currentShape = 'square';

function changeSize(size) {
    currentSize = size;
    if (size === 'small') {
        element.style.width = currentShape === 'square' ? '100px' : '200px';
        element.style.height = currentShape === 'square' ? '100px' : '100px';
    } else if (size === 'big') {
        element.style.width = currentShape === 'square' ? '200px' : '400px';
        element.style.height = currentShape === 'square' ? '200px' : '200px';
    }
}

function changeShape(shape) {
    currentShape = shape;
    if (shape === 'square') {
        element.style.width = currentSize === 'small' ? '100px' : '200px';
        element.style.height = '100px';
    } else if (shape === 'rectangle') {
        element.style.width = currentSize === 'small' ? '200px' : '400px';
        element.style.height = '100px';
    }
}