<script lang="ts" module>
    const credentials = [
		'Cédula profesional registrada',
		'Especialidad en medicina estética',
		'+8 años de experiencia clínica',
		'Miembro de la SOMEMI'
	] as const;
</script>

<script lang="ts">
	// LUCIDE ICONS
	import CheckIcon from '@lucide/svelte/icons/check';
</script>

<section id="sobre" class="bg-background py-24 lg:py-32">
	<div
		class="mx-auto flex w-full flex-col items-center justify-center gap-6 border-y border-muted px-5 py-10 lg:flex-row lg:justify-start lg:gap-8 lg:px-10"
	>
		<div class="w-full max-w-md shrink-0 lg:w-[400px]">
			<img 
				src="/root/opt/about-section-568w.webp" 
				alt="Foto de Dra. Lizbeth Razo"
				class="w-full"
			/>
		</div>

		<div class="max-w-xl">
			<span class="label-eyebrow text-muted-foreground">Sobre mí</span>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Medicina estética con<br />enfoque <em class="italic">regenerativo</em>.
			</h2>
			<p class="mt-6 max-w-lg leading-relaxed text-muted-foreground">
				Acompaño a mujeres en su proceso de cuidado personal con tratamientos avanzados, siempre
				individualizados. Mi prioridad es la salud de tu piel, la armonía de tus rasgos y que cada
				resultado se sienta tuyo.
			</p>

			<ul class="mt-8 space-y-3">
				{#each credentials as item (item)}
					<li class="flex items-start gap-3 text-sm text-foreground">
						<span
							class="mt-1 inline-flex size-4 items-center justify-center rounded-full border border-accent"
						>
							<CheckIcon size={10} strokeWidth={2} />
						</span>
						{item}
					</li>
				{/each}
			</ul>

			<blockquote
				class="mt-10 max-w-md border-l-2 border-accent pl-6 font-serif text-2xl leading-snug text-foreground italic lg:text-3xl"
			>
				“Mi filosofía es realzar, nunca transformar.”
			</blockquote>
		</div>
	</div>
</section>
