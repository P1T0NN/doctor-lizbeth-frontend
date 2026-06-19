<script lang="ts" module>
    // TYPES
	import type { Component } from 'svelte';
	
    type IconComponent = Component<{ class?: string; size?: number; strokeWidth?: number }>;
    
    type Service = {
		name: string;
		description: string;
		icon: IconComponent;
	};
	
    const services: Service[] = [
		{ name: 'Botox', description: 'Relajación de líneas de expresión.', icon: SparklesIcon },
		{ name: 'Ácido Hialurónico', description: 'Volumen y contorno facial.', icon: DropletIcon },
		{
			name: 'Liftera',
			description: 'Lifting sin cirugía con ultrasonido.',
			icon: WandSparklesIcon
		},
		{ name: 'Diamond Glow', description: 'Limpieza facial profunda.', icon: GemIcon },
		{ name: 'Skinbooster', description: 'Hidratación profunda de piel.', icon: SunIcon },
		{ name: 'Sueroterapia', description: 'Vitaminas IV personalizadas.', icon: FlaskConicalIcon },
		{ name: 'Enzimas', description: 'Modelado corporal.', icon: LeafIcon },
		{ name: 'Venus Velocity', description: 'Depilación láser.', icon: ZapIcon }
	];
</script>

<script lang="ts">
    // LUCIDE ICONS
    import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
    import SparklesIcon from '@lucide/svelte/icons/sparkles';
    import DropletIcon from '@lucide/svelte/icons/droplet';
    import WandSparklesIcon from '@lucide/svelte/icons/wand-sparkles';
    import GemIcon from '@lucide/svelte/icons/gem';
    import SunIcon from '@lucide/svelte/icons/sun';
    import FlaskConicalIcon from '@lucide/svelte/icons/flask-conical';
    import LeafIcon from '@lucide/svelte/icons/leaf';
    import ZapIcon from '@lucide/svelte/icons/zap';
</script>

<section id="servicios" class="bg-muted py-24 lg:py-32">
	<div class="mx-auto px-5 lg:px-10">
		<div class="max-w-2xl">
			<span class="label-eyebrow text-muted-foreground">Tratamientos</span>
			<h2 class="mt-4 font-serif text-4xl leading-tight font-light text-foreground lg:text-5xl">
				Cada protocolo, hecho a tu medida.
			</h2>
			<p class="mt-5 max-w-lg text-muted-foreground">
				Una selección de los tratamientos más solicitados en consultorio. Cada plan inicia con
				una valoración personalizada.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-px bg-accent/30 lg:mt-16 lg:grid-cols-4">
			{#each services as service (service.name)}
				{@const ServiceIcon = service.icon}
				
				<article
					class="group flex flex-col gap-4 bg-muted p-6 transition-colors hover:bg-background lg:p-8"
				>
					<div
						class="placeholder-bg flex aspect-square items-center justify-center bg-background"
					>
						<ServiceIcon class="text-muted-foreground" size={36} strokeWidth={1.6} />
					</div>
					
					<div class="flex-1">
						<h3 class="font-serif text-2xl leading-tight text-foreground">{service.name}</h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</div>
					<a
						href="#agenda"
						class="label-eyebrow inline-flex items-center gap-1.5 text-foreground transition-colors group-hover:text-secondary"
					>
						Conoce más <ArrowRightIcon size={12} strokeWidth={1.6} />
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>