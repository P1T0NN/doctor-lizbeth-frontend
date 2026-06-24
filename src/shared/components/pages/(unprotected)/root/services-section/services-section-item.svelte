<script lang="ts">
	// TYPES
	import type { Service } from '@/shared/types/types';

	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	type Props = {
		service: Service;
		onSelect: () => void;
	};

	let { service, onSelect }: Props = $props();

	const ServiceIcon = $derived(service.icon);
</script>

<button
	type="button"
	onclick={onSelect}
	class="group flex w-full cursor-pointer flex-col gap-4 bg-muted p-6 text-left transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:p-8"
>
	<div
		class="placeholder-bg flex aspect-square w-full items-center justify-center bg-background"
	>
		<ServiceIcon class="text-muted-foreground" size={36} strokeWidth={1.6} />
	</div>

	<div class="flex-1">
		<h3 class="font-serif text-2xl leading-tight text-foreground">{service.name}</h3>
		<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
			{service.description}
		</p>
	</div>

	<span
		class="inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-widest text-foreground transition-colors group-hover:text-secondary"
	>
		Conoce más <ArrowRightIcon size={12} strokeWidth={1.6} />
	</span>
</button>
