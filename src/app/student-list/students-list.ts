import { studentProfile } from "../student/studentProfile";

interface Company{
    companyId:number;
    name:string;
    website:string;
    description:string;
    registration:boolean;
}
interface Feedback{
    studentId:number;
    title:string;
    descriptions:string;
}
interface Resume{
    resumeId:number;
    resumeName:string;
    resumeUrl:string;
}
export interface Student{
    studentId:number;
    fullName:string;
    gender:string;
    companyEntities?:Company[];
    studentProfileEntity?:studentProfile;
    feedbackEntity?:Feedback;
    resumeEntity?:Resume;
    status?:string;
}