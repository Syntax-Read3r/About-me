function getCity() {
    let res = prompt('So, in what city you do you live in?');

    if (res !== 'Norwich City' || res !== 'norwich city' || res !== 'norwich' || res !== 'Norwich') {
        return document.write('don\'t')
    } else {
        return document.write('actually')
    }
}

getCity();