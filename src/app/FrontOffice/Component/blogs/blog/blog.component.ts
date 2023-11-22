import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/classes/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
@Input() blog!:Blog;

}
