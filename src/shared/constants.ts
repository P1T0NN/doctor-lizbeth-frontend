export const COMPANY_DATA = {
	NAME: 'Dra Lizbeth Razo',
	EMAIL: 'contacto@dralizbethrazo.com',
	DOMAIN: 'dralizbethrazo.com',
	LOGO: '/logo/opt/logo_no_letters-128w.webp',
	DESCRIPTION: 'Medicina estética con enfoque regenerativo en Jalostotitlán, Jalisco.',
	PHONE: '+52 431 109 8145',
	PHONE_HREF: 'tel:+524311098145',
	WHATSAPP_URL: 'https://wa.me/524311098145',
	BOOKING_URL: 'https://citas.medicalfile.io/dra.lizbethrazo',
	INSTAGRAM_URL: 'https://instagram.com/dra.lizbethrazo',
	FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=100036084646125',
	ADDRESS: 'Calle Miguel Hidalgo 19, Centro, 47120 Jalostotitlán, Jalisco'
} as const;

export const UNPROTECTED_PAGE_ENDPOINTS = {
	ROOT: '/',
	LOGIN: '/login',
	TERMS_OF_SERVICE: '/terms',
	SIDEBAR: '/sidebar',
	CALENDAR: '/calendar',
	UPLOAD_FILE: '/file-upload',
	TABLE: '/table',
	UPLOADED_FILES: '/uploaded-files/:id',
	SIGNUP: '/signup',
	FORGOT_PASSWORD: '/forgot-password',
	CONTACT: '/contact'
} as const;

/**
 * Replace `:param` segments in a route pattern (e.g. `/uploaded-files/:id`).
 * Values are passed through `encodeURIComponent`.
 */
export function fillRoutePattern(pattern: string, params: Record<string, string>): string {
	let path = pattern;
	for (const [key, value] of Object.entries(params)) {
		path = path.replace(`:${key}`, encodeURIComponent(value));
	}
	return path;
}
