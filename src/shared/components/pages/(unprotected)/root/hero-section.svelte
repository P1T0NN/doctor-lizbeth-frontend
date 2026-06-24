<script lang="ts">
    // COMPONENTS
    import Button from '@/shared/components/ui/button/button.svelte';

    // LUCIDE ICONS
    import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
    import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
</script>

<section
	id="top"
	class="relative overflow-hidden pt-20 lg:flex lg:h-svh lg:max-h-[1080px] lg:flex-row lg:items-end lg:pt-0"
>
	<!-- Photo sizes the hero on phone; full-bleed behind text on lg+ -->
	<img
		src="/root/hero-section.jpeg"
		alt="Foto de Dra. Lizbeth Razo"
		class="aspect-[3/4] w-full -scale-x-100 object-cover object-top lg:absolute lg:inset-x-0 lg:top-20 lg:bottom-0 lg:aspect-auto lg:h-auto lg:object-center"
	/>

	<!-- Gradient keeps the overlaid text readable on every screen -->
	<div
		class="absolute inset-x-0 top-20 bottom-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent lg:from-primary/70 lg:via-primary/30 lg:to-primary/10"
		aria-hidden="true"
	></div>

	<div
		class="absolute inset-x-0 bottom-0 w-full px-5 pb-12 text-primary-foreground lg:relative lg:inset-x-auto lg:bottom-auto lg:px-10 lg:pt-32 lg:pb-32"
	>
		<span
			class="font-sans text-sm font-medium uppercase tracking-widest text-primary-foreground/85 sm:text-base lg:text-xl"
			>Medicina Estética & Regenerativa</span
		>
		<h1
			class="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] font-light text-balance sm:mt-5 sm:text-6xl lg:text-8xl"
		>
			Belleza que se siente<br />
			<em class="font-normal italic">natural.</em>
		</h1>
		<p class="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:mt-7 sm:text-lg">
			Tratamientos faciales y corporales diseñados para realzar tu esencia, no para esconderla.
		</p>

		<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
			<Button
				href="#agenda"
				class="h-auto w-full justify-center gap-2 rounded-none border-primary bg-primary px-7 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-secondary sm:w-auto"
			>
				Agendar consulta <ArrowRightIcon class="size-4" strokeWidth={1.6} />
			</Button>

			<Button
				href="https://wa.me/524311098145"
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				class="h-auto w-full justify-center gap-2 rounded-none border-primary-foreground bg-transparent px-7 py-4 text-xs tracking-widest text-primary-foreground uppercase hover:bg-background hover:text-foreground sm:w-auto"
			>
				<MessageCircleIcon class="size-4" strokeWidth={1.6} />
				WhatsApp
			</Button>
		</div>
	</div>
</section>