import json
import os

# Load the blogs data
with open('data/blogs-30k.json', 'r') as f:
    blogs = json.load(f)

# Get all blog directories
blog_dirs = set(os.listdir('blogs/'))

# Create a mapping of slug to actual directory
slug_to_dir = {}
for blog in blogs:
    slug = blog['slug']
    # Find the matching directory
    if slug in blog_dirs:
        slug_to_dir[slug] = slug
    else:
        # Try to find a partial match
        for dir_name in blog_dirs:
            if dir_name.startswith(slug[:50]):
                slug_to_dir[slug] = dir_name
                break

# Update the JSON with correct directory names
updated_blogs = []
for blog in blogs:
    if blog['slug'] in slug_to_dir:
        blog['slug'] = slug_to_dir[blog['slug']]
    updated_blogs.append(blog)

# Save the updated JSON
with open('data/blogs-30k.json', 'w') as f:
    json.dump(updated_blogs, f, indent=2)

print(f"Updated {len(updated_blogs)} blogs")
print(f"Mapped {len(slug_to_dir)} slugs to directories")

# Show some examples
for i, blog in enumerate(updated_blogs[:3]):
    print(f"\nBlog {i+1}:")
    print(f"  Title: {blog['title']}")
    print(f"  Slug: {blog['slug']}")
