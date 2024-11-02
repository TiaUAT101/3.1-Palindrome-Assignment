// Function to check if the entered string is a palindrome
function checkPalindrome() {
    // Get the value from the input field
    var input = document.getElementById("userInput").value; // Retrieve input
    input = input.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lower case

    // Check if the input string is the same forwards and backwards
    var isPalindrome = input === input.split('').reverse().join(''); // Palindrome check

    // Display the result to the user
    if (isPalindrome) {
        document.getElementById("result").innerHTML = "Yes, it's a palindrome! Congrats!"; // If true
    } else {
        document.getElementById("result").innerHTML = "No, it's not a palindrome. Please try again!"; // If false
    }
}
