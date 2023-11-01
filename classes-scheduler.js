// Import the required libraries
const readline = require('readline');
const moment = require('moment');

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Define a function to get user input
function getUserInput() {
    // Use readline to ask the user for input
    rl.question('Enter the number of classes you want per week (2-4): ', (input) => {
        try {
            // Attempt to parse the input as an integer
            const numberOfClasses = parseInt(input);

            // Check if the input is a single digit between 2 and 4
            if (input.length !== 1 || numberOfClasses < 2 || numberOfClasses > 4) {
                console.log('Input is invalid. Please enter a single digit between 2 and 4.');
                getUserInput(); // Ask for input again
                return;
            }

            // Check if the input is not a number
            if (isNaN(numberOfClasses)) {
                throw new Error('Error: Input is not a number.');
            }

            // If the input is valid, log it
            console.log(`You entered ${numberOfClasses} classes per week.`);

            // Calculate and schedule the class dates for the next four weeks
            scheduleClasses(numberOfClasses);

            rl.close();
        } catch (error) {
            console.log(error.message);
            getUserInput(); // Ask for input again
        }
    });
}

function scheduleClasses(numberOfClasses) {
    const currentDate = moment().add(1, 'day'); // Start from the day npms
    const weeksToSchedule = 4;


    // Generate random days and sort them before the loop
    const randomDays = generateRandomDays(numberOfClasses); // Generate random days for the week
    const sortedDays = sortArray([...randomDays]); // Sort the days for the week
    // Schedule classes for multiple weeks
    for (let week = 1; week <= weeksToSchedule; week++) {
    console.log(`Week ${week}:`);

        // Schedule classes for the current week
        for (let i = 0; i < numberOfClasses; i++) {

            const classDate = currentDate.clone().add(sortedDays[i], 'day');
            console.log(`Class ${i + 1}: ${classDate.format('DD-MM-yyyy (dddd)')}`);
   
        }

        currentDate.add(1, 'week')
    }

}



function generateRandomDays(numberOfDays) {
    const randomDays = [];
    const daysInWeek = [0, 1, 2, 3, 4, 5, 6];

    for (let i = 0; i < numberOfDays; i++) {
        // Generate a random index within the remaining available days
        const randomIndex = Math.floor(Math.random() * daysInWeek.length);

        // Add the selected day to randomDays
        randomDays.push(daysInWeek[randomIndex]);

        // Remove the selected day from daysInWeek
        daysInWeek.splice(randomIndex, 1);
    }

    return randomDays;
}


function sortArray(array) {
    array.sort((a, b) => a - b); // Sort the array indecies in ascending order
    return array;
}
getUserInput();