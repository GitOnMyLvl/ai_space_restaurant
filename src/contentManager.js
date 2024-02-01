class ContentManager {
    constructor() {
        
    }
    
    generateContent(content) {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = '';
        contentElement.appendChild(content);
       }
}

export default ContentManager;