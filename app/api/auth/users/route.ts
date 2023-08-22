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
  const body = (await req.json()) as NewUserRequest;

  await startDb();

  const oldUser = await UserModal.findOne({ email: body.email });
  if (oldUser)
    return NextResponse.json(
      { error: "email is already in use!" },
      { status: 422 }
    );

  const user = await UserModal.create({ ...body });

  return NextResponse.json({
    user: {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
    },
  });
};
