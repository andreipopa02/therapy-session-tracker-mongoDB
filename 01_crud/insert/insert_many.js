use('proiect');

// ------------------Insert Many in users------------------
db.users.insertMany([
    {
        "user_id": "therapist_01",
        "name": "Dr. Ion Ionescu",
        "email": "ion.ionescu@gmail.com",
        "role": "therapist",
        "specialties": [
            "burnout",
            "depression"
        ],
        "address": {
            "street": "Str. Linistii 13",
            "city": "Iasi",
            "zip": "700300"
        },
        "created_at": new Date("2025-01-01")
    },
    {
        "user_id": "therapist_02",
        "name": "Dr. Vasile Petraru",
        "email": "vasile.petraru@gmail.com",
        "role": "therapist",
        "specialties": [
            "anxiety",
            "stress"
        ],
        "address": {
            "street": "Str. Eternitatii 23",
            "city": "Iasi",
            "zip": "700302"
        },
        "created_at": new Date("2025-01-01")
    },
    {
        "user_id": "therapist_03",
        "name": "Dr. Gheorghe Mihalache",
        "email": "gheorghe.mihalache@gmail.com",
        "role": "therapist",
        "specialties": [
            "burnout",
            "depression"
        ],
        "address": {
            "street": "Str. Elena Doamna 32",
            "city": "Iasi",
            "zip": "700241"
        },
        "created_at": new Date("2025-01-01")
    },
    {
        "user_id": "therapist_04",
        "name": "Dr. Ion Dumitrescu",
        "email": "ion.dumitrescu@gmail.com",
        "role": "therapist",
        "specialties": [
            "anxiety",
            "stress"
        ],
        "address": {
            "street": "B-dul Tudor Vladimirescu 14",
            "city": "Iasi",
            "zip": "700854"
        },
        "created_at": new Date("2025-01-01")
    },
    {
        "user_id": "therapist_05",
        "name": "Dr. Costel Alexe",
        "email": "costel.alexe@gmail.com",
        "role": "therapist",
        "specialties": [
            "burnout",
            "depression"
        ],
        "address": {
            "street": "B-dul Stefan cel Mare 5",
            "city": "Iasi",
            "zip": "700454"
        },
        "created_at": new Date("2025-01-01")
    },
    {
        "user_id": "patient_01",
        "name": "Raluca Mocanu",
        "email": "raluca.mocanu@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Papadiei 7",
            "city": "Iasi",
            "zip": "700007"
        },
        "created_at": new Date("2025-04-2")
    },
    {
        "user_id": "patient_02",
        "name": "Ioana Onofrei",
        "email": "ioana.onofrei@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Libertatii 8",
            "city": "Iasi",
            "zip": "701008"
        },
        "created_at": new Date("2025-04-2")
    },
    {
        "user_id": "patient_03",
        "name": "Costica Enache",
        "role": "patient",
        "address": {
            "street": "Str. Virtutii 6",
            "city": "Neamt",
            "zip": "640006"
        },
        "created_at": new Date("2025-04-3")
    },
    {
        "user_id": "patient_04",
        "name": "Andrei Andrei",
        "email": "andrei.andrei@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Papadiei 7",
            "city": "Neamt",
            "zip": "644007"
        },
        "created_at": new Date("2025-04-4")
    },
    {
        "user_id": "patient_05",
        "name": "Lucian Livada",
        "email": "lucian.livada@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Bisericii 8",
            "city": "Suceava",
            "zip": "541008"
        },
        "created_at": new Date("2025-04-5")
    },
    {
        "user_id": "patient_06",
        "name": "Iustin Andrei",
        "email": "iustin.andrei@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Fundaturii 26",
            "city": "Neamt",
            "zip": "640006"
        },
        "created_at": new Date("2025-04-3")
    },
    {
        "user_id": "patient_07",
        "name": "Raluca Moraru",
        "email": "raluca.moraru@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Evlaviei 7",
            "city": "Suceava",
            "zip": "512007"
        },
        "created_at": new Date("2025-04-2")
    },
    {
        "user_id": "patient_08",
        "name": "Roxana Ghiorghiu",
        "email": "roxana.ghiorghiu@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Linistii 8",
            "city": "Botosani",
            "zip": "875451"
        },
        "created_at": new Date("2025-04-6")
    },
    {
        "user_id": "patient_09",
        "name": "Vasile Ghiorghiu",
        "email": "vasile.ghiorghiu@gmail.com",
        "role": "patient",
        "address": {
            "street": "Str. Linistii 8",
            "city": "Botosani",
            "zip": "875451"
        },
        "created_at": new Date("2025-04-6")
    }
]);

