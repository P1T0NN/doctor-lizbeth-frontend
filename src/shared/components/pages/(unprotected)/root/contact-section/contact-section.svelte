<script lang="ts">
	// SVELTEKIT IMPORTS
	import { resolve } from '$app/paths';
	import { PUBLIC_GOOGLE_STATIC_MAPS_API_KEY } from '$env/static/public';

	// CONFIG
	import { COMPANY_DATA } from '@/shared/constants';

	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';

	// LUCIDE ICONS
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	const latitude = 21.1652695;
	const longitude = -102.4670475;

	const mapsEmbedUrl = $derived(
		`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x300&markers=color:red|${latitude},${longitude}&key=${PUBLIC_GOOGLE_STATIC_MAPS_API_KEY}`
	);

	// DEBUG: surface why the static map may not render. Remove once resolved.
	$effect(() => {
		console.log(
			'[static-map] key present:',
			Boolean(PUBLIC_GOOGLE_STATIC_MAPS_API_KEY),
			'| key length:',
			PUBLIC_GOOGLE_STATIC_MAPS_API_KEY?.length ?? 0
		);
		console.log('[static-map] url:', mapsEmbedUrl);
	});
</script>

<section id="contacto" class="bg-background py-24 lg:py-32">
	<div class="mx-auto grid max-w-7xl items-stretch gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
		<div class="order-2 min-w-0 lg:order-1">
			<div class="relative aspect-4/3 w-full overflow-hidden">
				<iframe
					title="Mapa de ubicación del consultorio de Dra. Lizbeth Razo"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.676479454095!2d-102.46962242495209!3d21.16526948051841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429134625747e5b%3A0xc7658077500bbb0a!2sDra.%20Lizbeth%20Razo!5e0!3m2!1ses-419!2ses!4v1781884924567!5m2!1ses-419!2ses"
					class="absolute inset-0 h-full w-full border-0"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>

		<div class="order-1 flex flex-col lg:order-2">
			<span class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Contacto</span>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Te esperamos en el consultorio.
			</h2>

			<dl class="mt-10 space-y-7">
				<div class="flex gap-4">
					<MapPinIcon size={20} class="mt-1 text-accent" strokeWidth={1.6} />
					
					<div>
						<dt class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Dirección</dt>
						<dd class="mt-1 leading-relaxed text-foreground">
							{COMPANY_DATA.ADDRESS}
						</dd>
					</div>
				</div>

				<div class="flex gap-4">
					<PhoneIcon size={20} class="mt-1 text-accent" strokeWidth={1.6} />

					<div>
						<dt class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Teléfono</dt>
						<dd class="mt-1 text-foreground">
							<a href={COMPANY_DATA.PHONE_HREF} class="hover:text-secondary">{COMPANY_DATA.PHONE}</a>
						</dd>
					</div>
				</div>

				<div class="flex gap-4">
					<MessageCircleIcon size={20} class="mt-1 text-accent" strokeWidth={1.6} />

					<div>
						<dt class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">WhatsApp</dt>
						<dd class="mt-1 text-foreground">
							<a
								href={COMPANY_DATA.WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-secondary"
							>
								Escríbenos directo
							</a>
						</dd>
					</div>
				</div>

				<div class="flex gap-4">
					<ClockIcon size={20} class="mt-1 text-accent" strokeWidth={1.6} />
					<div>
						<dt class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Horarios</dt>
						<dd class="mt-1 leading-relaxed text-foreground">
							Lun–Vie · 10:00 — 19:00<br />
							Sáb · 10:00 — 14:00
						</dd>
					</div>
				</div>
			</dl>

			<Button
				href={resolve('/#agenda')}
				class="mt-10 h-auto gap-2 self-start rounded-none border-primary bg-primary px-8 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-secondary"
			>
				Agendar consulta <ArrowRightIcon class="size-4" strokeWidth={1.6} />
			</Button>
		</div>
	</div>
</section>
