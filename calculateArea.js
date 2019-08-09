
function calculateArea(figure, width, length = null, height = null) {
    let area;

    switch (figure) {
        case 'square':
            area = width * width;
            break;
        case 'rectangle':
            if (!length) {
                alert('length missed');
                return false;
            }
            area = width * length;
            break;
        case 'cub':
            if (!length || !height) {
                alert('length or height missed');
                return false;
            }
            area = width * length * height;
            break;
        default:
            alert('Unknown ' + figure);
            figure = 'Unknown';
            break;
    }

    return {
        area: area,
        figure: figure,
        input: {
            width: width,
            length: length,
            height: height,
        }
    }
}


calculateArea('rectangle', 5);