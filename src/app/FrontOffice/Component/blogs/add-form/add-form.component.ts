import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 userData!:string|null;
  @Output() newBlog= new EventEmitter<Blog>();
 constructor(private blogsService: BlogsService,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
   this.userData=localStorage.getItem("session");
    if(this.userData){
    this.user=JSON.parse(this.userData);
    this.addblog=this.formBuilder.group({
      title:['',[Validators.minLength(6),Validators.required,Validators.pattern('^[A-Z].*')]],
      author:[this.user.userName],
      content:['',[Validators.required,Validators.maxLength(100)]],
      dateBlog:[new Date()]
   })
  }}
  public get title() {
    return this.addblog.get('title');
  }
  public get content(){
return this.addblog.get('content');
  }
  saveblog(){
 this.blogsService.saveblog(this.addblog.value).subscribe(data=>{this.newBlog.emit(data);});
  }
 isValidContent(){
  return this.content?.errors?.['required']  && this.content?.dirty;
 }
 isValidContentLength(){
  return this.content?.errors?.['maxlength']  && this.content?.dirty;
 }
  isValidTitlePattren(): boolean {
    return this.title?.errors?.['pattern'] && this.title?.dirty;
  }
  isValidTitleLength(): boolean {
    return this.title?.errors?.['minlength'] && this.title?.touched;
  }
 
  isValidTitle(): boolean {
    return this.title?.errors?.['required'] && this.title?.dirty;
  }

  






 
}
