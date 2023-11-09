document.addEventListener('DOMContentLoaded', function() {
    const plannerForm = document.getElementById('planner-form');
    plannerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get user input data
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const destination = document.getElementById('destination').value;
        const numPeople = document.getElementById('num-people').value;

        // You would typically send this data to your backend for AI planning here.
        // For this example, we'll just display the data.
        alert(`Plan a trip from ${startDate} to ${endDate} for ${numPeople} people to ${destination}`);
    });
});
