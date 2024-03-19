let magician : string[] = ['Hattar potter', 'Hermione Granger', 'Ron wasley', 'Albus Dumbledore'];
function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);