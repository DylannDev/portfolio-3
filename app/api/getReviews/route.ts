import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reviewsCollection = collection(db, "reviews");
    const reviewsSnapshot = await getDocs(reviewsCollection);
    const reviews = reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const response = NextResponse.json(reviews, { status: 200 });

    // Gestion du cache
    response.headers.set(
      "Cache-Control",
      "s-maxage=60, stale-while-revalidate=30"
    );

    return response;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Error fetching reviews" },
      { status: 500 }
    );
  }
}
