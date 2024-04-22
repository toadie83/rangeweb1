const allButtons = document.querySelectorAll('button');
const rowContainers = document.querySelectorAll('.row-buttons-container');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Close all row containers except the one for the corresponding primary button
        rowContainers.forEach(container => {
            if (container.id !== button.id.replace('Button', 'Buttons')) {
                container.style.display = 'none';
            }
        });

        // Remove the "clicked" class from all buttons
        allButtons.forEach(btn => {
            btn.classList.remove('clicked');
        });

        // Add the "clicked" class to the clicked button
        button.classList.add('clicked');

        // Handle row buttons display directly
        if (!button.classList.contains('primary-button')) {
            const rowId = button.parentElement.id;
            const rowContainer = document.getElementById(rowId);
            rowContainer.style.display = 'flex';
        }
    });
});

function toggleRow(rowId) {
    const rowButtons = document.getElementById(rowId + 'Buttons');

    if (rowButtons.style.display === 'none') {
        rowButtons.style.display = 'flex';
    } else {
        rowButtons.style.display = 'none';
    }
}

function displayImage(imagePath) {
    const image = document.getElementById('image');
    image.src = imagePath;
    document.getElementById('image-container').style.display = 'block';
}