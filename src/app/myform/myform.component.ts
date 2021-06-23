import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
})
export class MyformComponent implements OnInit {
  myform = this.fb.group({
    username: ['', Validators.required],
    lessons: this.fb.array([]),
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get lessons() {
    return this.myform.controls['lessons'] as FormArray;
  }
  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });
    this.lessons.push(lessonForm);
  }
  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }
}
