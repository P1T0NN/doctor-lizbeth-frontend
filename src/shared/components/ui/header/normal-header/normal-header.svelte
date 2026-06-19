<script lang="ts">
	// SVELTEKIT
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { scrollY } from 'svelte/reactivity/window';

	// CONFIG
	import { COMPANY_DATA } from '@/shared/constants.js';

	// CLASSES
	import {
		isNavItemActive,
		navItems,
		navLinkActiveClass,
		navLinkClass
	} from './normal-header.svelte.ts';

	// COMPONENTS
	import Logo from '@/shared/components/ui/logo/logo.svelte';
	import NormalHeaderMobile from './normal-header-mobile.svelte';

	// UTILS
	import { cn } from '@/shared/utils/utils.js';

	// LUCIDE ICONS
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';

	type Props = {
		class?: string;
		/** Pin the bar under the viewport top while scrolling. */
		isSticky?: boolean;
		/**
		 * Use a clear bar over heroes. When `changeBgOnScroll` is true, the bar
		 * stays clear at the top of the page and picks up the solid surface after scroll.
		 */
		isTransparent?: boolean;
		/** Only used when `isTransparent` is true: solid frosted bar after leaving the top. */
		changeBgOnScroll?: boolean;
		/** Show [`Logo`](@/shared/components/ui/logo/logo.svelte); if false, use the company name link. */
		hasLogo?: boolean;
	};

	let {
		class: className,
		isSticky = true,
		isTransparent = false,
		changeBgOnScroll = false,
		hasLogo = true
	}: Props = $props();

	const pathnameLogical = $derived(page.url.pathname);
	const scrolledPastTop = $derived((scrollY.current ?? 0) > 8);

	const useSolidBar = $derived(!isTransparent || (changeBgOnScroll && scrolledPastTop));
</script>

<header
	class={cn(
		'z-40 w-full max-w-full overflow-x-clip transition-all duration-300 ease-out',
		isSticky ? 'fixed inset-x-0 top-0' : 'relative',
		useSolidBar
			? 'border-b border-accent/20 bg-background/85 shadow-none backdrop-blur-md'
			: 'border-b border-transparent bg-transparent shadow-none backdrop-blur-none',
		className
	)}
>
	<div class="mx-auto flex h-20 w-full items-center justify-between gap-6 px-5 lg:px-10">
		<div class="flex min-w-0 shrink items-center gap-2 lg:shrink-0">
			{#if hasLogo}
				<Logo inverse={!useSolidBar} />
			{:else}
				<a
					href={resolve('/#top')}
					class={cn(
						'truncate font-serif text-[15px] tracking-wide',
						useSolidBar ? 'text-foreground' : 'text-primary-foreground'
					)}
				>
					{COMPANY_DATA.NAME}
				</a>
			{/if}
		</div>

		<nav class="hidden min-w-0 flex-1 justify-center lg:flex" aria-label="Main">
			<ul class="flex max-w-full min-w-0 flex-wrap items-center justify-center gap-9">
				{#each navItems as item (item.href)}
					{@const active = isNavItemActive(pathnameLogical, item.href)}
					<li class="shrink-0">
						<a
							href={resolve(item.href)}
							class={cn(
								navLinkClass,
								useSolidBar
									? 'text-foreground hover:text-secondary'
									: 'text-primary-foreground hover:text-muted',
								active && navLinkActiveClass
							)}
							aria-current={active ? 'page' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="ml-auto flex shrink-0 items-center justify-end gap-3 lg:ml-0">
			<a
				href="https://wa.me/524311098145"
				target="_blank"
				rel="noopener noreferrer"
				class={cn(
					'hidden items-center gap-2 px-4 py-2.5 text-xs tracking-widest uppercase transition-colors sm:inline-flex',
					useSolidBar
						? 'bg-primary text-primary-foreground hover:bg-secondary'
						: 'bg-background text-foreground hover:bg-muted'
				)}
			>
				<MessageCircleIcon class="size-4" strokeWidth={1.6} />
				<span class="hidden md:inline">WhatsApp</span>
			</a>

			<a
				href="https://wa.me/524311098145"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary-foreground sm:hidden"
				aria-label="WhatsApp"
			>
				<MessageCircleIcon class="size-[18px]" strokeWidth={1.6} />
			</a>

			<NormalHeaderMobile {hasLogo} isInverted={!useSolidBar} />
		</div>
	</div>
</header>
