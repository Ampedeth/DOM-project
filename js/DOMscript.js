document.body.style.background = '#483D8B';
//creating div
const body = document.body;
const divMainInfo = document.createElement('div');
divMainInfo.classList.add('divInfo')
divMainInfo.style.maxWidth = '100%'
body.appendChild(divMainInfo);

//creating header(H1)
const header = document.createElement('h1');
header.textContent = 'My pet project on the topic DOM';
header.style = 'text-align:center'
header.style.color = '#FF4500';
divMainInfo.insertAdjacentElement('beforebegin', header);

//-----------------------//

//creating main information

//creating special div for mineImg and pInfo to make the text flow around the img
const textAndImage = document.createElement('div');
textAndImage.style.display = 'flex';
textAndImage.style.flexWrap = 'wrap';
textAndImage.style.maxWidth = '100%';
//textAndImage.style.alignItems = 'center';

//creating button for changing photos
const buttonChangeImg = document.createElement('button');
buttonChangeImg.textContent = '>';
//buttonChangeImg.style.borderRadius = '20px';
Object.assign(buttonChangeImg.style,{
    height: '20px',
    margin: '90px 0px 0px 0px',
    color: '#FF8C00',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
});
buttonChangeImg.addEventListener('mouseover', () => {buttonChangeImg.style.background = 'rgba(0, 0, 0, .2)'});
buttonChangeImg.addEventListener('mouseout', () => {buttonChangeImg.style.background = 'transparent'});

function show (){
    switch (true) {
        case mineImg.style.display === 'block':
            mineImg.style.display = 'none';
            mineImg2.style.display = 'block';
            break;
        case mineImg2.style.display === 'block':
            mineImg2.style.display = 'none';
            mineImg3.style.display = 'block';
            break;
        case mineImg3.style.display === 'block':
            mineImg3.style.display = 'none';
            mineImg4.style.display = 'block';
            break;
        case mineImg4.style.display === 'block':
            mineImg4.style.display = 'none';
            mineImg5.style.display = 'block';
            break;
        case mineImg5.style.display === 'block':
            mineImg5.style.display = 'none';
            mineImg6.style.display = 'block';
            break;
            default:
                mineImg6.style.display = 'none';
                mineImg.style.display = 'block';
        }
    }
buttonChangeImg.addEventListener('click', show);



//creating "p" with information
const pInfo = document.createElement('p');
pInfo.style.marginLeft = '10px'
pInfo.innerText = `Hi, I'm Anthony, and while learning the DOM I'll be practicing here,
I don't think this code will be amazing or anything, but it's better than nothing, I hope it works out.
Maybe in future it will looks like Resume.`
pInfo.style.color = '#FF8C00'

//creating separator for pInfo and ing
const separator = document.createElement('div');
separator.style.width = '20px';
separator.style.height = '20px';

//adding img
const mineImg = document.createElement('img');
mineImg.src = 'photo_2023-11-08_08-39-53.jpg';
mineImg.width = 202;
mineImg.style.margin = '10px 10px';

mineImg.classList.add('minePhoto');
//adding another img
const mineImg2 = document.createElement('img');
mineImg2.src = 'photo_2023-11-14_10-17-25.jpg';
mineImg2.width = 202;
mineImg2.style.margin = '10px 10px';
mineImg2.style.display = 'none';

//adding more img (mineImg3)
const mineImg3 = document.createElement('img');
mineImg3.src = 'photo_2023-11-12_18-24-51.jpg';
mineImg3.width = 202;
mineImg3.style.margin = '10px 10px';
mineImg3.style.display = 'none';

//adding mineImg4
const mineImg4 = document.createElement('img');
mineImg4.src = 'image1.jpg';
mineImg4.width = 202;
mineImg4.style.margin = '10px 10px';
mineImg4.style.display = 'none';

//adding mineImg5
const mineImg5 = document.createElement('img');
mineImg5.src = 'image2.jpg';
mineImg5.width = 202;
mineImg5.style.margin = '10px 10px';
mineImg5.style.display = 'none';

//adding nimeImg6
const mineImg6 = document.createElement('img');
mineImg6.src = 'image3.jpg';
mineImg6.width = 202;
mineImg6.style.margin = '10px 10px';
mineImg6.style.display = 'none';

