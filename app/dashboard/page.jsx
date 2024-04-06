"use client"
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

function TournamentList() {



  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tournaments</h1>
      <ul className="list-disc pl-4">

      </ul>
    </div>
  );
}

export default TournamentList;