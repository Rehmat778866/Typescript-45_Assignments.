function makeSandwich (item: string[]){
    console.log('\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your Sandwich !\n');
}
makeSandwich(['Cheese','Burger','Juice']);
makeSandwich(['Turkey','Paris']);
makeSandwich(['Peanut butter','Jelly']);