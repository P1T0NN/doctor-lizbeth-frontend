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
	<div class="mx-auto max-w-5xl px-5 lg:px-10">
		<div
			class="flex flex-col gap-8 rounded-lg border border-accent/30 bg-background px-6 py-14 shadow-sm sm:px-10 lg:flex-row lg:items-stretch lg:gap-10 lg:py-20"
		>
			<div class="w-full shrink-0 lg:w-[400px]">
				<img
					src="/root/opt/about-section-568w.webp"
					alt="Foto de Dra. Lizbeth Razo"
					class="w-full lg:h-full lg:object-cover lg:object-top"
				/>
			</div>

			<div class="flex min-w-0 flex-1 flex-col text-left">
				<div class="flex flex-col space-y-6">
					<span class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">
						Sobre mí
					</span>

					<h2 class="font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
						Medicina estética con<br />enfoque <em class="italic">regenerativo</em>.
					</h2>

					<p class="text-muted-foreground">
						Acompaño a mujeres en su proceso de cuidado personal con tratamientos avanzados, siempre
						individualizados.
					</p>

					<p class="text-muted-foreground">
						Mi prioridad es la salud de tu piel, la armonía de tus rasgos y que cada resultado se sienta
						tuyo.
					</p>

					<ul class="space-y-3">
						{#each credentials as item (item)}
							<li class="flex items-start gap-3 text-sm text-foreground">
								<span
									class="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-accent"
								>
									<CheckIcon size={10} strokeWidth={2} />
								</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-7 border-l-2 border-accent pl-6 sm:mt-auto lg:flex">
					<blockquote
						class="max-w-md font-serif text-2xl leading-snug text-foreground italic lg:text-3xl"
					>
						“Mi filosofía es realzar, nunca transformar.”
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</section>
