// TYPES
import type { Service } from '@/shared/types/types';

// LUCIDE ICONS
import SparklesIcon from '@lucide/svelte/icons/sparkles';
import LayersIcon from '@lucide/svelte/icons/layers';
import GemIcon from '@lucide/svelte/icons/gem';
import ScanLineIcon from '@lucide/svelte/icons/scan-line';
import WandSparklesIcon from '@lucide/svelte/icons/wand-sparkles';
import DumbbellIcon from '@lucide/svelte/icons/dumbbell';
import RadioIcon from '@lucide/svelte/icons/radio';
import WindIcon from '@lucide/svelte/icons/wind';
import LeafIcon from '@lucide/svelte/icons/leaf';
import DropletIcon from '@lucide/svelte/icons/droplet';
import ZapIcon from '@lucide/svelte/icons/zap';
import SyringeIcon from '@lucide/svelte/icons/syringe';

export const SERVICES: Service[] = [
	{
		name: 'Toxina botulínica (Botox)',
		description: 'Neuromodulador para líneas de expresión y más.',
		longDescription:
			'Neuromodulador para mejorar líneas de expresión, hiperhidrosis (sudoración excesiva), migraña, sonrisa gingival y bruxismo.',
		duration: '30 min',
		icon: SparklesIcon,
		image: '/root/opt/services-1-640w.webp'
	},
	{
		name: 'Sculptra',
		description: 'Bioestimulador de colágeno (ácido poli L láctico).',
		longDescription: 'Bioestimulador de colágeno (ácido poli L láctico).',
		duration: '45 min',
		icon: LayersIcon,
		image: '/root/opt/services-2-640w.webp'
	},
	{
		name: 'Diamond Glow',
		description: 'Limpieza facial profunda grado médico.',
		longDescription: 'Limpieza facial profunda grado médico.',
		duration: '1 hora',
		icon: GemIcon,
		image: '/root/opt/services-3-640w.webp'
	},
	{
		name: 'Nanopore',
		description: 'Microagujas para textura, manchas y luminosidad.',
		longDescription:
			'Microagujas para mejorar cicatrices, textura, manchas, poros, hidratación y luminosidad.',
		duration: '1 hora',
		icon: ScanLineIcon,
		image: '/root/opt/services-4-640w.webp'
	},
	{
		name: 'Liftera',
		description: 'HIFU para mejorar lifting y firmeza del rostro.',
		longDescription: 'HIFU para mejorar lifting y firmeza del rostro.',
		duration: '1 hora',
		icon: WandSparklesIcon,
		image: '/root/opt/services-5-640w.webp'
	},
	{
		name: 'Genesis',
		description: 'Definición y marcaje corporal con HIFEM.',
		longDescription: 'HIFEM — 20,000 contracciones en 30 min para definición y marcaje corporal.',
		duration: '30 min',
		icon: DumbbellIcon,
		image: '/root/opt/services-6-640w.webp'
	},
	{
		name: 'Sculpt & Shape',
		description: 'Radiofrecuencia para rostro y cuerpo.',
		longDescription: 'Radiofrecuencia para mejorar flacidez, grasa y celulitis — rostro y cuerpo.',
		duration: '1 hora',
		icon: RadioIcon,
		image: '/root/opt/services-7-640w.webp'
	},
	{
		name: 'Novapress',
		description: 'Presoterapia y drenaje linfático.',
		longDescription: 'Presoterapia y drenaje linfático.',
		duration: '1 hora',
		icon: WindIcon,
		image: '/root/opt/services-8-960w.webp'
	},
	{
		name: 'Enzimas reductoras',
		description: 'Inyectable para flacidez y grasa localizada.',
		longDescription: 'Inyectable para disminuir flacidez y grasa localizada.',
		duration: '30 min',
		icon: LeafIcon,
		image: '/root/opt/services-9-960w.webp'
	},
	{
		name: 'Cuidado de tus labios',
		description: 'Tratamientos para labios injectables y no injectables. Volumen e hidratación.',
		longDescription: 'Tratamientos para labios injectables y no injectables. Volumen e hidratación.', //  SAME BECAUSE MARIA CACHONDA SAID SO
		duration: '1 hora',
		icon: DropletIcon,
		image: '/root/opt/services-10-960w.webp'
	},
	{
		name: 'Depilación láser Venus Velocity',
		description: 'Eliminación de vello no deseado en rostro y cuerpo.',
		longDescription: 'Tecnología para eliminar el vello no deseado en rostro y cuerpo.',
		duration: '15–90 min (según zona)',
		icon: ZapIcon,
		image: '/root/opt/services-11-560w.webp'
	},
	{
		name: 'Jety',
		description: 'Mesoterapia para textura, manchas y luminosidad.',
		longDescription:
			'Mesoterapia para mejorar cicatrices, textura, manchas, poros, hidratación y luminosidad.',
		duration: '1 hora',
		icon: SyringeIcon,
		image: '/root/opt/services-12-640w.webp'
	}
];