// ------------------Insert Many in appointments------------------
db.appointments.insertMany([
    // patient_01
    {
        "appointment_id": "app_1001",
        "therapist_id": "therapist_01",
        "patient_id": "patient_01",
        "date": new Date("2025-04-02"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-10") },
            { "status": "confirmed", "date": new Date("2025-03-12") },
            { "status": "completed", "date": new Date("2025-04-02") }
        ],
        "notes": "Consultatie burnout finalizata"
    },
    {
        "appointment_id": "app_1002",
        "therapist_id": "therapist_01",
        "patient_id": "patient_01",
        "date": new Date("2025-04-10"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-18") },
            { "status": "confirmed", "date": new Date("2025-03-20") },
            { "status": "completed", "date": new Date("2025-04-10") }
        ],
        "notes": "Sesiune de urmarire terapie"
    },

    // patient_02
    {
        "appointment_id": "app_1003",
        "therapist_id": "therapist_02",
        "patient_id": "patient_02",
        "date": new Date("2025-04-15"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-22") },
            { "status": "confirmed", "date": new Date("2025-03-24") },
            { "status": "completed", "date": new Date("2025-04-15") }
        ],
        "notes": "Consultatie finalizata pentru anxietate"
    },
    {
        "appointment_id": "app_1011",
        "therapist_id": "therapist_02",
        "patient_id": "patient_02",
        "date": new Date("2025-04-17"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-25") },
            { "status": "confirmed", "date": new Date("2025-03-27") },
            { "status": "completed", "date": new Date("2025-04-17") }
        ],
        "notes": "Sesiune de urmarire"
    },

    // patient_03
    {
        "appointment_id": "app_1004",
        "therapist_id": "therapist_02",
        "patient_id": "patient_03",
        "date": new Date("2025-04-05"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-10") },
            { "status": "confirmed", "date": new Date("2025-03-15") },
            { "status": "completed", "date": new Date("2025-04-05") }
        ],
        "notes": "Sesiune terapie 1"
    },
    {
        "appointment_id": "app_1012",
        "therapist_id": "therapist_03",
        "patient_id": "patient_03",
        "date": new Date("2025-04-12"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-18") },
            { "status": "confirmed", "date": new Date("2025-03-20") },
            { "status": "completed", "date": new Date("2025-04-12") }
        ],
        "notes": "Sesiune terapie 2"
    },
    {
        "appointment_id": "app_1013",
        "therapist_id": "therapist_04",
        "patient_id": "patient_03",
        "date": new Date("2025-04-27"),
        "history": [
            { "status": "pending", "date": new Date("2025-03-25") },
            { "status": "confirmed", "date": new Date("2025-03-27") }
        ],
        "notes": "Sesiune terapie 3"
    },

    // other patients
    {
        "appointment_id": "app_1005",
        "therapist_id": "therapist_03",
        "patient_id": "patient_04",
        "date": new Date("2025-05-08"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-08") }
        ],
        "notes": "Programare pentru consultatie burnout"
    },
    {
        "appointment_id": "app_1006",
        "therapist_id": "therapist_02",
        "patient_id": "patient_05",
        "date": new Date("2025-05-09"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-09") }
        ],
        "notes": "Programare pentru anxietate"
    },
    {
        "appointment_id": "app_1007",
        "therapist_id": "therapist_02",
        "patient_id": "patient_06",
        "date": new Date("2025-05-21"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-19") },
            { "status": "confirmed", "date": new Date("2025-04-21") }
        ],
        "notes": "Programare pentru stres"
    },
    {
        "appointment_id": "app_1008",
        "therapist_id": "therapist_03",
        "patient_id": "patient_07",
        "date": new Date("2025-05-20"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-20") }
        ],
        "notes": "Consultatie pentru burnout"
    },
    {
        "appointment_id": "app_1009",
        "therapist_id": "therapist_04",
        "patient_id": "patient_08",
        "date": new Date("2025-05-12"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-12") }
        ],
        "notes": "Programare pentru stres"
    },
    {
        "appointment_id": "app_1010",
        "therapist_id": "therapist_04",
        "patient_id": "patient_09",
        "date": new Date("2025-05-15"),
        "history": [
            { "status": "pending", "date": new Date("2025-04-13") },
            { "status": "confirmed", "date": new Date("2025-04-15") }
        ],
        "notes": "Consultatie programata pentru stres"
    }
]);

