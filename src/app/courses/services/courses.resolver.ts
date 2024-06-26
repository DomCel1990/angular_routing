import { Injectable } from "@angular/core";
import { Course } from "../model/course";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";

@Injectable()
export class CoursesResolver implements Resolve<Course>{

    constructor(private courses: CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<Course> {
        
        const courseUrl = route.paramMap.get('courseUrl');

        return this.courses.loadCourseByUrl(courseUrl);
    }

}