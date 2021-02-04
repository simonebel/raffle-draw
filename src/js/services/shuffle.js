export default class Shuffle {
  constructor(NAMES) {
    this.NAMES = ['Boris', 'Simon', 'Jonathan', 'Ted', 'Louis', 'Marin', 'Maxime', 'Zitoun', 'Bouga'];
  }

  shuffle() {
    let currentIndex = this.NAMES.length;
    let randomIndex, temporaryValue;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.NAMES[currentIndex];
      this.NAMES[currentIndex] = this.NAMES[randomIndex];
      this.NAMES[randomIndex] = temporaryValue;
    }

    return this.NAMES;
  }
};
