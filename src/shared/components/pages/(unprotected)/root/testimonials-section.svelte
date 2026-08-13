<script lang="ts" module>
    type Testimonial = {
		quote: string[];
		name: string;
	};

	const testimonials: Testimonial[] = [
		{
			quote: [
				'Excelente atención de la doctora, me explicó todo a detalle, muy completo!',
				'El consultorio está súper lindo, limpio y la atención me encanto.'
			],
			name: 'Fernanda Ruezga'
		},
		{
			quote: [
				'Todo muy profesional y agradable...',
				'Felicidades por tan lindo espacio.'
			],
			name: 'Katia Edelwais'
		},
		{
			quote: [
				'Desde que empecé con la doctora Liz me siento más bonita que nunca. No cambió mi cara, resaltó lo mejor de ella.'
			],
			name: 'Maria Padilla'
		}
	];
</script>

<section class="bg-muted py-24 lg:py-32">
	<div class="mx-auto px-5 lg:px-10">
		<div class="mx-auto max-w-2xl text-center">
			<span class="font-sans text-xl font-medium uppercase tracking-widest text-muted-foreground">Testimonios</span>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Lo que dicen <em class="italic">nuestras pacientes</em>.
			</h2>
		</div>

		<div class="mt-14 grid gap-6 md:grid-cols-3 lg:gap-10">
			{#each testimonials as testimonial (testimonial.name)}
				<figure class="flex flex-col bg-background p-8 lg:p-10">
					<span class="-mb-3 font-serif text-7xl leading-none text-accent">“</span>
					<blockquote class="flex-1 space-y-3 font-serif text-xl leading-snug text-foreground italic">
						{#each testimonial.quote as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					</blockquote>
					<div class="mt-6 flex gap-1 text-amber-400" aria-label="Calificación: 5 de 5 estrellas">
						{#each Array.from({ length: 5 }) as _, i (i)}
							<svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
								<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
							</svg>
						{/each}
					</div>
					<figcaption class="mt-8 border-t border-accent/30 pt-6">
						<div class="font-serif text-lg text-foreground">{testimonial.name}</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
