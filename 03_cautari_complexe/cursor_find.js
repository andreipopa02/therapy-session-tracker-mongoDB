// Cerinta: Afiseaza toti pacientii impreuna cu orasul in care locuiesc 
// si data inregistrarii.
use('proiect');
const cursor = db.users.find({ role: "patient" });

while (cursor.hasNext()) {
    const patient = cursor.next();
    print(`Nume: ${patient.name}`);
    print(`Oras: ${patient.address.city}`);
    print(`Inregistrat la: ${patient.created_at.toISOString().split("T")[0]}`);
    print("_________________________");
}

// Cerinta: Afiseaza toti terapeutii impreuna cu lista de specializari aferente.
use('proiect');
const cursor2 = db.users.find({ role: "therapist" });

while (cursor2.hasNext()) {
    const therapist = cursor2.next();
    print(`Terapeut: ${therapist.name}`);
    print("Specializari:");
    therapist.specialties.forEach(s => print(` - ${s}`));
    print("_________________________");
}

// Cerinta: Afiseaza toate sesiunile care au un scor emotional mai mare de 6.5,
// impreuna cu rezumatul fiecareia.
use('proiect');
const cursor3 = db.sessions.find({ mood_score: { $gt: 6.5 } });

while (cursor3.hasNext()) {
    const session = cursor3.next();
    print(`Sesiune: ${session.session_id}`);
    print(`Scor emotional: ${session.mood_score}`);
    print(`Rezumat: ${session.summary}`);
    print("_________________________");
}
