// --- 1. DOM Content Loaded Event ---
// Ensure the script runs only after the entire HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 2. Element Selection ---
    
    // Select the button element using its ID
    const button = document.getElementById('changeTextButton');
    
    // Select the paragraph element using its ID
    const dynamicText = document.getElementById('dynamicText');
    
    // --- 3. Event Listener Setup ---
    
    // Check if both elements were successfully found before adding listeners
    if (button && dynamicText) {
        
        // Add a 'click' event listener to the button
        button.addEventListener('click', function() {
            
            // --- 4. Logic and DOM Manipulation ---
            
            // Define the new message
            const newMessage = "🥳 The JavaScript worked! This content was updated dynamically using a button click event.";
            
            // Change the text content of the paragraph element
            dynamicText.textContent = newMessage;
            
            // Optional: Change the button's appearance to show it worked
            button.style.backgroundColor = '#28a745'; // Green color
            button.textContent = "Text Changed!";
            button.disabled = true; // Disable the button after the first click
            
            // Log a message to the browser's console for debugging
            console.log('Button clicked! Text updated successfully.');
        });
    } else {
        // This runs if the elements were not found (useful for debugging)
        console.error('Error: Could not find one or more required elements (button or dynamicText). Check your HTML IDs.');
    }
});

// --- 5. A Simple Function Example ---

/**
 * A basic function to greet the user.
 * This function could be called from anywhere in the script.
 */
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to the interactive part of the website.`);
}

// Call the function when the script loads
greetUser('Visitor');
