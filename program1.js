process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
// metoda read() odczytuje co podał użytkownik/wczytaj dane od uzytkownika
    var input = process.stdin.read();
// jesli uzytkownik cos wpisał
    if (input !== null) {

      var instruction = input.toString().trim();
      switch (instruction) {
        case 'exit':
          process.stdout.write('Quitting app!\n');
          console.log(process.version);
          console.log(process.env.LANG);
          process.exit();
        default:
          process.stderr.write('Wrong instruction!\n');
          console.log(process.version);
          console.log(process.env.LANG);
      }

    }
});
