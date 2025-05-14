use('proiect');

// ------------------Update One in users------------------

// Actualizeaza emailul pentru terapeutul 00
db.users.updateOne(
  { 
    user_id: "therapist_00" 
  },
  { 
    $set: { email: "ana.popescu.updated@gmail.com" } 
  }
);

// Actualizeaza orasul pacientului 00
db.users.updateOne(
  {
     user_id: "patient_00" 
    },
  { 
    $set: { 
      "address.city": "Bucuresti" 
    } 
  }
);

// Adauga o noua specializare in vectorul specialties pentru terapeutul 00
db.users.updateOne(
  {
    user_id: "therapist_00" 
  },
  { 
    $push: { 
      specialties: "stress" 
    } 
  }
);


// ------------------Update One in appointments------------------

// Actualizeaza statusul "pending" in "neconfirmat" in istoricul programarii app_1000
db.appointments.updateOne(
    { 
        appointment_id: "app_1000", 
        "history.status": "pending" 
    },
    { 
      $set: { 
        "history.$.status": "neconfirmat" 
      } 
    }
);


// ------------------Update One in sessions------------------

// Actualizeaza scorul emotional si rezumatul sesiunii pentru sesiunea sess_1000
db.sessions.updateOne(
  { 
    session_id: "sess_1000"
  },
  {
    $set: {
      mood_score: 7.2,
      summary: "Clientul a exprimat anxietate usoara. Am exersat respiratie controlata."
    }
  }
);

// Actualizeaza complet un subdocument din vectorul topic_details[0] pentru sesiunea sess_1000
db.sessions.updateOne(
  { 
    session_id: "sess_1000" 
  },
  { 
    $set: { 
      "topic_details.0": { topic: "anxiety", depth: "medium" } 
    } 
  }
);


// ------------------Update One in feedbacks------------------

// Actualizeaza feedback-ul clientului fb_1000.
db.feedbacks.updateOne(
  { 
    feedback_id: "fb_1000" 
  },
  { 
    $set: { 
      comment: "Sesiune foarte utila. Voi reveni saptamana viitoare." 
    } 
  } 
);
