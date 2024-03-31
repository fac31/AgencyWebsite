import {data} from "/javascript/data.js";

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

    profilePic.src = member.imgSrc;
    profilePic.alt = member.alt;    
    nameSpan.textContent = member.name;
    likesParagraph.textContent = member.likes;
    dislikesParagraph.textContent = member.dislikes;
    bestPalParagraph.textContent = member.bestPal;

    //Append elements to parent
    nameContainer.appendChild(profilePic);
    nameContainer.appendChild(nameSpan);
    infoDiv.appendChild(likesParagraph);
    infoDiv.appendChild(dislikesParagraph);
    infoDiv.appendChild(bestPalParagraph);
    memberDiv.appendChild(nameContainer);
    memberDiv.appendChild(infoDiv);


    // Append memberDiv to a parent container
    const parentDiv = document.getElementById('team-container');
    team-container.appendChild(memberDiv);
}

// Call the createImage function for each team member
data.forEach((member) => {
    createImage(member)
})