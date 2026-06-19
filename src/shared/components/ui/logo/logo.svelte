<script lang="ts">
	import { resolve } from '$app/paths';
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants.js';
	import { cn } from '@/shared/utils/utils.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		src?: string;
		class?: string;
		/** Passed through to `<img>` (e.g. brightness on dark heroes). */
		imgClass?: string;
		href?: '/' | `/#${string}`;
		alt?: string;
		/** Visual size in the header / drawer. */
		size?: 'sm' | 'md';
		/** Use the light mark on dark or transparent hero surfaces. */
		inverse?: boolean;
	} & Omit<HTMLAnchorAttributes, 'href' | 'class' | 'children'>;

	let {
		src = COMPANY_DATA.LOGO,
		class: className,
		imgClass,
		href = `${UNPROTECTED_PAGE_ENDPOINTS.ROOT}#top`,
		alt = `${COMPANY_DATA.NAME} logo`,
		size = 'md',
		inverse = false,
		...restProps
	}: Props = $props();

	const markSize = $derived(size === 'sm' ? 36 : 40);
	const colorClass = $derived(inverse ? 'text-primary-foreground' : 'text-foreground');
</script>

<a
	href={resolve(href)}
	class={cn(
		'group inline-flex min-w-0 shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
		colorClass,
		className
	)}
	aria-label={alt}
	{...restProps}
>
	<img
		src={src}
		alt={alt}
		width={markSize}
		height={markSize}
		class={cn('shrink-0', imgClass)}
	/>
	<span class="min-w-0 leading-tight">
		<span class="block truncate font-serif text-[15px] tracking-wide">
			{COMPANY_DATA.NAME}
		</span>
		<span class="label-eyebrow block truncate opacity-60"> Medicina Estética </span>
	</span>
</a>
