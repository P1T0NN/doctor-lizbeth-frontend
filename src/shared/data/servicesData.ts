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
		calendarColor: 'Azul cielo',
		calendarColorHex: '#87CEEB',
		icon: SparklesIcon
	},
	{
		name: 'Sculptra',
		description: 'Bioestimulador de colágeno (ácido poli L láctico).',
		longDescription: 'Bioestimulador de colágeno (ácido poli L láctico).',
		duration: '45 min',
		calendarColor: 'Azul marino',
		calendarColorHex: '#1B3A5C',
		icon: LayersIcon
	},
	{
		name: 'Diamond Glow',
		description: 'Limpieza facial profunda grado médico.',
		longDescription: 'Limpieza facial profunda grado médico.',
		duration: '1 hora',
		calendarColor: 'Azul gris',
		calendarColorHex: '#6B8BA4',
		icon: GemIcon
	},
	{
		name: 'Nanopore',
		description: 'Microagujas para textura, manchas y luminosidad.',
		longDescription:
			'Microagujas para mejorar cicatrices, textura, manchas, poros, hidratación y luminosidad.',
		duration: '1 hora',
		calendarColor: 'Café',
		calendarColorHex: '#6F4E37',
		icon: ScanLineIcon
	},
	{
		name: 'Liftera',
		description: 'HIFU para mejorar lifting y firmeza del rostro.',
		longDescription: 'HIFU para mejorar lifting y firmeza del rostro.',
		duration: '1 hora',
		calendarColor: 'Fucsia',
		calendarColorHex: '#C71585',
		icon: WandSparklesIcon
	},
	{
		name: 'Genesis',
		description: 'Definición y marcaje corporal con HIFEM.',
		longDescription: 'HIFEM — 20,000 contracciones en 30 min para definición y marcaje corporal.',
		duration: '30 min',
		calendarColor: 'Negro',
		calendarColorHex: '#232323',
		icon: DumbbellIcon
	},
	{
		name: 'Sculpt & Shape',
		description: 'Radiofrecuencia para rostro y cuerpo.',
		longDescription: 'Radiofrecuencia para mejorar flacidez, grasa y celulitis — rostro y cuerpo.',
		duration: '1 hora',
		calendarColor: 'Verde aqua',
		calendarColorHex: '#40E0D0',
		icon: RadioIcon
	},
	{
		name: 'Novapress',
		description: 'Presoterapia y drenaje linfático.',
		longDescription: 'Presoterapia y drenaje linfático.',
		duration: '1 hora',
		calendarColor: 'Verde pistache',
		calendarColorHex: '#93C572',
		icon: WindIcon
	},
	{
		name: 'Enzimas reductoras',
		description: 'Inyectable para flacidez y grasa localizada.',
		longDescription: 'Inyectable para disminuir flacidez y grasa localizada.',
		duration: '30 min',
		calendarColor: 'Rosa',
		calendarColorHex: '#F4A6C1',
		icon: LeafIcon
	},
	{
		name: 'Ácido hialurónico',
		description: 'Solo labios — no se utiliza en ninguna otra zona.',
		longDescription:
			'Ácido hialurónico exclusivamente para labios. En este consultorio no lo usamos en pómulos, mentón ni otras áreas: únicamente labios, para volumen, hidratación y armonía del contorno labial.',
		duration: '1 hora',
		calendarColor: 'Rosa',
		calendarColorHex: '#F4A6C1',
		icon: DropletIcon
	},
	{
		name: 'Depilación láser Venus Velocity',
		description: 'Eliminación de vello no deseado en rostro y cuerpo.',
		longDescription: 'Tecnología para eliminar el vello no deseado en rostro y cuerpo.',
		duration: '15–90 min (según zona)',
		calendarColor: 'Púrpura',
		calendarColorHex: '#9B59B6',
		icon: ZapIcon
	},
	{
		name: 'Jety',
		description: 'Mesoterapia para textura, manchas y luminosidad.',
		longDescription:
			'Mesoterapia para mejorar cicatrices, textura, manchas, poros, hidratación y luminosidad.',
		duration: '1 hora',
		calendarColor: 'Verde limón',
		calendarColorHex: '#ADFF2F',
		icon: SyringeIcon
	}
];
