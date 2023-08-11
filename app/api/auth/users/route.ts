import startDb from "@/lib/db";
import UserModal from "@/models/userModel";
import { NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  name: string;
  email: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  try {
    const { email } = await req.json() as NewUserRequest;

    await startDb(); 

    const existingUser = await UserModal.findOne({ email });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "Email is already in use!" }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    const newUser = await UserModal.create({ ...req.body });

    const response: NewUserResponse = {
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
    };

    return new NextResponse(
      JSON.stringify({ user: response }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
