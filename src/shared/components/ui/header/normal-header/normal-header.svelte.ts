export const navItems = [
	{ href: '/#top', label: 'Inicio' },
	{ href: '/#servicios', label: 'Servicios' },
	{ href: '/#sobre', label: 'Sobre mí' },
	{ href: '/#agenda', label: 'Agenda' },
	{ href: '/#galeria', label: 'Galería' },
	{ href: '/#contacto', label: 'Contacto' }
] as const;

export const navLinkClass =
	'rounded-sm px-1 py-2 text-sm tracking-wide whitespace-nowrap transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50';

export const navLinkActiveClass = 'text-foreground';

/** Compare against pathname from `deLocalizeUrl` (e.g. `/en/home` → `/home`). */
export function isNavItemActive(pathname: string, href: string): boolean {
	if (href === '/' || href === '') return pathname === '/' || pathname === '';
	return pathname === href || pathname.startsWith(`${href}/`);
}

class NormalHeader {
	menuOpen = $state(false);

	closeMenu() {
		this.menuOpen = false;
	}
}

export const normalHeader = new NormalHeader();
