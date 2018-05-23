//enkodowania przyjmowanych danych z szestastkowego na string UTF-8
process.stdin.setEncoding('utf-8');
//nasłuch na zdarzeniu: na zdarzenie .on odczytu readable ma wykonać funkcję
process.stdin.on('readable', function() {
// metoda read() odczytuje co podał użytkownik/wczytaj dane od uzytkownika
    var input = process.stdin.read();
// jesli uzytkownik cos wpisał
    if (input !== null) {

        var instruction = input.toString().trim();
        if (instruction === 'exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            // process.stdout.write('Wrong instruction!\n');
            process.stderr.write('Wrong instruction!\n');
        }
    }
});
