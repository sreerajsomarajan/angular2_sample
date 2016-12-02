import { Component } from '@angular/core'
import { CourseService } from './course.service'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
  providers: [CourseService]
})

export class CoursesComponent {
  courses;
  title = 'Title for course page'

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
