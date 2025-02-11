document.addEventListener("DOMContentLoaded", function() {
    let style = document.createElement("style");
    style.innerHTML = `
        body {
            background: linear-gradient(45deg, #ff9a9e, #fad0c4);
            text-align: center;
            font-family: Arial, sans-serif;
            color: white;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .loading-animation {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-top: 5px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        audio {
            display: none;
        }
    `;
    document.head.appendChild(style);
});