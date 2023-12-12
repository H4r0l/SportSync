import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tournaments = await prisma.tournament.findMany();
  return NextResponse.json(tournaments);
}
export async function POST(request) {
    const data = await request.json();
    const tournament = await prisma.tournament.create({ data });
    return NextResponse.json(tournament);
}

export async function PUT(request, params) {
  const tournamentId = params.tournamentId;
  const data = await request.json();
  await prisma.tournament.update({ where: { id: tournamentId }, data });
  return NextResponse.json({ message: "Tournament updated successfully" });
}
export async function DELETE(request, params) {
  const tournamentId = params.tournamentId;
  await prisma.tournament.delete({ where: { id: tournamentId } });
  return NextResponse.json({ message: "Tournament deleted successfully" });
}