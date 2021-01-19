// import {UserController} from "./controller/UserController";
import {TeacherController} from "./controller/TeacherController";
import {StudentController} from "./controller/StudentController";
import {SubjectController} from "./controller/SubjectController";
import {AttandanceController} from "./controller/AttandanceController";
export const Routes = [ {
    method: "get",
    route: "/teachers",
    controller: TeacherController,
    action: "all"
}, {
    method: "get",
    route: "/teachers/:id",
    controller: TeacherController,
    action: "one"
}, {
    method: "post",
    route: "/teachers",
    controller: TeacherController,
    action: "save"
}, {
    method: "delete",
    route: "/teachers/:id",
    controller: TeacherController,
    action: "remove"
}, {
    method: "post",
    route: "/teachers_login",
    controller: TeacherController,
    action: "login"
},{
    method: "get",
    route: "/students",
    controller: StudentController,
    action: "all"
}, {
    method: "get",
    route: "/students/:id",
    controller: StudentController,
    action: "one"
}, {
    method: "post",
    route: "/students_login",
    controller: StudentController,
    action: "login"
},  {
    method: "post",
    route: "/students",
    controller: StudentController,
    action: "save"
}, {
    method: "delete",
    route: "/students/:id",
    controller: StudentController,
    action: "remove"
},{
    method: "post",
    route: "/subjects",
    controller: SubjectController,
    action: "save"
}, {
    method: "delete",
    route: "/subjects/:id",
    controller: SubjectController,
    action: "remove"
},{
    method: "get",
    route: "/subjects",
    controller: SubjectController,
    action: "all"
}, {
    method: "get",
    route: "/subjects/:id",
    controller: SubjectController,
    action: "one"
}, {
    method: "post",
    route: "/mark_attandance",
    controller: AttandanceController,
    action: "save"
}, {
    method: "get",
    route: "/attandance/:id",
    controller: AttandanceController,
    action: "one"
},{
    method: "get",
    route: "/attandance",
    controller: AttandanceController,
    action: "all"
}, {
    method: "delete",
    route: "/attandance/:id",
    controller: AttandanceController,
    action: "remove"
},];