import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, title, message, stars } = await request.json();

  // Vérification basique pour les champs requis
  if (!name || !email || !title || !message || typeof stars !== "number") {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const reviewRef = await addDoc(collection(db, "reviews"), {
      name,
      email,
      title,
      message,
      stars,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: reviewRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding review: ", error);
    return NextResponse.json({ error: "Error adding review" }, { status: 500 });
  }
}
