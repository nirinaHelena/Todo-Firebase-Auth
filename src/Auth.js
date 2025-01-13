import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Inscription réussie :", userCredential.user);
    } catch (error) {
      console.error("Erreur d'inscription :", error.message);
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Connexion réussie :", userCredential.user);
    } catch (error) {
      console.error("Erreur de connexion :", error.message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("Déconnexion réussie.");
    } catch (error) {
      console.error("Erreur de déconnexion :", error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>S'inscrire</button>
      <button onClick={signIn}>Se connecter</button>
      <button onClick={signOutUser}>Se déconnecter</button>
    </div>
  );
}

export default Auth;