for (var i in statistics) {
    if (`${i}`[0] == 'r' ) {
        console.log(`${statistics[i]}`);
    } else if(`${statistics[i]}` % 2 == 1) {
        console.log(`${statistics[i]}`);
    }
}