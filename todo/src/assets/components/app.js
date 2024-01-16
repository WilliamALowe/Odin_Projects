import'../styles/app.css';

function createApp() {
    const app = document.createElement('main');
    app.textContent = 'test';
    
    return app;
}

function loadApp() {
    const content = document.getElementById('content');
    content.appendChild(createApp());
}
export default loadApp;