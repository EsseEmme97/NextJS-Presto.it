export { default } from "next-auth/middleware"

export const config = {
	matcher: ['/annunci/:id*', '/annunci/crea'],
  }
