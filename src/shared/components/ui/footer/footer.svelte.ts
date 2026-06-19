// CONFIG
export const footerLinkGroups = [
	{
		id: 'navigation',
		heading: 'Navegación',
		links: [
			{ href: '/#top', label: 'Inicio' },
			{ href: '/#servicios', label: 'Servicios' },
			{ href: '/#sobre', label: 'Sobre mí' },
			{ href: '/#galeria', label: 'Galería' },
			{ href: '/#agenda', label: 'Agenda' },
			{ href: '/#contacto', label: 'Contacto' }
		]
	}
] as const;

export const footerLinkClass =
	'text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary';
