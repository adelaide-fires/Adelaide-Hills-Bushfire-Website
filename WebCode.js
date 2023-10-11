// Add an event listener that waits for the document to load completely
document.addEventListener('DOMContentLoaded', function () {

    // Get all checkboxes from the document
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // For each checkbox...
    checkboxes.forEach(checkbox => {
        // Retrieve its state from localStorage
        let checkboxState = localStorage.getItem(checkbox.id);

        // Set the checkbox's checked state based on its stored state in localStorage
        checkbox.checked = (checkboxState === 'true');
    });

    // For each checkbox...
    checkboxes.forEach(checkbox => {
        // Add an event listener for when its state changes
        checkbox.addEventListener('change', function () {
            // Store the new state in localStorage
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Get all Clear All buttons from the document
    let clearButtons = document.querySelectorAll('.clear-btn');

    // For each Clear All button...
    clearButtons.forEach(btn => {
        // Add an event listener for when it is clicked
        btn.addEventListener('click', function () {
            // Find the closest parent element with the .checklist class
            let parentDiv = btn.closest('.checklist');

            // Get all checkboxes within that parent div
            let checkboxesInDiv = parentDiv.querySelectorAll('input[type="checkbox"]');

            // For each checkbox in the parent div...
            checkboxesInDiv.forEach(checkbox => {
                // Uncheck the checkbox
                checkbox.checked = false;

                // Update its state in localStorage to unchecked
                localStorage.setItem(checkbox.id, false);
            });
        });
    });
});
