import { writable } from "svelte/store";
import { Stundent } from "./models/StudentClass";
import { AdminStaff } from "./models/adminStaffCLass";
import { Teacher } from "./models/TeacherClass";

export const students = writable<Stundent[]>([
    new Stundent(1, "Ole", "Osloveien 82", "1A"),
    new Stundent(2, "Kari", "Askerveien 12", "1A"),
]);

export const teachers = writable<Teacher[]>([
    new Teacher(1, "Per", "Osloveien 82", 30000),
    new Teacher(2, "Peter", "Askerveien 12", 30000),
]);

export const adminStaff = writable<AdminStaff[]>([
    new AdminStaff(1, "Bo", "Osloveien 82", 30000),
    new AdminStaff(2, "Bob", "Askerveien 12", 30000),
]);