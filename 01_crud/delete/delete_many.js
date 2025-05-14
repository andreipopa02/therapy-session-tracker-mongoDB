// --------------------------------------------------------
// ---------------Detele Many fara conditii----------------
// --------------------------------------------------------
use('proiect');

// Delete Many in feedbacks
db.feedbacks.deleteMany({});

// Delete Many in sessions
db.sessions.deleteMany({});

// Delete Many in appointments
db.appointments.deleteMany({});

// Delete Many in users
db.users.deleteMany({});


// ------------------------------------------------------
// ---------------Detele Many cu conditii----------------
// ------------------------------------------------------

// ------------------Delete Many in users------------------

// Sterge toti utilizatorii din orasul "Suceava"
use('proiect');
db.users.deleteMany(
    { 
        "address.city": "Suceava" 
    }
);

// Sterge toti pacientii creati ininte de 1 martie 2025
use('proiect');
db.users.deleteMany(
    { 
        role: "patient",
        created_at: { $lt: new Date("2025-03-01") } 
    }
)

// Sterge toti urilizatorii care nu au email
use('proiect');
db.users.deleteMany(
    {
      role: { $in: ["therapist", "patient"] },
      email: { $exists: false }
    }
);
  

// ------------------Delete Many in appointments------------------

// Sterge toate programarile care nu au statusul "completed"
use('proiect');
db.appointments.deleteMany(
    {
        history: { 
            $not: { 
                $elemMatch: { status: "completed" } 
            } 
        }
    }
);

// Sterge toate programarile care contin cuvantul 'programare' in notes
use('proiect');
db.appointments.deleteMany(
    {
      notes: { $regex: /programare/i }
    }
);
  

// ------------------Delete Many in sessions------------------

// Sterge sesiunile cu durata mai mica de 47 minute
use('proiect');
db.sessions.deleteMany(
    { 
        duration_min: { $lt: 47 } 
    }
);

// Sterge toate sesiunile care nu au campul topic_details
use('proiect');
db.sessions.deleteMany(
    { 
        topic_details: { $exists: false } 
    }
);


// ------------------Delete Many in feedback------------------

// Sterge feedbackurile cu rating mai mic de 4
use('proiect');
db.feedbacks.deleteMany(
    { 
        rating: { $lt: 4 } 
    }
);
