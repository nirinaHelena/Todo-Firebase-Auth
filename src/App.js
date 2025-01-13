import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./Auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Nettoyer l'abonnement
  }, []);

  return (
    <div>
      <h1>Authentification Firebase avec React</h1>
      {user ? (
        <div>
          <p>Utilisateur connecté : {user.email}</p>
          <button onClick={() => auth.signOut()}>Se déconnecter</button>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;