// Cerinta: Afiseaza numarul de utilizatori pentru fiecare combinatie de oras 
// si rol (therapist/patient), impreuna cu lista completa a numelor acestor utilizatori.
use('proiect');
db.users.aggregate([
    {
        $group: {
            _id: {
                city: "$address.city",
                role: "$role"
            },
            count: { $sum: 1 },
            users: { $push: "$name" }
        }
    },
    {
        $sort: { 
            "_id.role": 1, 
            "_id.city": 1 
            
        }
    }
]);
  
// Cerinta: Determina cele mai frecvente scoruri emotionale rotunjite 
// inregistrate in sesiuni,afisand pentru fiecare numarul total de 
// aparitii si ID-urile sesiunilor asociate.
use('proiect');
db.sessions.aggregate([
    {
        $project: {
            session_id: 1,
            rounded_score: { $round: ["$mood_score", 0] }
        }
    },
    {
        $group: {
            _id: "$rounded_score",
            total_sessions: { $sum: 1 },
            session_ids: { $push: "$session_id" }
        }
    },
    {
        $sort: { total_sessions: -1 }
    },
    {
        $limit: 5
    }
]);

// Cerinta: Afiseaza toate topicurile discutate in cadrul sesiunilor,
// grupate si ordonate descrescator dupa numarul de aparitii.
use('proiect');
db.sessions.aggregate([
    { 
        $unwind: "$topics_discussed" 
    },
    {
        $group: {
            _id: "$topics_discussed",
            count: { $sum: 1 }
        }
    },
    {
        $sort: { count: -1 }
    }
]);

// Cerinta: Calculeaza media scorului emotional pentru fiecare durata de sesiune,
// identificand toate sesiunile care au avut acea durata.
use('proiect');
db.sessions.aggregate([
    {
        $group: {
            _id: "$duration_min",
            average_mood: { $avg: "$mood_score" },
            sessions: { $push: "$session_id" }
        }
    },
    {
        $sort: { _id: 1 }
    }
]);

// Cerinta: Afiseaza toate ratingurile oferite in feedbackuri, impreuna cu 
// numarul total de feedbackuri si lista comentariilor pentru fiecare rating.
use('proiect');
db.feedbacks.aggregate([
    {
        $group: {
            _id: "$rating",
            total_feedbacks: { $sum: 1 },
            comments: { $push: "$comment" }
        }
    },
    {
        $sort: { _id: -1 }
    }
]);
