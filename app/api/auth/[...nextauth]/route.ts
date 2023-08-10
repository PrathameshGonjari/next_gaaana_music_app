import { authOptions } from "@/utils/authOptions";
import nextAuth from "next-auth";

const authHandler = nextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
