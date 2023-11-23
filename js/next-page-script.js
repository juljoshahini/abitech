// Assuming you have an array of project details
const projectDetails = [
    { name: 'NEXT PROJECT', link: 'ith.html', imageUrl: '../img/portfolio/social-media/ith/ith-social-media.png' },
    { name: 'NEXT PROJECT', link: 'ozone.html', imageUrl: '../img/portfolio/social-media/ozone/1.jpg'},
    { name: 'NEXT PROJECT', link: 'wellness.html', imageUrl: '../img/portfolio/branding/wellness/main.png' },
    { name: 'NEXT PROJECT', link: 'la-griffe.html', imageUrl: '../img/portfolio/branding/Lagriffe/14.jpg' },
    { name: 'NEXT PROJECT', link: 'valore-celeste.html', imageUrl: '../img/portfolio/branding/Valore/valore6.png' },
    { name: 'NEXT PROJECT', link: 'dr-invitro-home.html', imageUrl: '../img/portfolio/social-media/drinvitro/1.jpg' },
    { name: 'NEXT PROJECT', link: 'dalux.html', imageUrl: '../img/portfolio/social-media/Dalux/social-media-dalux.png' },
    { name: 'NEXT PROJECT', link: 'drupa.html', imageUrl: '../img/portfolio/social-media/drupa/drupa-testimonials.jpg' },
    { name: 'NEXT PROJECT', link: 'aff.html', imageUrl: '../img/portfolio/web-design/aff/aff-main.jpg' },
    { name: 'NEXT PROJECT', link: 'alc.html', imageUrl: '../img/portfolio/web-design/alc/2.png' },
    // Add more projects as needed
];

// Function to get the current page name
function getCurrentPageName() {
    const pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
}

// Remove the current page from projectDetails
const currentPage = getCurrentPageName();
const indexToRemove = projectDetails.findIndex(project => project.link.includes(currentPage));

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
console.log('Next Project:', nextProjectSection, nextProjectLink, nextProjectBgImg, projectName);
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
