function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profile-container');

    const userProfilePic = document.createElement('img');
    userProfilePic.classList.add('profile-pic');
    userProfilePic.src = '../src/assets/images/user.svg';
    profileContainer.appendChild(userProfilePic);

    navbar.append(profileContainer);

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    nameContainer.textContent = 'Welcome, William Lowe';

    navbar.appendChild(nameContainer);

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('links-container');

    const addLink = document.createElement('div');
    addLink.classList.add('link-item');
    addLink.classList.add('add');

    const addLinkIcon = document.createElement('div');
    addLinkIcon.classList.add('link-icon');
    const addLinkIconImg = document.createElement('img');
    addLinkIconImg.classList.add('add-icon');
    addLinkIconImg.src = '../src/assets/images/plus.svg'
    addLinkIcon.appendChild(addLinkIconImg);
    addLink.append(addLinkIcon);

    const addLinkTitle = document.createElement('div');
    addLinkTitle.classList.add('link-title');
    addLinkTitle.textContent = 'Add Item';
    addLink.append(addLinkTitle);

    linksContainer.append(addLink);

    const chartLink = document.createElement('div');
    chartLink.classList.add('link-item');
    addLink.classList.add('chart');

    const chartLinkIcon = document.createElement('div');
    chartLinkIcon.classList.add('link-icon');
    const chartLinkIconImg = document.createElement('img');
    chartLinkIconImg.classList.add('add-icon');
    chartLinkIconImg.src = '../src/assets/images/chart.svg'
    chartLinkIcon.appendChild(chartLinkIconImg);
    chartLink.append(chartLinkIcon);

    const chartLinkTitle = document.createElement('div');
    chartLinkTitle.classList.add('link-title');
    chartLinkTitle.textContent = 'Productivity';
    chartLink.append(chartLinkTitle);

    linksContainer.append(chartLink);

    const settingsLink = document.createElement('div');
    settingsLink.classList.add('link-item');
    addLink.classList.add('settings');

    const settingsLinkIcon = document.createElement('div');
    settingsLinkIcon.classList.add('link-icon');
    const settingsLinkIconImg = document.createElement('img');
    settingsLinkIconImg.classList.add('settings-icon');
    settingsLinkIconImg.src = '../src/assets/images/settings.svg'
    settingsLinkIcon.appendChild(settingsLinkIconImg);
    settingsLink.append(settingsLinkIcon);

    const settingsLinkTitle = document.createElement('div');
    settingsLinkTitle.classList.add('link-title');
    settingsLinkTitle.textContent = 'Add Item';
    settingsLink.append(settingsLinkTitle);

    linksContainer.append(settingsLink);

    navbar.append(linksContainer);

    return navbar;
}

function loadNavbar() {
    const content = document.getElementById('content');
    content.appendChild(createNavbar());
}
export default loadNavbar;