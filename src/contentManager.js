class ContentManager {
    constructor(content) {
        this.content = content;
    }
    
    generateContent() {
        document.getElementById("content").innerHTML = this.content;
    }
}