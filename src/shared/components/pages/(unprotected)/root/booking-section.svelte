<script lang="ts">
	// COMPONENTS
	import Button from '@/shared/components/ui/button/button.svelte';

	// CONSTANTS
	import { COMPANY_DATA } from '@/shared/constants';

	// LUCIDE ICONS
	import CalendarCheckIcon from '@lucide/svelte/icons/calendar-check';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
</script>

<section id="agenda" class="bg-background py-24 lg:py-32">
	<div class="mx-auto max-w-5xl px-5 lg:px-10">
		<div class="mx-auto max-w-2xl text-center">
			<span class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Agenda en línea</span>

			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Reserva tu cita <em class="italic">24/7</em>.
			</h2>

			<p class="mt-5 text-muted-foreground">
				Selecciona el tratamiento, día y hora que mejor te acomode.
			</p>
		</div>

		<div
			class="mt-12 flex flex-col items-center rounded-lg border border-accent/30 bg-background px-6 py-14 text-center shadow-sm sm:px-10 lg:mt-14 lg:py-20"
		>
			<span
				class="flex size-16 items-center justify-center rounded-full bg-accent/10 text-foreground"
				aria-hidden="true"
			>
				<CalendarCheckIcon class="size-7" strokeWidth={1.4} />
			</span>

			<h3 class="mt-6 font-serif text-2xl font-light text-foreground lg:text-3xl">
				Agenda en nuestro sistema seguro
			</h3>
			<p class="mt-3 max-w-md text-muted-foreground">
				Te llevaremos a nuestra plataforma de citas para elegir el horario perfecto en segundos.
			</p>

			<Button
				href={COMPANY_DATA.BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-8 h-auto gap-2 rounded-none border-primary bg-primary px-7 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-secondary"
			>
				Agendar mi cita <ArrowRightIcon class="size-4" strokeWidth={1.6} />
			</Button>
		</div>

		<p class="mt-6 text-center text-sm text-muted-foreground">
			¿Tienes Dudas?
			<a
				href={COMPANY_DATA.WHATSAPP_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1 text-foreground underline decoration-accent underline-offset-4 hover:decoration-foreground"
			>
				<MessageCircleIcon class="size-3.5" strokeWidth={1.6} />
				Escríbenos
			</a>.
		</p>
	</div>
</section>
