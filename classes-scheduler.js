// // Import the required libraries
// const readline = require('readline');
// const moment = require('moment');

// // Create a readline interface for user input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Define a function to get user input
// function getUserInput() {
//     // Use readline to ask the user for input
//     rl.question('Enter the number of classes you want per week (2-4): ', (input) => {
//         try {
//             // Attempt to parse the input as an integer
//             const numberOfClasses = parseInt(input);

//             // Check if the input is a single digit between 2 and 4
//             if (input.length !== 1 || numberOfClasses < 2 || numberOfClasses > 4) {
//                 console.log('Input is invalid. Please enter a single digit between 2 and 4.');
//                 getUserInput(); // Ask for input again
//                 return;
//             }

//             // Check if the input is not a number
//             if (isNaN(numberOfClasses)) {
//                 throw new Error('Error: Input is not a number.');
//             }

//             // If the input is valid, log it
//             console.log(`You entered ${numberOfClasses} classes per week.`);

//             // Calculate and schedule the class dates for the next four weeks
//             scheduleClasses(numberOfClasses);

//             rl.close();
//         } catch (error) {
//             console.log(error.message);
//             getUserInput(); // Ask for input again
//         }
//     });
// }

// let scheduledClasses = 0; // Initialize the class count

// function scheduleClasses(numberOfClasses) {
//     // Initialize the current date, starting from the next Monday
//     let currentDate = moment().startOf('week').add(7, 'days');

//     // Indicate that classes are being scheduled
//     console.log(`Class Schedule for the next four weeks:`);

//     for (let week = 1; week <= 4; week++) {
//         console.log(`Week ${week}:`);
        
//         // Initialize a counter for classes scheduled in the current week
//         let classesScheduledThisWeek = 0;

//         // Enter a loop to schedule classes for the current week
//         while (classesScheduledThisWeek < numberOfClasses) {
//             // Check if the current day is a weekday (Monday to Friday)
//             if (currentDate.day() >= 1 && currentDate.day() <= 5) {
//                 // Increment the scheduled class count for the current week
//                 classesScheduledThisWeek++;

//                 // Increment the total scheduled class count
//                 scheduledClasses++;

//                 // Print the class number, the formatted date, and the day of the week
//                 console.log(`Class ${scheduledClasses}: ${currentDate.format('DD-MM-YYYY')}   (${currentDate.format('dddd')})`);
//             }

//             // Move the date to the next day for scheduling the next class
//             currentDate.add(1, 'day');
//         }

//         // Move to the next Monday for the next week
//         currentDate = currentDate.add(3, 'days');
//     }
// }

// getUserInput();



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

let scheduledClasses = 0; // Initialize the class count

function scheduleClasses(numberOfClasses) {
    // Initialize the current date, starting from the day following execution
    const currentDate = moment().add(1, 'day');

    // Calculate the number of days remaining in the current week (Monday to Friday)
    const daysInCurrentWeek = 5 - currentDate.day();

    // Check if there are enough days to schedule the requested classes
    if (numberOfClasses > daysInCurrentWeek) {
        console.log('Not enough days left in the current week for the specified number of classes.');
        
        // Initialize the current date, starting from the next Monday
        let currentDate = moment().startOf('week').add(7, 'days');

        // Indicate that classes are being scheduled
        console.log(`Class Schedule for the next four weeks:`);

        for (let week = 1; week <= 4; week++) {
            console.log(`Week ${week}:`);
        
            // Initialize a counter for classes scheduled in the current week
            let classesScheduledThisWeek = 0;

            // Enter a loop to schedule classes for the current week
            while (classesScheduledThisWeek < numberOfClasses) {
                // Check if the current day is a weekday (Monday to Friday)
                if (currentDate.day() >= 1 && currentDate.day() <= 5) {
                    // Increment the scheduled class count for the current week
                    classesScheduledThisWeek++;

                    // Increment the total scheduled class count
                    scheduledClasses++;

                    // Print the class number, the formatted date, and the day of the week
                    console.log(`Class ${scheduledClasses}: ${currentDate.format('DD-MM-YYYY')}   (${currentDate.format('dddd')})`);
                }

                // Move the date to the next day for scheduling the next class
                currentDate.add(1, 'day');
            }

            // Move to the next Monday for the next week
            currentDate = currentDate.add(3, 'days');
        }
        
    } else {
        // If there are enough days, indicate that classes are being scheduled
        console.log(`Class Schedule for the next four weeks:`);

        for (let week = 1; week <= 4; week++) {
            console.log(`Week ${week}:`);
            
            // Initialize a counter for classes scheduled in the current week
            let classesScheduledThisWeek = 0;
            
            // Reset the currentDate and scheduledClasses at the beginning of each week
            if (week > 1) {
                currentDate.startOf('week').add(7 * (week - 1), 'days');
                scheduledClasses = 0; // Reset the class count
            }

            // Enter a loop to schedule classes for the current week
            while (classesScheduledThisWeek < numberOfClasses) {
                // Check if the current day is a weekday (Monday to Friday)
                if (currentDate.day() >= 1 && currentDate.day() <= 5) {
                    // Increment the scheduled class count for the current week
                    classesScheduledThisWeek++;
                    
                    // Increment the total scheduled class count
                    scheduledClasses++;

                    // Print the class number, the formatted date, and the day of the week
                    console.log(`Class ${scheduledClasses}: ${currentDate.format('DD-MM-YYYY')}   (${currentDate.format('dddd')})`);
                }

                // Move the date to the next day for scheduling the next class
                currentDate.add(1, 'day');
            }
        }
    }
}

getUserInput()