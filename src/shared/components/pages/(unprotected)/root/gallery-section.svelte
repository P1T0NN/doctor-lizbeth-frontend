<section id="galeria" class="border-t border-accent/15 bg-background py-24 lg:py-32">
	<div class="mx-auto px-5 lg:px-10">
		<div class="flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div>
				<span class="label-eyebrow text-muted-foreground">Galería</span>
				<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
					Resultados reales.
				</h2>
			</div>
			<p class="max-w-sm text-muted-foreground">
				Casos seleccionados del consultorio. Cambios sutiles, naturales, progresivos.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-5">
			{#each Array.from({ length: 6 }) as _, i (i)}
				<figure class="placeholder-bg relative aspect-square overflow-hidden bg-muted">
					<div class="absolute inset-0 grid grid-cols-2">
						<div class="flex items-end border-r border-primary-foreground/60 p-3">
							<span class="label-eyebrow text-muted-foreground/80">Antes</span>
						</div>
						<div class="flex items-end p-3">
							<span class="label-eyebrow text-foreground">Después</span>
						</div>
					</div>
				</figure>
			{/each}
		</div>

		<p class="mt-8 text-xs text-muted-foreground italic">
			Imágenes publicadas con consentimiento expreso de las pacientes.
		</p>
	</div>
</section>