//---------------------//
textAndImage.appendChild(mineImg6);  
textAndImage.appendChild(mineImg5);
textAndImage.appendChild(mineImg4);
textAndImage.appendChild(mineImg3);                                     
textAndImage.appendChild(mineImg2);
textAndImage.appendChild(mineImg);
textAndImage.appendChild(buttonChangeImg)
textAndImage.appendChild(separator);
textAndImage.appendChild(pInfo);
divMainInfo.appendChild(textAndImage);

//adding outline
textAndImage.style.outlineStyle = 'solid';
textAndImage.style.outlineColor = '#FFA500';

//---------------------------------//

//adding div for Contact Info and Steam's info
const divContAndSteam = document.createElement('div')
//divContAndSteam.style.display = 'flex';
body.appendChild(divContAndSteam);

//adding contact info using <ul> and <il> and link to Steam, Git account and Spotify's playlist
//Link to Steam
const aSteam = document.createElement('a');
aSteam.href = 'https://steamcommunity.com/profiles/76561199374220196/';
aSteam.innerHTML = 'Steam link';
aSteam.target = '_blank';
aSteam.style.color = '#FF8C00';

//Link to Git
const aGit = document.createElement('a');
aGit.href = 'https://github.com/Ampedeth';
aGit.innerHTML = 'Git link';
aGit.target = '_blank';
aGit.style.color = '#FF8C00';

//Link to Spotify's playlist
const aSpotify = document.createElement('a');
aSpotify.href = 'https://open.spotify.com/playlist/0dNS75EMxQ7pO7zQ4ZFAyn?si=50cc9f71c2fe4266';
aSpotify.innerHTML = "Spotify's link";
aSpotify.target = '_blank';
aSpotify.style.color = '#FF8C00';

//Special Link
aRick = document.createElement('a');
aRick.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
aRick.innerHTML = "Don't press me"
aRick.target = '_blank';
aRick.style.color = '#FF8C00';

//creating div for outline for <ul>
const divOutlineList = document.createElement('div');
body.appendChild(divOutlineList)
divOutlineList.style.float = 'left';
divOutlineList.style.width = '50%';

//adding another outline
divOutlineList.style.outlineStyle = 'solid';
divOutlineList.style.outlineColor = '#FFA500';
divOutlineList.style.height = '230px';
//<ul> and <li>
const contInfo = document.createElement('h3');
contInfo.innerText = '↓Contact Information↓'
contInfo.style.color = '#FF4500';
contInfo.style.margin = '10px 0px 0px 50px'
divOutlineList.appendChild(contInfo);
const ulContactInfo = document.createElement('ul');
ulContactInfo.style.color = '#CD5C5C'
ulContactInfo.classList.add('contactInfo')
ulContactInfo.style.padding = '0px 0px 0px 0px'
ulContactInfo.innerHTML =
`<ul>
    <li>Tel. number: +380 98 808 35 23</li>
    <li>E-mail:  gav.fadt@gmail.com</li>
    <li>Telegram:  Tranda15</li>
    <li>Discord:  free.rc</li>
    <li>Steam:  ${aSteam.outerHTML}</li>
    <li>GitHub:  ${aGit.outerHTML}</li>
    <li>Spotify:  ${aSpotify.outerHTML}</li>
    <li>Credit Card Info:  5168 7520 2030 4500</li>
    <li>${aRick.outerHTML}</li>
</ul>`;
divOutlineList.appendChild(ulContactInfo);

//adding Steam's info
const divSteamsInfo = document.createElement('div');
Object.assign(divSteamsInfo.style,{
    width: '50%',
    height: '230px',
    float: 'right',
    outlineStyle: 'solid',
    outlineColor: '#FFA500',
    display: 'flex',
    alignItems: 'center',
});
body.appendChild(divSteamsInfo);

const steamStatsImg = document.createElement('img');
steamStatsImg.src = 'image.jpg';
Object.assign(steamStatsImg.style, {
    width: '100%',
    height: '100%',
    //scale: '100%',
    objectFit: 'fill',
});
divSteamsInfo.appendChild(steamStatsImg);

divContAndSteam.appendChild(divOutlineList);
divContAndSteam.appendChild(divSteamsInfo);