// ------------------Insert Many in sessions------------------
db.sessions.insertMany([
    {
        "session_id": "sess_1001",
        "appointment_id": "app_1001",
        "duration_min": 46,
        "topics_discussed": ["burnout", "depression"],
        "topic_details": [
            { "topic": "burnout", "depth": "medium" },
            { "topic": "depression", "depth": "low" }
        ],
        "mood_score": 5.7,
        "summary": "Discutie despre burnout. Sesiune initiala."
    },
    {
        "session_id": "sess_1002",
        "appointment_id": "app_1002",
        "duration_min": 47,
        "topics_discussed": ["follow-up", "coping strategies"],
        "topic_details": [
            { "topic": "follow-up", "depth": "medium" },
            { "topic": "coping strategies", "depth": "medium" }
        ],
        "mood_score": 6.2,
        "summary": "Discutie de urmarire. Evaluare progres emotional."
    },
    {
        "session_id": "sess_1003",
        "appointment_id": "app_1003",
        "duration_min": 48,
        "topics_discussed": ["anxiety", "mindfulness"],
        "topic_details": [
            { "topic": "anxiety", "depth": "high" },
            { "topic": "mindfulness", "depth": "medium" }
        ],
        "mood_score": 6.9,
        "summary": "Sesiune despre anxietate si tehnici de relaxare."
    },
    {
        "session_id": "sess_1004",
        "appointment_id": "app_1011",
        "duration_min": 45,
        "topics_discussed": ["self-reflection", "resilience"],
        "topic_details": [
            { "topic": "self-reflection", "depth": "medium" },
            { "topic": "resilience", "depth": "high" }
        ],
        "mood_score": 7.1,
        "summary": "Explorare a punctelor forte personale. Tehnici de rezilienta."
    },
    {
        "session_id": "sess_1005",
        "appointment_id": "app_1004",
        "duration_min": 50,
        "topics_discussed": ["stress", "emotional regulation"],
        "topic_details": [
            { "topic": "stress", "depth": "high" },
            { "topic": "emotional regulation", "depth": "medium" }
        ],
        "mood_score": 6.5,
        "summary": "Strategii de gestionare a stresului cotidian."
    },
    {
        "session_id": "sess_1006",
        "appointment_id": "app_1012",
        "duration_min": 49,
        "topics_discussed": ["follow-up", "cognitive restructuring"],
        "topic_details": [
            { "topic": "follow-up", "depth": "medium" },
            { "topic": "cognitive restructuring", "depth": "medium" }
        ],
        "mood_score": 7.0,
        "summary": "Analiza gandurilor disfunctionale si reformulare pozitiva."
    }
]);

// ------------------Insert Many in feedbacks------------------
db.feedbacks.insertMany([
    {
        "feedback_id": "fb_1001",
        "session_id": "sess_1001",
        "rating": 4,
        "comment": "A fost utila prima sesiune, terapeut calm si deschis.",
    },
    {
        "feedback_id": "fb_1002",
        "session_id": "sess_1002",
        "rating": 5,
        "comment": "Am simtit o imbunatatire semnificativa.",
        "submitted_at": new Date("2025-04-10")
    },
    {
        "feedback_id": "fb_1003",
        "session_id": "sess_1003",
        "rating": 4,
        "comment": "Sesiunea m-a ajutat sa inteleg mai bine sursele anxietatii.",
        "submitted_at": new Date("2025-04-15")
    },
    {
        "feedback_id": "fb_1004",
        "session_id": "sess_1004",
        "rating": 5,
        "comment": "Am invatat tehnici valoroase de rezilienta.",
        "submitted_at": new Date("2025-04-17")
    },
    {
        "feedback_id": "fb_1005",
        "session_id": "sess_1005",
        "rating": 3,
        "comment": "Mi-ar fi placut sa discutam mai mult despre solutii concrete.",
        "submitted_at": new Date("2025-04-05")
    },
    {
        "feedback_id": "fb_1006",
        "session_id": "sess_1006",
        "rating": 5,
        "comment": "Foarte utila partea despre restructurarea cognitiva!",
        "submitted_at": new Date("2025-04-12")
    }
]);