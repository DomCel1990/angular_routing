import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CoursesResolver } from './services/courses.resolver';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonResolver } from './services/lessons.resolver';
import { LessonDetailsResolver } from './services/lesson-details.resolver';
import { AuthGuard } from '../services/auth.guard';
import { ConfirmGuard } from '../services/confim-exit.guard';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: ':courseUrl',
      component: CourseComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      canDeactivate: [ConfirmGuard],
      children: [
        {
          path: '',
          component: LessonsListComponent,
          resolve: {
            lessons: LessonResolver
          }
        },
        {
          path: 'lessons/:lessonSeqNo',
          component: LessonDetailComponent,
          resolve: {
            lesson: LessonDetailsResolver
          }
        }
      ],
      resolve: {
        course: CoursesResolver
      }
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CoursesResolver,
    LessonResolver,
    LessonDetailsResolver,
    AuthGuard,
    ConfirmGuard
  ]
})
export class CoursesRoutingModule {



}
