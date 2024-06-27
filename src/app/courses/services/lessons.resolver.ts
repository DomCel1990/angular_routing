import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonResolver implements Resolve<LessonSummary[]> {

    constructor (private lessonsService: CoursesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<LessonSummary[]> {

        const courseUrl = route.paramMap.get('courseUrl');

        return this.lessonsService.loadAllCourseLessonsSummary(courseUrl);
    }
    
}