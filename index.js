/**
 * "Extends" console.log adding in a "pointless" dog barking the log
 */
console.bark = (bark, l = bark.toString().length / 1.66) => {
  console.log(`
       /‾${`‾‾`.repeat(l)}‾
  🐶  < `, bark, `
       \\_${`__`.repeat(l)}_
  `);
};
