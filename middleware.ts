import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/api/webhook',
    '/',
   
  ],
  ignoredRoutes: ['/api/webhook', '/api/chatgpt'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

 // '/question/:id',
 //    '/tags',
 //    '/tags/:id',
 //    '/profile/:id',
 //    '/community',
 //    '/jobs',
 //    '/',
   
