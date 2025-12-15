// SEARCH FUNCTIONALITY
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const resultsContainer = document.getElementById('resultsContainer');
const closeSearch = document.getElementById('closeSearch');

// Portfolio content data for searching
const portfolioData = [
    {
        title: 'HTML Structure',
        category: 'Skill',
        description: 'Building semantic and well-organized HTML to create the foundation of websites. I understand how to structure content properly for accessibility and SEO.',
        section: 'skills'
    },
    {
        title: 'CSS Styling',
        category: 'Skill',
        description: 'Creating beautiful and responsive designs using CSS. I can style layouts, create animations, and ensure websites look great on all devices.',
        section: 'skills'
    },
    {
        title: 'JavaScript Interactivity',
        category: 'Skill',
        description: 'Adding dynamic features and interactivity to websites using JavaScript. I can create engaging user experiences with interactive elements and functionality.',
        section: 'skills'
    },
    {
        title: 'Launch Your Website',
        category: 'Web Development Project',
        description: 'A comprehensive STEM project where I learned to build websites from scratch using HTML, CSS, and JavaScript. This project taught me the fundamentals of web development and how to create interactive, user-friendly websites.',
        section: 'works'
    },
    {
        title: 'Cell Observation Project',
        category: 'Biology Project',
        description: 'A hands-on biology project where I used a microscope to observe and study cells. This project deepened my understanding of cellular structures and the importance of scientific observation and documentation.',
        section: 'works'
    },
    {
        title: 'Patterns & Caesar Cipher',
        category: 'Mathematics & Cryptography',
        description: 'An exploration of mathematical patterns and the Caesar Cipher, a classical cryptography technique. This project taught me about pattern recognition, encryption, and how mathematics applies to real-world security and coding.',
        section: 'works'
    },
    {
        title: 'Computer & Phone Holder Design',
        category: 'Design Project',
        description: 'A practical design project where I applied IT fundamentals and design principles to create a functional computer and phone holder. This project taught me how to combine design thinking with technical knowledge to solve real-world problems.',
        section: 'works'
    },
    {
        title: 'Jeffrey Zeldman',
        category: 'Inspiration',
        description: 'Father of Millennial Web Design. Jeffrey Zeldman revolutionized web design and showed the world that the web could be beautiful, accessible, and user-friendly. His work inspires me to create websites that are not just functional, but also elegant and meaningful.',
        section: 'inspirations'
    },
    {
        title: 'Ethan Marcotte',
        category: 'Inspiration',
        description: 'Pioneer of Responsive Web Design. Ethan Marcotte coined and developed the principles of responsive web design in 2010, transforming how we build websites. His innovation inspires me to create websites that work beautifully on all devices and screen sizes.',
        section: 'inspirations'
    },
    {
        title: 'Web Design',
        category: 'Topic',
        description: 'The art and science of creating beautiful, functional websites. Web design combines aesthetics with user experience to create engaging digital experiences.',
        section: 'skills'
    },
    {
        title: 'Responsive Design',
        category: 'Topic',
        description: 'Creating websites that work beautifully on all devices - mobile, tablet, and desktop. This is a key principle in modern web development.',
        section: 'skills'
    },
    {
        title: 'Microscope',
        category: 'Tool',
        description: 'Used in the Cell Observation Project to observe and study cellular structures in detail.',
        section: 'works'
    }
];

// Function to highlight search term in text
function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Function to perform search
function performSearch(searchTerm) {
    console.log('Searching for:', searchTerm);
    
    if (searchTerm.trim() === '') {
        searchResults.classList.add('hidden');
        return;
    }

    const results = portfolioData.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        return (
            item.title.toLowerCase().includes(searchLower) ||
            item.category.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        );
    });

    console.log('Found results:', results.length);
    displayResults(results, searchTerm);
}

// Function to display search results
function displayResults(results, searchTerm) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found for "' + searchTerm + '". Try searching for skills, projects, or inspirations!</div>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3>${highlightText(result.title, searchTerm)}</h3>
                <p>${highlightText(result.description, searchTerm)}</p>
                <div class="result-category">${result.category}</div>
            `;
            resultItem.addEventListener('click', () => {
                const section = document.getElementById(result.section);
                if (section) {
                    searchResults.classList.add('hidden');
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            resultsContainer.appendChild(resultItem);
        });
    }

    searchResults.classList.remove('hidden');
}

// Event listeners for search
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Also search as you type
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
}

if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchResults.classList.add('hidden');
        searchInput.value = '';
    });
}

// Close search results when clicking outside
if (searchResults) {
    searchResults.addEventListener('click', (e) => {
        if (e.target === searchResults) {
            searchResults.classList.add('hidden');
            searchInput.value = '';
        }
    });
}

// SMOOTH SCROLLING FOR NAVIGATION LINKS
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA BUTTON CLICK HANDLER
const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const worksSection = document.querySelector('#works');
        if (worksSection) {
            worksSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ADD ANIMATION TO CARDS WHEN THEY COME INTO VIEW
const cards = document.querySelectorAll('.card');
const workItems = document.querySelectorAll('.work-item');
const inspirationCards = document.querySelectorAll('.inspiration-card');
const allAnimatedElements = [...cards, ...workItems, ...inspirationCards];

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

allAnimatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ACTIVE NAVIGATION LINK HIGHLIGHTING
window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});