import { SignIn } from '@clerk/nextjs';

export default function Signin() {
  return <SignIn path="/sign-in" />;
}
