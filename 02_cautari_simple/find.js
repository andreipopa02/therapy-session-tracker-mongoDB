// ------------------Find in users------------------

// pacientii din Iasi
use('proiect');
db.users.find(
    { 
        role: "patient", 
        "address.city": "Iasi" 
    },
    { 
        _id: 0, 
        name: 1, 
        email: 1 
    }
)

// terapeuti cu specializarea "burnout"
use('proiect');
db.users.find(
    { 
        role: "therapist", 
        specialties: "burnout" 
    },
    {
        _id: 0, 
        name: 1, 
        specialties: 1 
    }
)

// utilizatori care au cod postal ce incepe cu "700"
use('proiect');
db.users.find(
    { 
        "address.zip": { $regex: "^700" } 
    },
    { 
        _id: 0, 
        name: 1, 
        address: 1 
    }
)

// utilizatori fara email
use('proiect');
db.users.find(
    { 
        email: { $exists: false } 
    },
    { 
        _id: 0, 
        user_id: 1, 
        name: 1
    }
)

// pacienti ordonati alfabetic
use('proiect');
db.users.find(
    { 
        role: "patient" 
    },
    { 
        _id: 0, 
        name: 1 
    }
).sort({ name: 1 })

// ------------------Find in appointments------------------

// programari complete pentru pacientii din Neamt
use('proiect');
db.appointments.find(
    { 
        "history.status": "completed",
        patient_id: { $in: ["patient_03", "patient_04", "patient_06"] } 
    },
    { 
        _id: 0, 
        appointment_id: 1, 
        patient_id: 1 
    }
)

// programari care au avut status "completed"
use('proiect');
db.appointments.find(
    { 
        "history.status": "completed" 
    },
    { 
        _id: 0, 
        appointment_id: 1
    }
)

// ------------------Find in sessions------------------

// sesiuni cu scor emotional peste 6.5
use('proiect');
db.sessions.find(
    { 
        mood_score: { $gt: 6.5 } 
    },
    { 
        _id: 0, 
        session_id: 1, 
        mood_score: 1 
    }
)

// sesiuni care au discutat "mindfulness"
use('proiect');
db.sessions.find(
    { 
        topics_discussed: "mindfulness" 
    },
    { 
        _id: 0, 
        session_id: 1, 
        topics_discussed: 1 
    }
)

// sesiuni in care "depth" este "medium"/"moderat"
use('proiect');
db.sessions.find(
    { 
        "topic_details.depth": { $in: [ "medium", "moderat"]} 
    },
    { 
        _id: 0, 
        session_id: 1, 
        topic_details: 1 
    }
)

// ------------------Find in feedbacks------------------

// feedbackuri cu rating 5
use('proiect');
db.feedbacks.find(
    { 
        rating: 5 
    },
    { 
        _id: 0, 
        session_id: 1, 
        comment: 1 
    }
)

// feedbackuri fara data
use('proiect');
db.feedbacks.find(
    { 
        submitted_at: { $exists: false } 
    },
    { 
        _id: 0, 
        feedback_id: 1 
    }
)
