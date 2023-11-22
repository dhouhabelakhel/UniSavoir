import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  newBlog!: Blog;
  blogs: Blog[] = [];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogsService.getblog().subscribe(data => {
      this.blogs = data;
      this.addNewBlogToList();
    });
  }

  addNewBlogToList() {
    if (this.newBlog) {
      this.blogs.unshift(this.newBlog);
      this.newBlog = null!;
    }
  }

  associer(newBlog: Blog) {
    this.newBlog = newBlog;
    this.addNewBlogToList();
  }
}
