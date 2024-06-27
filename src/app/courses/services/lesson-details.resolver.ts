import { Injectable } from "@angular/core";
import { LessonDetail } from "../model/lesson-detail";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

@Injectable() 
export class LessonDetailsResolver implements Resolve<LessonDetail> {

    constructor(
        private course: CoursesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<LessonDetail> {

        // parent perche stiamo accedendo alla rotta padre in questo punto
        const courseUrl = route.parent.paramMap.get('courseUrl');

        const lessonSeqNo = route.paramMap.get('lessonSeqNo');
        
        return this.course.loadLessonDetail(courseUrl, lessonSeqNo);
    }
    
}