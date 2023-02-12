import { Router } from "express";

const student = Router();
student.get('/', (req, res) => {
    res.json([{
        "username": "karl_99",
        "email": "karl@email.com",
        "details": {
            "contact": "+639123456789",
            "birthday": '09-02-2023',
            "sex": "Male",
            "fullname": {
                "first": "Karl",
                "mid": "M",
                "last": "Aguilar"
            },
            "familycontact": {
                "father": "Father Karl Aguilar",
                "mother": "Mother Karl Aguilar",
                "father-contact": "+639234565431",
                "mother-contact": "+639234565432"
            }
        },
        "violations": [
            { "category": "Attendance", "specific": "Cutting Classes" },
            { "category": "Attendance", "specific": "Late" },
            { "category": "Attendance", "specific": "Late" }
        ]
    }]);
});

student.get('/:studentUsername', (req, res) => {
    if (req.params.studentUsername == 'karl_99') {
        res.json({
            "username": "karl_99",
            "email": "karl@email.com",
            "details": {
                "contact": "+639123456789",
                "birthday": '09-02-2023',
                "sex": "Male",
                "fullname": {
                    "first": "Karl",
                    "mid": "M",
                    "last": "Aguilar"
                },
                "familycontact": {
                    "father": "Father Karl Aguilar",
                    "mother": "Mother Karl Aguilar",
                    "father-contact": "+639234565431",
                    "mother-contact": "+639234565432"
                }
            },
            "violations": [
                { "category": "Attendance", "specific": "Cutting Classes" },
                { "category": "Attendance", "specific": "Late" },
                { "category": "Attendance", "specific": "Late" }
            ]
        });
    } else {
        res.json({});
    }
});

export default student;