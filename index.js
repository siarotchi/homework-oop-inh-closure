//CLOSURE/modules

function getMathModule(x) {
  let y = 2;

  return (
    (sum = x =>
      x < y ? `The sum is ${x + y} ` : `(sum) ${x} is bigger than ${y}`),
    (substract = x =>
      x > y
        ? `The substract is ${x - y} `
        : `(substract)${x} is too big number`),
    (multiply = x =>
      x === y
        ? `The multiply is ${x * y}`
        : `(multiply) ${x} is not equal to ${y}`),
    (divide = x =>
      x % 2 === 0
        ? x / y
        : `(divide) ${x} is not divisible by 2 without remainder`)
  );
}

// PROTOTYPES
const Music = function(pitch, timbre, volume) {
  this.pitch = pitch;
  this.timbre = timbre;
  this.volume = volume;
  this.getVolume = () => console.log(this.volume);
  this.makeLouder = vol => console.log(this.volume + vol);
  this.makeQuieter = vol => console.log(this.volume - vol);
};
const rock = new Music("high", "sharp", 10);
const chill = new Music("low", "soft", 2);

rock.makeLouder(3);
chill.makeQuieter(1);
rock.getVolume();

// #2
const Music = function(pitch, timbre, volume) {
  this.pitch = pitch;
  this.timbre = timbre;
  this.volume = volume;
};

Music.prototype.getVolume = function() {
  return console.log(this.volume);
};
Music.prototype.makeLouder = function(vol) {
  return console.log(this.volume + vol);
};
Music.prototype.makeQuieter = function(vol) {
  return console.log(this.volume - vol);
};

const Chill = function(pitch, timbre, volume) {
  Music.call(this, pitch, "soft", volume);
  this.timbre = timbre;
};
const Rock = function(pitch, timbre, volume) {
  Music.call(this, "high", timbre, volume);
  this.pitch = pitch;
};

Object.setPrototypeOf(Chill.prototype, Music.prototype);
Object.setPrototypeOf(Rock.prototype, Music.prototype);

const jazz = new Chill("middle", "soft", 3);
jazz.getVolume();
jazz.makeQuieter(1);

const metal = new Rock("extremeHigh", "sharp", 150);
metal.getVolume();
metal.makeLouder(1000);

// OOP

class Music {
  constructor(pitch, timbre, volume) {
    this.pitch = pitch;
    this.timbre = timbre;
    this.volume = volume;
  }

  getVolume() {
    return console.log(this.volume);
  }
  getPitch() {
    return console.log(this.pitch);
  }
  makeQuieter(vol) {
    return console.log(this.volume - vol);
  }
  makeLouder(vol) {
    console.log(this.volume + vol);
  }
}

class Chill extends Music {
  constructor(pitch, timbre, volume) {
    super(pitch, "soft", volume);
    this.timbre = timbre;
  }
}

class Metal extends Music {
  constructor(pitch, timbre, volume) {
    super("extreamlyHigh", timbre, volume);
    this.pitch = pitch;
  }
}
let lp = new Metal("high", "sharp", 110);
lp.getVolume();
lp.makeLouder(50);
let raga = new Chill("low", "soft", 2);
raga.getPitch();
raga.makeLouder(5);
