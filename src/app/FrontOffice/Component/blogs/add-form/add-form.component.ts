import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from 'src/app/classes/blog';
import { User } from 'src/app/classes/user';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
  addblog!:FormGroup;
 user!:User;
  @Output() newBlog= new EventEmitter<Blog>();
 constructor(private blogsService: BlogsService,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    const userData=localStorage.getItem("session");
    if(userData){
    this.user=JSON.parse(userData);
    this.addblog=this.formBuilder.nonNullable.group({
      title:[''],
      author:[this.user.userName],
      content:[''],
   })
  }}
  saveblog(){
 this.blogsService.saveblog(this.addblog.value).subscribe(data=>{this.newBlog.emit(data);});
  }







 
}
