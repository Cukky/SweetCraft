document.addEventListener('DOMContentLoaded', () => {
    const fetchPlayerStats = async () => {
        // Placeholder for backend API call
        const stats = [
            { username: 'Player1', kills: 34 },
            { username: 'Player2', kills: 29 },
            { username: 'Player3', kills: 27 }
        ];

        const statsContainer = document.getElementById('player-stats');
        stats.forEach(stat => {
            const statItem = document.createElement('p');
            statItem.textContent = `${stat.username}: ${stat.kills} kills`;
            statsContainer.appendChild(statItem);
        });
    };

    const fetchNewsUpdates = async () => {
        // Placeholder for backend API call
        const news = [
            { title: 'Update 1', content: 'Details about update 1' },
            { title: 'Update 2', content: 'Details about update 2' }
        ];

        const newsContainer = document.getElementById('news-updates');
        news.forEach(item => {
            const newsItem = document.createElement('div');
            const newsTitle = document.createElement('h3');
            const newsContent = document.createElement('p');
            newsTitle.textContent = item.title;
            newsContent.textContent = item.content;
            newsItem.appendChild(newsTitle);
            newsItem.appendChild(newsContent);
            newsContainer.appendChild(newsItem);
        });
    };

    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(`Contact Form Submitted: ${name}, ${email}, ${message}`);
        // Placeholder for backend API call to send email
    });

    fetchPlayerStats();
    fetchNewsUpdates();
});

function scrollToSection(section) {
    $('html, body').animate({
        scrollTop: $(section).offset().top - 50
    }, 800);
}
