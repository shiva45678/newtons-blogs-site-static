#!/usr/bin/env python3
import os
import re
from pathlib import Path

blogs_dir = '/home/ubuntu/newtons-blogs-site-static/blogs'

# Count total blogs to fix
total_blogs = 0
for category in os.listdir(blogs_dir):
    cat_path = os.path.join(blogs_dir, category)
    if os.path.isdir(cat_path):
        for blog_dir in os.listdir(cat_path):
            blog_path = os.path.join(cat_path, blog_dir, 'index.html')
            if os.path.isfile(blog_path):
                total_blogs += 1

print(f"Found {total_blogs} blog posts to fix")

# Fix CSS links in all blog posts
fixed = 0
for category in os.listdir(blogs_dir):
    cat_path = os.path.join(blogs_dir, category)
    if os.path.isdir(cat_path):
        for blog_dir in os.listdir(cat_path):
            blog_path = os.path.join(cat_path, blog_dir, 'index.html')
            if os.path.isfile(blog_path):
                try:
                    with open(blog_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Replace the CSS link path
                    # Old: href="../../styles.css"
                    # New: href="/styles.css"
                    updated_content = content.replace(
                        'href="../../styles.css"',
                        'href="/styles.css"'
                    )
                    
                    # Also fix any script references
                    updated_content = updated_content.replace(
                        'src="../../script.js"',
                        'src="/script.js"'
                    )
                    
                    if updated_content != content:
                        with open(blog_path, 'w', encoding='utf-8') as f:
                            f.write(updated_content)
                        fixed += 1
                        
                        if fixed % 1000 == 0:
                            print(f"Fixed {fixed}/{total_blogs} blogs...")
                except Exception as e:
                    print(f"Error fixing {blog_path}: {e}")

print(f"\n✓ Fixed {fixed} blog posts with correct CSS links")
