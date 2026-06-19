<script lang="ts" module>
    type Testimonial = {
		quote: string;
		name: string;
		treatment: string;
	};
   
	const testimonials: Testimonial[] = [
		{
			quote:
				'Llegué con mucha duda y salí enamorada del resultado. La doctora explica todo con calma y nunca te empuja a hacer de más.',
			name: 'María F.',
			treatment: 'Ácido Hialurónico'
		},
		{
			quote:
				'El consultorio se siente como un spa, pero con la seguridad de estar en manos de una médica con criterio.',
			name: 'Andrea G.',
			treatment: 'Diamond Glow + Skinbooster'
		},
		{
			quote: 'Mi piel cambió en tres sesiones. Ya es parte de mi rutina cada dos meses.',
			name: 'Paulina R.',
			treatment: 'Liftera'
		}
	];
</script>

<section class="bg-muted py-24 lg:py-32">
	<div class="mx-auto px-5 lg:px-10">
		<div class="mx-auto max-w-2xl text-center">
			<span class="label-eyebrow text-muted-foreground">Testimonios</span>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Lo que dicen <em class="italic">nuestras pacientes</em>.
			</h2>
		</div>

		<div class="mt-14 grid gap-6 md:grid-cols-3 lg:gap-10">
			{#each testimonials as testimonial (testimonial.name)}
				<figure class="flex flex-col bg-background p-8 lg:p-10">
					<span class="-mb-3 font-serif text-7xl leading-none text-accent">“</span>
					<blockquote class="flex-1 font-serif text-xl leading-snug text-foreground italic">
						{testimonial.quote}
					</blockquote>
					<figcaption class="mt-8 border-t border-accent/30 pt-6">
						<div class="font-serif text-lg text-foreground">{testimonial.name}</div>
						<div class="label-eyebrow mt-1 text-muted-foreground">{testimonial.treatment}</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
