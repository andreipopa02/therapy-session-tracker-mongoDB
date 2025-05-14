use('proiect');

// ------------------Insert One in users------------------
db.users.insertOne(
  {
    "user_id": "therapist_00",
    "name": "Dr. Ana Popescu",
    "email": "ana.popescu@gmail.com",
    "role": "therapist",
    "specialties": [
      "anxiety", 
      "depression"
    ],
    "address": {
        "street": "Str. Sperantei 5",
        "city": "Iasi",
        "zip": "700203"
    },
    "created_at": new Date("2025-01-01")
  }
);

db.users.insertOne(
  {
    "user_id": "patient_00",
    "name": "Gigi Maftei",
    "email": "gigi.maftei@gmail.com",
    "role": "patient",
    "address": {
        "street": "Str. Pacii 6",
        "city": "Iasi",
        "zip": "700006"
    },
    "created_at": new Date("2025-04-01")
  }
);

// ------------------Insert One in appointments------------------
db.appointments.insertOne(
  {
    "appointment_id": "app_1000",
    "therapist_id": "therapist_00",
    "patient_id": "patient_00",
    "date": new Date("2025-04-05"),
    "history": [
      { "status": "pending", "date": new Date("2025-03-08") },
      { "status": "confirmed", "date": new Date("2025-03-09") },
      { "status": "completed", "date": new Date("2025-04-05") }
    ],
    "notes": "Consultatie pentru anxietate"
  }
);

// ------------------Insert One in sessions------------------
db.sessions.insertOne(
  {
    "session_id": "sess_1000",
    "appointment_id": "app_1000",
    "duration_min": 50,
    "topics_discussed": ["anxiety"],
    "topic_details": [
        { "topic": "anxiety", "depth": "high" }
    ],
    "mood_score": 6.5,
    "summary": "Clientul a exprimat anxietate moderata. Am discutat despre tehnici de respiratie."
  }
);

// ------------------Insert One in feedbacks------------------
db.feedbacks.insertOne(
  {
    "feedback_id": "fb_1000",
    "session_id": "sess_1000",
    "rating": 5,
    "comment": "Sesiune foarte utila.",
    "submitted_at": new Date("2025-04-05")
  }
);