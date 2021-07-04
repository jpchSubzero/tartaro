import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";


const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://udemygoty.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
      id: "juego-2",
      name: "Juego 2",
      votes: 10,
      url: "https://i.ytimg.com/vi/xjWL9-LEs9w/hqdefault.jpg"
  });
});

export const getGoty = functions.https.onRequest(async (request, response) => {
    // const nombre:string = request.query.nombre as string || "ninguno";
    // response.status(404).json(nombre);
    
    const gotyRef = db.collection("goty");
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map(doc => doc.data());

    response.json(juegos);
});

//Servidor express
const app = express();
app.use(cors({origin:true}));

app.get("/goty", async(request, response) => {
    const gotyRef = db.collection("goty");
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map(doc => doc.data());

    response.json(juegos);    
});

app.post("/goty/:id", async(request, response) => {
    const id = request.params.id;
    const juegoRef = db.collection("goty").doc(id);
    const juegoSnap = await juegoRef.get();
    const antes = juegoSnap.data() || {votes:0};

    if (juegoSnap.exists) {
        antes.votes++;
        juegoRef.update({
            votes: antes.votes
        });
        response.json({
            status: true,
            message: `Gracias por tu voto por: ${antes.name}`            
    });
    } else {
        response.status(404).json({
            status: false,
            message: `No existe un juego con el id: ${id}`
        });    
    }
});

app.post("/goty1/:id", async(request, response) => {
    const id = request.params.id;
    const juegoRef = db.collection("goty").doc(id);
    const juegoSnap = await juegoRef.get();

    if (juegoSnap.exists) {
        response.json(juegoSnap.data());
    }
});

export const api = functions.https.onRequest(app);
