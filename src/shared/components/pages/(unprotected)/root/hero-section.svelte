<script lang="ts">
    // COMPONENTS
    import Button from '@/shared/components/ui/button/button.svelte';

    // LUCIDE ICONS
    import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
    import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
</script>

<section id="top" class="relative flex min-h-svh items-end">
	<img 
		src="/root/hero-section.jpeg" 
		alt="Foto de Dra. Lizbeth Razo" 
		class="absolute inset-0 w-full h-full object-cover" 
	/>

	<div
		class="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/30 to-primary/10"
		aria-hidden="true"
	></div>

	<div
		class="relative mx-auto w-full px-5 pt-32 pb-24 text-primary-foreground lg:px-10 lg:pb-32"
	>
		<span class="label-eyebrow text-primary-foreground/85"
			>Medicina Estética & Regenerativa</span
		>
		<h1
			class="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] font-light text-balance sm:text-6xl lg:text-8xl"
		>
			Belleza que se siente<br />
			<em class="font-normal italic">natural.</em>
		</h1>
		<p class="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
			Tratamientos faciales y corporales diseñados para realzar tu esencia, no para esconderla.
		</p>

		<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
			<Button
				href="#agenda"
				class="h-auto gap-2 rounded-none border-primary bg-primary px-7 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-secondary"
			>
				Agendar consulta <ArrowRightIcon class="size-4" strokeWidth={1.6} />
			</Button>

			<Button
				href="https://wa.me/524311098145"
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				class="h-auto gap-2 rounded-none border-primary-foreground bg-transparent px-7 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-background hover:text-foreground"
			>
				<MessageCircleIcon class="size-4" strokeWidth={1.6} />
				WhatsApp
			</Button>
		</div>
	</div>

	<a
		href="#sobre"
		aria-label="Desplázate para descubrir más"
		class="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/80"
	>
		<span class="label-eyebrow">Descubre</span>
		<span class="block h-10 w-px bg-background/60"></span>
	</a>
</section>