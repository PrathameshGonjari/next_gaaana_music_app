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
      return NextResponse.json({ error: "Email is already in use!" }, { status: 422 });
    }

    const newUser = await UserModal.create({ ...req.body });

    const response: NewUserResponse = {
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
    };

    return NextResponse.json({ user: response });
  } catch (error) {
    // console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};