"use client"
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

function TournamentList() {
  const [tournaments, setTournaments] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/tournaments")
      .then((response) => response.json())
      .then((data) => setTournaments(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tournaments</h1>
      <ul className="list-disc pl-4">
              {tournaments.map((tournament) => (
                  <li key={tournament.id} className="mb-2">
                      {tournament.name}
                      {session ? (
                          <button onClick={() => { }}>Log In</button>
                      ) : (
                          <button onClick={() => signIn("google")}>Log In with Google</button>
                      )}
                  </li>
              ))}
      </ul>
    </div>
  );
}

export default TournamentList;