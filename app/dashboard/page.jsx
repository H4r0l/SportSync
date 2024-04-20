"use client"
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

function TournamentList() {

  return (
    <>
    {/* Generate a default Homepage here with three categories and lorem ipsums*/}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center mt-10 text-black ">Tournaments</h1>
      </div>

    </>
  );
}

export default TournamentList;