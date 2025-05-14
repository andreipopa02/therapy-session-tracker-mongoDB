use('proiect');

// ------------------Delete One in feedbacks------------------
db.feedbacks.deleteOne({ feedback_id: "fb_1000" });

// ------------------Delete One in sessions------------------
db.sessions.deleteOne({ session_id: "sess_1000" });

// ------------------Delete One in appointments------------------
db.appointments.deleteOne({ appointment_id: "app_1000" });

// ------------------Delete One in users------------------
db.users.deleteOne({ user_id: "patient_00" });
db.users.deleteOne({ user_id: "therapist_00" });
