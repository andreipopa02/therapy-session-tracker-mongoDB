// Cerinta: Afiseaza toti terapeutii impreuna cu media ratingurilor primite 
// de la pacienti, ordonati descrescator dupa acest scor.
use('proiect');
db.feedbacks.aggregate([
    // lookup feedbacks cu sessions
    {
        $lookup: {
            from: "sessions",
            localField: "session_id",
            foreignField: "session_id",
            as: "session_data"
        }
    },
    { 
        $unwind: "$session_data" 
    },
    // lookup sessions cu appointments
    {
        $lookup: {
            from: "appointments",
            localField: "session_data.appointment_id",
            foreignField: "appointment_id",
            as: "appointment_data"
        }
    },
    { 
        $unwind: "$appointment_data" 
    },
    // grupare feedbacks dupa terapeut
    {
        $group: {
            _id: "$appointment_data.therapist_id",
            average_rating: { $avg: "$rating" },
            count_feedbacks: { $sum: 1 }
        }
    },
    // lookup appointments cu users 
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "user_id",
            as: "therapist_data"
        }
    },
    { 
        $unwind: "$therapist_data"
    },
    {
        $project: {
            _id: 0,
            therapist_id: "$_id",
            name: "$therapist_data.name",
            average_rating: { $round: ["$average_rating", 2] },
            count_feedbacks: 1
        }
    },
    { 
        $sort: { average_rating: -1 } 
    }
]);

// Cerinta: Afiseaza pentru fiecare sesiune, 
// numele pacientului si al terapeutului implicat
use('proiect');
db.sessions.aggregate([
    {
        $lookup: {
            from: "appointments",
            localField: "appointment_id",
            foreignField: "appointment_id",
            as: "appointment_data"
        }
    },
    { 
        $unwind: "$appointment_data" 
    },
    {
        $lookup: {
            from: "users",
            localField: "appointment_data.patient_id",
            foreignField: "user_id",
            as: "patient_data"
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "appointment_data.therapist_id",
            foreignField: "user_id",
            as: "therapist_data"
        }
    },
    { 
        $unwind: "$patient_data" 
    },
    { 
        $unwind: "$therapist_data" 
    },
    {
        $project: {
            _id: 0,
            session_id: 1,
            patient_name: "$patient_data.name",
            therapist_name: "$therapist_data.name",
            mood_score: 1
        }
    }
]);

// Cerinta: Afiseaza scorul emotional al sesiunii 
// asociate pentru fiecare feedback.
use('proiect');
db.feedbacks.aggregate([
    {
        $lookup: {
            from: "sessions",
            localField: "session_id",
            foreignField: "session_id",
            as: "session_data"
        }
    },
    { 
        $unwind: "$session_data" 
    },
    {
        $project: {
            _id: 0,
            feedback_id: 1,
            rating: 1,
            comment: 1,
            mood_score: "$session_data.mood_score",
            session_summary: "$session_data.summary"
        }
    }
]);

// Cerinta: Afiseaza pentru fiecare sesiune 
// ID-ul pacientului si data programarii
use('proiect');
db.sessions.aggregate([
    {
        $lookup: {
            from: "appointments",
            localField: "appointment_id",
            foreignField: "appointment_id",
            as: "appointment_data"
        }
    },
    { 
        $unwind: "$appointment_data" 
    },
    {
        $project: {
            _id: 0,
            session_id: 1,
            appointment_date: "$appointment_data.date",
            patient_id: "$appointment_data.patient_id",
            mood_score: 1
        }
    }
]);