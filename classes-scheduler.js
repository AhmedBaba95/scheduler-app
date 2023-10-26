const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter the number of classes you want per week (2-4): ', (input) => {
        // Use a try-catch block to check if the input is a number
        try {
        const numberOfClasses = parseInt(input);

        if (numberOfClasses < 2 || numberOfClasses > 4) {
            console.log('Error: Input must be between 2 and 4.');
            getUserInput(); // Ask for input again
            return;
         }

        // If the input is valid, log it and close the readline interface
        console.log(`You entered ${numberOfClasses} classes per week.`);
        rl.close();
        } catch (error) {
            console.log('Error: Input is not a number.');
            getUserInput(); // Ask for input again
        }
    });
}

getUserInput();
