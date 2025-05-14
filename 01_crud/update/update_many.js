// ------------------Update Many in users------------------

// Actualizeaza emailul tuturor terapeutilor din Iasi //
use('proiect');
db.users.updateMany(
    { 
        role: "therapist", 
        "address.city": "Iasi" 
    },
    { 
        $set: { email: "actualizat@terapeut.ro" } 
    }
);

// Adauga "mental health" ca specialitate tuturor terapeutilor //
use('proiect');
db.users.updateMany(
    { 
        role: "therapist" 
    },
    { 
        $addToSet: { specialties: "mental health" } 
    }
);

// Actualizeaza orasul tuturor pacientilor din Neamt in "Piatra Neamt" //
use('proiect');
db.users.updateMany(
    { 
        role: "patient", "address.city": "Neamt" 
    },
    { 
        $set: { "address.city": "Piatra Neamt" } 
    }
);

// Adauga campul 'active' pentru toti utilizatorii terapeuti //
use('proiect');
db.users.updateMany(
    {
        role: "therapist" 
    },
    { 
        $set: { active: true } 
    }
);

// Modifica titlul 'Dr' in 'Psiholog' pentru toti terapeutii //
use('proiect');
db.users.updateMany(
    { 
        role: "therapist", 
        name: { $regex: /^Dr\./ } 
    },
    [
        { 
            $set: { 
                name: { 
                    $replaceOne: { 
                        input: "$name", 
                        find: "Dr. ", 
                        replacement: "Psiholog " 
                    } 
                }
            } 
        }
    ]
);
  
// ------------------Update Many in appointments------------------

// Actualizeaza statusul "pending" in "in asteptare" in toate istoricele //
use('proiect');
db.appointments.updateMany(
    { 
        "history.status": "pending" 
    },
    { 
        $set: { "history.$[elem].status": "in asteptare"} 
    },
    { 
        arrayFilters: [{ "elem.status": "pending" }] 
    }
);

// ------------------Update Many in sessions------------------

// Mareste cu 2 minute durata tuturor sesiunilor cu scor sub 6 //
use('proiect');
db.sessions.updateMany(
    { 
        mood_score: { $lt: 6 } 
    },
    { 
        $inc: { duration_min: 2 } 
    }
);

// Actualizeaza toate topic_details.depth medium in moderat //
use('proiect');
db.sessions.updateMany(
    { 
        "topic_details.depth": "medium" 
    },
    {
      $set: {
        "topic_details.$[elem].depth": "moderat"
      }
    },
    {
      arrayFilters: [
        { "elem.depth": "medium" }
      ]
    }
);

// ------------------Update Many in feedbacks------------------

// Actualizeaza toate feedbackurile cu rating 5 pentru a adauga o nota la comentariu //
use('proiect');
db.feedbacks.updateMany(
    { 
        rating: 5 
    },
    { 
        $set: { comment: "Sesiune excelenta. Multumesc!" }
    }
);
