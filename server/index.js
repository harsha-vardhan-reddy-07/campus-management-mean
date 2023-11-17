import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Admin, Faculty, Marks, Notice, Student, Subject, Timetable } from './Schema.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const PORT = 6001;

mongoose.connect('mongodb://localhost:27017/campusManagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{

    app.post('/register', async (req, res)=>{
        const { username, email, password } = req.body;
        try {
            const existingUser = await Admin.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const newUser = new Admin({
                name: username,
                email,
                usertype: 'admin',
                password
            });
            const userCreated = await newUser.save();
            return res.status(201).json(userCreated);

        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Server Error' });
        }
    });

    app.post('/login', async (req, res) => {
        const { email, password, usertype } = req.body;
        try {

            if (usertype === 'student'){

                const user = await Student.findOne({ email });
                if (!user) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                }
                if (user.password !== password) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                } else{
                    
                    return res.json(user);
                }

            }else if(usertype === 'faculty'){

                const user = await Faculty.findOne({ email });
                if (!user) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                }
                if (user.password !== password) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                } else{
                    
                    return res.json(user);
                }

            }else if(usertype === 'admin'){

                const user = await Admin.findOne({ email });
                if (!user) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                }
                if (user.password !== password) {
                    return res.status(401).json({ message: 'Invalid email or password' });
                } else{
                    
                    return res.json(user);
                }
            }

          
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Server Error' });
        }
    });




    // Add student

    app.post('/add-student', async(req, res)=>{

        const {name, studentId, studentImg, branch, semester, email, mobile, password} = req.body;

        try{

            const student = await Student({name, studentId, studentImg, branch, semester, email, mobile, password}); 
            await student.save();
            res.status(201).json({message: "Student added!!"})

        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }

    })


    // update student

    app.post('/update-student/:id', async(req, res)=>{

        const {name, studentId, studentImg, branch, semester, email, mobile, password} = req.body;

        try{

            const student = await Student.findById(req.params.id);

            student.name = name;
            student.studentId = studentId;
            student.studentImg = studentImg;
            student.branch = branch;
            student.semester = semester;
            student.email = email;
            student.mobile = mobile;
            student.password = password;

            await student.save();
            res.status(201).json({message: "student data updated!!"})

        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }

    })


    // Add faculty

    app.post('/add-faculty', async(req, res)=>{

        const {name, employeeId, employeeImg, department, designation, email, mobile, password} = req.body;

        try{

            const faculty = await Faculty({name, employeeId, employeeImg, department, designation, email, mobile, password}); 
            await faculty.save();
            res.status(201).json({message: "faculty added!!"})

        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }

    })

    // update faculty

    app.post('/update-faculty/:id', async(req, res)=>{

        const {name, employeeId, employeeImg, department, designation, email, mobile, password} = req.body;

        try{

            const faculty = await Faculty.findById(req.params.id);

            faculty.name = name;
            faculty.employeeId = employeeId;
            faculty.employeeImg = employeeImg;
            faculty.department = department;
            faculty.designation = designation;
            faculty.email = email;
            faculty.mobile = mobile;
            faculty.password = password;

            await faculty.save();
            res.status(201).json({message: "faculty data updated!!"})

        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }

    })


    // fetch students

    app.get('/fetch-students', async(req, res)=>{
        try{
            const users = await Student.find();

            res.status(201).json(users);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

     // fetch student with id

     app.get('/fetch-student/:id', async(req, res)=>{
        try{
            const user = await Student.findById(req.params.id);

            if(!user){
                return res.status(404).json({ message: 'student not found' });
            }

            res.status(201).json(user);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch student with student id 

    app.get('/fetch-student-with-sid/:id', async(req, res)=>{
        try{
            const user = await Student.findOne({studentId: req.params.id});

            if(!user){
                return res.status(404).json({ message: 'student not found' });
            }

            res.status(201).json(user);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch faculty

    app.get('/fetch-faculty', async(req, res)=>{
        try{
            const users = await Faculty.find();

            res.status(201).json(users);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch faculty with id

    app.get('/fetch-faculty/:id', async(req, res)=>{
        try{
            const user = await Faculty.findById(req.params.id);

            if(!user){
                return res.status(404).json({ message: 'employee not found' });
            }

            res.status(201).json(user);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch faculty with employee id 

    app.get('/fetch-faculty-with-eid/:id', async(req, res)=>{
        try{
            const user = await Faculty.findOne({employeeId: req.params.id});

            if(!user){
                return res.status(404).json({ message: 'employee not found' });
            }

            res.status(201).json(user);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch subjects

    app.get('/fetch-subjects', async(req, res)=>{
        try{
            const subjects = await Subject.find();

            res.status(201).json(subjects);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // fetch subjects custom

    app.post('/fetch-subjects-custom', async(req, res)=>{
        const {semester, department} = req.body;
        try{
            const subject = await Subject.findOne({semester, department});

            if(!subject){
                return res.status(500).json({ message: 'subjects not found' });
            }

            res.status(201).json(subject.subjects);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // remove subject

    app.post('/remove-subject', async(req, res)=>{
        const {semester, department, subject} = req.body;
        try{
            const sub = await Subject.findOne({semester, department});

            if(!sub){
                return res.status(500).json({ message: 'subjects not found' });
            }

            sub.subjects.pop(subject);
            await sub.save();

            res.status(201).json({ message: 'subject removed' });
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // add new subject
    app.post('/new-subject', async(req, res)=>{
        const {newSemester, newDepartment, newSubject} = req.body;
        try{
            const subject = await Subject.findOne({semester: newSemester, department: newDepartment});

            if(subject){
                if(!subject.subjects.includes(newSubject)){
                    subject.subjects.push(newSubject);
                    await subject.save();
                    res.status(201).json({message: "Subject added!!"});
                }else{
                    res.status(500).json({message: "Subject already exists!!"});
                    
                }
            } else{
                const newSub = new Subject({semester: newSemester, department: newDepartment, subjects: [newSubject] });
                await newSub.save();
                res.status(201).json({message: "Subject added!!"});
            }
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: 'Server Error' });
        }
    })


    // fetch notices

    app.get('/fetch-notices', async(req, res)=>{
        try{
            const notices = await Notice.find();

            res.status(201).json(notices);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

     // add new notices

     app.post('/new-notice', async(req, res)=>{
        const {title, description} = req.body;
        try{
            const notice = new Notice({
                title,
                description,
                date: new Date()
            });

            await notice.save();
            res.status(201).json({ message: 'notice added' });
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

     // fetch all timetables

     app.get('/fetch-timetables', async(req, res)=>{
        try{
            const timetables = await Timetable.find();

            res.status(201).json(timetables);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })


      // fetch timetable custom

      app.post('/fetch-timetable-custom', async(req, res)=>{
        const {semester, department} = req.body;
        try{

            console.log(semester, department);
            const timetable = await Timetable.findOne({semester, department});

            if(!timetable){
                return res.status(500).json({ message: 'timetable not found' });
            }

            res.status(201).json(timetable);
        }catch(err){
            return res.status(500).json({ message: 'Server Error' });
        }
    })

    // update timetable
    app.post('/new-timetable', async(req, res)=>{
        const {newSemester, newDepartment, newtimetable} = req.body;
        try{
            const timetable = await Timetable.findOne({semester: newSemester, department: newDepartment});

            if(timetable){
                timetable.timetableUrl = newtimetable;
                await timetable.save();
                res.status(201).json({message: "timetable updated!!"});
            } else{
                const newTb = new Timetable({semester: newSemester, department: newDepartment, timetableUrl: newtimetable });
                await newTb.save();
                res.status(201).json({message: "timetable added!!"});
            }
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: 'Server Error' });
        }
    })


     // fetch marks

     app.get('/fetch-marks', async(req, res)=>{
        try{
            const marks = await Marks.find();

            res.status(201).json(marks);
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: 'Server Error' });
        }
    })



    // add subject marks

    app.post('/add-marks', async(req, res)=>{
        const {semester, department, examType, subject, marks} = req.body;
        try{
            const newMark = new Marks({semester, department, examType, subject, marks});

            await newMark.save();

            res.status(201).json({ message: 'marks added'});
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: 'Server Error' });
        }
    })




    app.listen(PORT, ()=>{
        console.log(`Running @ ${PORT}`);
    })


}).catch((e)=>{
    console.log('Error in database connection');
})
