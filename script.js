// ============================================================================
// Newton's Group Blogs - Static Website JavaScript
// ============================================================================

// Blog posts data - will be loaded from JSON
let allBlogPosts = [];
let blogPosts = [];

const categoryLabels = {
    all: "All Posts",
    ai: "Newton's AI",
    hospitals: "Newton's Hospitals",
    hms: "Newton's HMS",
    neetpg: "Newton's NEET PG",
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    loadBlogsFromJSON();
    attachFilterListeners();
});

// Load blogs from JSON file
async function loadBlogsFromJSON() {
    try {
        const response = await fetch('/data/blogs-30k.json');
        allBlogPosts = await response.json();
        
        // Use first 6 blogs for the home page display
        blogPosts = allBlogPosts.slice(0, 6);
        
        renderBlogGrid('all');
        attachBlogCardListeners();
    } catch (error) {
        console.error('Error loading blogs:', error);
        // Fallback to empty state
        blogPosts = [];
    }
}

// Render blog grid
function renderBlogGrid(category) {
    const grid = document.getElementById('blog-grid');
    const subtitle = document.getElementById('section-subtitle');
    
    // Filter posts
    let filteredPosts = blogPosts;
    if (category !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    // Update subtitle
    if (category === 'all') {
        subtitle.textContent = 'Explore all our latest content';
    } else {
        subtitle.textContent = `Showing posts from ${categoryLabels[category]}`;
    }
    
    // Clear grid
    grid.innerHTML = '';
    
    // Render cards with staggered animation
    filteredPosts.forEach((post, index) => {
        const card = createBlogCard(post);
        card.style.animationDelay = `${index * 50}ms`;
        grid.appendChild(card);
    });
}

// Create blog card element
function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.style.animation = 'slideUp 0.6s ease-out forwards';
    card.style.cursor = 'pointer';
    
    const categoryColor = {
        ai: 'ai',
        hospitals: 'hospitals',
        hms: 'hms',
        neetpg: 'neetpg',
    };
    
    card.innerHTML = `
        <div class="blog-card-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
        </div>
        <div class="blog-card-content">
            <div class="blog-card-badge ${categoryColor[post.category]}">
                ${getCategoryEmoji(post.category)} ${categoryLabels[post.category]}
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="blog-card-meta">
                <span>${post.author}</span>
                <span>${post.date}</span>
            </div>
            <a href="/blogs/${post.slug}/" class="blog-card-btn">Read More →</a>
        </div>
    `;
    
    // Store slug for click handler
    card.dataset.slug = post.slug;
    
    return card;
}

// Get category emoji
function getCategoryEmoji(category) {
    const emojis = {
        ai: '🧠',
        hospitals: '🏥',
        hms: '🩺',
        neetpg: '📚',
    };
    return emojis[category] || '📝';
}

// Attach filter listeners
function attachFilterListeners() {
    // Header nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            updateActiveFilter(filter, navBtns);
            renderBlogGrid(filter);
            attachBlogCardListeners();
        });
    });
    
    // Mobile filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            updateActiveFilter(filter, filterBtns);
            renderBlogGrid(filter);
            attachBlogCardListeners();
        });
    });
}

// Attach blog card click listeners
function attachBlogCardListeners() {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on the button (it has its own href)
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            const slug = this.dataset.slug;
            if (slug) {
                window.location.href = `/blogs/${slug}/`;
            }
        });
    });
}

// Update active filter state
function updateActiveFilter(filter, buttons) {
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        }
    });
}

// Add slide-up animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(2rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ============================================================================
// Blog Feed Search Functionality
// ============================================================================

let feedBlogs = [];

async function initializeFeedSearch() {
    try {
        const response = await fetch('/data/blogs-30k.json');
        feedBlogs = await response.json();
        displayFeedBlogs(feedBlogs.slice(0, 6));
    } catch (error) {
        console.error('Error loading feed blogs:', error);
        const feedResults = document.getElementById('feed-results');
        if (feedResults) {
            feedResults.innerHTML = '<div class="feed-no-results" style="grid-column: 1 / -1;"><h3>Unable to load blogs</h3><p>Please try again later</p></div>';
        }
    }
}

function displayFeedBlogs(blogs) {
    const feedResults = document.getElementById('feed-results');
    if (!feedResults) return;
    
    if (blogs.length === 0) {
        feedResults.innerHTML = '<div class="feed-no-results" style="grid-column: 1 / -1;"><h3>No blogs found</h3><p>Try adjusting your search</p></div>';
        return;
    }
    
    feedResults.innerHTML = blogs.slice(0, 6).map(blog => `
        <div class="feed-item" onclick="window.location.href='/blogs/${blog.slug}/'">
            <span class="feed-item-badge">${blog.category}</span>
            <h3 class="feed-item-title">${blog.title}</h3>
            <p class="feed-item-excerpt">${blog.excerpt}</p>
            <div class="feed-item-meta">
                <span>✍️ ${blog.author}</span>
                <span>📅 ${blog.date}</span>
            </div>
        </div>
    `).join('');
}

function searchFeedBlogs(query) {
    if (query.trim() === '') {
        displayFeedBlogs(feedBlogs.slice(0, 6));
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = feedBlogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.excerpt.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm) ||
        (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
    
    displayFeedBlogs(results);
}

// Attach feed search listener
document.addEventListener('DOMContentLoaded', function() {
    const feedSearchInput = document.getElementById('feed-search');
    if (feedSearchInput) {
        feedSearchInput.addEventListener('input', function(e) {
            searchFeedBlogs(e.target.value);
        });
    }
    
    // Initialize feed on page load
    if (document.getElementById('feed-results')) {
        initializeFeedSearch();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
