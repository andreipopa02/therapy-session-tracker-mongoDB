// ------------------Find in users------------------

// paginare pacienti din Iasi
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
).sort({ name: 1 }).skip(0).limit(3)

// paginare terapeuti dupa specialitate
use('proiect');
db.users.find(
    { 
        role: "therapist", 
        specialties: "depression" 
    },
    { 
        _id: 0,
        name: 1, 
        specialties: 1 
    }
).sort({ name: 1 }).skip(1).limit(2)

// ------------------Find in appointments------------------

// paginare programari finalizate
use('proiect');
db.appointments.find(
    { 
        "history.status": "completed" 
    },
    { 
        _id: 0, 
        appointment_id: 1, 
        date: 1 
    }
).sort({ date: -1 }).skip(2).limit(5)

// ------------------Find in sessions------------------

// paginare sesiuni ordonate dupa scor
use('proiect');
db.sessions.find(
    {},
    { 
        _id: 0, 
        session_id: 1, 
        mood_score: 1 
    }
).sort({ mood_score: -1 }).skip(2).limit(2)

// ------------------Find in feedbacks------------------

// paginare feedbackuri cu rating 4 sau 5
use('proiect');
db.feedbacks.find(
    { 
        rating: { $gte: 4 } 
    },
    { 
        _id: 0, 
        comment: 1, 
        submitted_at: 1 
    }
).sort({ submitted_at: 1 }).skip(1).limit(3)
