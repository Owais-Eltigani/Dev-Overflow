import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // // publicRoutes: ['/'],
  // publicRoutes: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
