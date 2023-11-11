// Assuming you have an array of project details
const projectDetails = [
    { name: 'Project 1', link: 'ozone.html', imageUrl: '../img/portfolio/social-media/ozone/1.jpg'},
    { name: 'Project 2', link: 'ith.html', imageUrl: '../img/portfolio/social-media/ith/1.jpg' },
    { name: 'Project 2', link: 'wellness.html', imageUrl: '../img/portfolio/branding/wellness/main.png' },
    // Add more projects as needed
];

// Function to get the current page name
function getCurrentPageName() {
    const pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
}

// Remove the current page from projectDetails
const currentPage = getCurrentPageName();
const indexToRemove = projectDetails.findIndex(project => project.link === currentPage);

if (indexToRemove !== -1) {
    projectDetails.splice(indexToRemove, 1);
}
// Shuffle the array to randomize the order
shuffleArray(projectDetails);

// Update the HTML dynamically
const nextProjectSection = document.getElementById('nextProjectSection');
const nextProjectLink = document.getElementById('nextProjectLink');
const nextProjectBgImg = document.getElementById('nextProjectBgImg');
const projectName = document.getElementById('nextProjectCopyCap').querySelector('span');

// Set the link and image source
nextProjectLink.href = projectDetails[0].link;
nextProjectBgImg.setAttribute('data-background', projectDetails[0].imageUrl);

// Display the project name
projectName.textContent = projectDetails[0].name;

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
