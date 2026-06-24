<script lang="ts">
	// COMPONENTS
	import Dialog from '@/shared/components/ui/dialog/dialog.svelte';
	import ServicesSectionItem from './services-section-item.svelte';

	// DATA
	import { SERVICES } from '@/shared/data/servicesData';

	// TYPES
	import type { Service } from '@/shared/types/types';

	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import ClockIcon from '@lucide/svelte/icons/clock';

	let selectedService = $state<Service | null>(null);
	let dialogOpen = $state(false);

	function openService(service: Service) {
		selectedService = service;
		dialogOpen = true;
	}
</script>

<section id="servicios" class="bg-muted py-24 lg:py-32">
	<div class="mx-auto px-5 lg:px-10">
		<div class="max-w-2xl">
			<span class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground"
				>Tratamientos</span
			>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Cada protocolo, hecho a tu medida.
			</h2>
			<p class="mt-5 max-w-lg text-muted-foreground">
				Una selección de los tratamientos más solicitados en consultorio. Cada plan inicia con una
				valoración personalizada.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-px bg-accent/30 lg:mt-16 lg:grid-cols-4">
			{#each SERVICES as service (service.name)}
				<ServicesSectionItem service={service} onSelect={() => openService(service)} />
			{/each}
		</div>
	</div>

	<Dialog bind:open={dialogOpen} title={selectedService?.name}>
		{#if selectedService}
			<p class="text-sm leading-relaxed text-muted-foreground">
				{selectedService.longDescription}
			</p>

			<div class="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
				<ClockIcon class="size-4 shrink-0" strokeWidth={1.6} />
				{selectedService.duration}
			</div>

			<a
				href="#agenda"
				onclick={() => (dialogOpen = false)}
				class="mt-6 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:text-secondary"
			>
				Agendar consulta <ArrowRightIcon size={12} strokeWidth={1.6} />
			</a>
		{/if}
	</Dialog>
</section>
