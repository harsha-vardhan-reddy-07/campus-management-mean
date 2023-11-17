import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    studentId: {
        type: String
    },
    studentImg: {
        type: String
    },
    branch: {
        type: String
    },
    semester: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    usertype: {
        type:String,
        default: 'student'
    }
})

const facultySchema = new mongoose.Schema({
    name: {
        type: String
    },
    employeeId: {
        type: String
    },
    employeeImg:{
        type: String
    },
    department: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    usertype: {
        type:String,
        default: 'faculty'
    }
})

const adminSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    usertype: {
        type:String,
        default: 'student'
    }
})

const timetableSchema = new mongoose.Schema({
    department: String,
    semester: String,
    timetableUrl: String
})

const subjectsSchema = new mongoose.Schema({
    department: String,
    semester: String,
    subjects: {
        type: Array,
        default: []
    }
})

const marksSchema = new mongoose.Schema({
    examType: String,
    semester: String,
    department: String,
    subject: String,
    marks: {
        type: Object,
        default: {}
    }
})

const noticeSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String
})


export const Student = mongoose.model("student", studentSchema);
export const Faculty = mongoose.model("faculty", facultySchema);
export const Admin = mongoose.model("admin", adminSchema);
export const Timetable = mongoose.model("timetable", timetableSchema);
export const Subject = mongoose.model("subject", subjectsSchema);
export const Marks = mongoose.model("marks", marksSchema);
export const Notice = mongoose.model("notice", noticeSchema);