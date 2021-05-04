const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let paragraph = '';
let name = '';
r1.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  paragraph += `${answer}, `;
  name = answer;

  r1.question('What\'s an activity you like doing? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer} `);
    paragraph += `loves ${answer} `;
    
    r1.question('What do you listen to while doing that? ', (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
      paragraph += `while listening to ${answer}. `;
      
      r1.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        paragraph += `${name}'s favourite meal is ${answer} `;
        
        r1.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          // TODO: Log the answer in a database
          console.log(`Thank you for your valuable feedback: ${answer}`);
          paragraph += `and ${name}'s favourite thing to eat during that meal is ${answer}. `;
          
          r1.question('Which sport is your absolute favourite? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
            paragraph += `${name} prefers ${answer} over any other sport, `;
            
            r1.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${answer}`);
              paragraph += `and is amazing at${answer}.`;
              console.log(paragraph);
              r1.close();
            });
          
          });
        
        });
      
      });
    
    });
  
  });

});


