// ============================================================================
// Newton's Group Blogs - Static Website JavaScript
// ============================================================================

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "How AI is Revolutionizing Clinical Decision Making",
        slug: "how-ai-is-revolutionizing-clinical-decision-making",
        excerpt: "Discover how Newton's AI clinical decision support system is helping doctors make faster, more accurate diagnoses.",
        category: "ai",
        date: "June 10, 2026",
        author: "Dr. Rajesh Kumar",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-ai-section-XmVU8rokpv5aHHMVGdMstU.webp",
    },
    {
        id: 2,
        title: "Newton's Hospitals: Setting New Standards in Patient Care",
        slug: "newtons-hospitals-setting-new-standards-in-patient-care",
        excerpt: "Learn about our commitment to providing world-class healthcare facilities with cutting-edge technology and compassionate care.",
        category: "hospitals",
        date: "June 8, 2026",
        author: "Dr. Priya Sharma",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hospitals-section-Qk758qz6S6Q54Tqq9rYNGv.webp",
    },
    {
        id: 3,
        title: "Streamlining Hospital Operations with Newton's HMS",
        slug: "streamlining-hospital-operations-with-newtons-hms",
        excerpt: "Explore how our Hospital Management System is transforming administrative workflows and improving patient outcomes.",
        category: "hms",
        date: "June 5, 2026",
        author: "Amit Patel",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hms-section-h9XkNEzXsqiY9LH4WADrGD.webp",
    },
    {
        id: 4,
        title: "NEET PG Success Stories: How Newton's Prepares Future Doctors",
        slug: "neet-pg-success-stories-how-newtons-prepares-future-doctors",
        excerpt: "Read inspiring stories of medical students who achieved their NEET PG goals with Newton's comprehensive preparation platform.",
        category: "neetpg",
        date: "June 1, 2026",
        author: "Dr. Neha Gupta",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-neetpg-section-Q9FAa5Exz5xKQ6CZVyMiCZ.webp",
    },
    {
        id: 5,
        title: "The Future of Medical AI: Newton's Vision",
        slug: "the-future-of-medical-ai-newtons-vision",
        excerpt: "Insights into how Newton's AI is shaping the future of healthcare with machine learning and predictive analytics.",
        category: "ai",
        date: "May 28, 2026",
        author: "Dr. Vikram Singh",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-ai-section-XmVU8rokpv5aHHMVGdMstU.webp",
    },
    {
        id: 6,
        title: "Building Trust in Healthcare Technology",
        slug: "building-trust-in-healthcare-technology",
        excerpt: "Understanding the importance of transparency and security in healthcare systems and how Newton's prioritizes patient data.",
        category: "hospitals",
        date: "May 25, 2026",
        author: "Dr. Anjali Verma",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hospitals-section-Qk758qz6S6Q54Tqq9rYNGv.webp",
    },
];

const categoryLabels = {
    all: "All Posts",
    ai: "Newton's AI",
    hospitals: "Newton's Hospitals",
    hms: "Newton's HMS",
    neetpg: "Newton's NEET PG",
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    renderBlogGrid('all');
    attachFilterListeners();
    attachBlogCardListeners();
});

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
