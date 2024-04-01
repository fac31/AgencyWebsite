import {data} from "/javascript/data.js";

 // Append memberDiv to a parent container
const createImage = (obj) => {
    //Create elements
    const memberDiv = document.createElement('div');
    const nameContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const nameSpan = document.createElement('span');
    const infoDiv = document.createElement('div');
    const likesParagraph = document.createElement('p');
    const dislikesParagraph = document.createElement('p');
    const bestPalParagraph = document.createElement('p');

    // Assign classes
    memberDiv.classList.add('team-member');
    nameContainer.classList.add('name-container')
    profilePic.classList.add('profile-pic')
    nameSpan.classList.add('name')
    infoDiv.classList.add('info')
    likesParagraph.classList.add('p')
    dislikesParagraph.classList.add('p')
    bestPalParagraph.classList.add('p')


    //give elements content

    profilePic.src = obj.imgSrc;
    profilePic.alt = obj.alt;    
    nameSpan.textContent = obj.name;
    likesParagraph.textContent = obj.likes;
    dislikesParagraph.textContent = obj.dislikes;
    bestPalParagraph.textContent = obj.bestPal;

    //Append elements to parent
    nameContainer.appendChild(profilePic);
    nameContainer.appendChild(nameSpan);
    infoDiv.appendChild(likesParagraph);
    infoDiv.appendChild(dislikesParagraph);
    infoDiv.appendChild(bestPalParagraph);
    memberDiv.appendChild(nameContainer);
    memberDiv.appendChild(infoDiv);

    // return memberDiv;

}

// Call the createImage function for each team member
// data.forEach((member) => {
//     createImage(member)
// })

const initTeamMembers = () => {
    // Find the existing team container or create one if it doesn't exist
    let parentDiv = document.querySelector('.team-container');
    if (!parentDiv) {
        parentDiv = document.createElement('div');
        parentDiv.classList.add('team-container');
        document.body.appendChild(parentDiv); // Append to body or another suitable parent
    }

    // Append team members
    data.forEach((member) => {
        const memberDiv = createImage(member);
        parentDiv.appendChild(memberDiv);
    });
}

// Initialize team members when the DOM is ready
document.addEventListener('DOMContentLoaded', initTeamMembers);