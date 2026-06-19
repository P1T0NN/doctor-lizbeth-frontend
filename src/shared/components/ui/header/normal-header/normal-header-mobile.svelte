<script lang="ts">
	// SVELTEKIT
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	// CONFIG
	import { COMPANY_DATA } from '@/shared/constants.js';

	// CLASSES
	import {
		isNavItemActive,
		normalHeader,
		navItems,
		navLinkActiveClass
	} from './normal-header.svelte.ts';

	// COMPONENTS
	import Logo from '@/shared/components/ui/logo/logo.svelte';
	import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/shared/components/ui/drawer';

	// UTILS
	import { cn } from '@/shared/utils/utils.js';

	// TYPES
	import type { ClassValue } from 'clsx';

	// LUCIDE ICONS
	import MenuIcon from '@lucide/svelte/icons/menu';
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';
	import XIcon from '@lucide/svelte/icons/x';

	let { hasLogo = true, isInverted = false }: { hasLogo?: boolean; isInverted?: boolean } =
		$props();

	const pathnameLogical = $derived(page.url.pathname);

	const handleCloseMenu = () => {
		normalHeader.menuOpen = false;
	};
</script>

<Drawer
	bind:open={normalHeader.menuOpen}
	direction="right"
	shouldScaleBackground={false}
>
	<DrawerTrigger>
		{#snippet child({ props })}
			<button
				{...props}
				type="button"
				class={cn(
					'inline-flex size-10 touch-manipulation items-center justify-center rounded-sm transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 lg:hidden',
					isInverted
						? 'text-primary-foreground hover:text-muted'
						: 'text-foreground hover:text-secondary',
					props.class as ClassValue
				)}
				aria-controls="site-mobile-nav"
				aria-label={normalHeader.menuOpen ? 'Close menu' : 'Open menu'}
			>
				{#if normalHeader.menuOpen}
					<XIcon class="size-5" />
				{:else}
					<MenuIcon class="size-5" />
				{/if}
			</button>
		{/snippet}
	</DrawerTrigger>

	<DrawerContent
		id="site-mobile-nav"
		aria-describedby={undefined}
		class="flex h-full max-h-dvh w-full flex-col gap-0 overflow-x-hidden overflow-y-auto border-accent/20 bg-background p-0 shadow-none! data-[vaul-drawer-direction=right]:w-full lg:hidden"
	>
		<div
			class="flex h-20 min-w-0 items-center justify-between gap-2 border-b border-accent/20 px-5"
		>
			<div class="min-w-0">
				{#if hasLogo}
					<Logo size="sm" onclick={normalHeader.closeMenu} />
				{:else}
					<span class="truncate font-serif text-[15px] tracking-wide text-foreground">
						{COMPANY_DATA.NAME}
					</span>
				{/if}
			</div>

			<DrawerClose>
				<button
					type="button"
					class="inline-flex size-10 shrink-0 touch-manipulation items-center justify-center rounded-sm text-foreground transition-colors outline-none hover:text-secondary focus-visible:ring-[3px] focus-visible:ring-ring/50"
					aria-label="Close menu"
				>
					<XIcon class="size-5.5" strokeWidth={1.6} />
				</button>
			</DrawerClose>
		</div>

		<nav aria-label="Mobile main" class="flex-1 px-6 py-10">
			<ul class="flex flex-col gap-1">
				{#each navItems as item, i (item.href)}
					{@const active = isNavItemActive(pathnameLogical, item.href)}
					<li>
						<a
							id={i === 0 ? 'site-mobile-nav-first' : undefined}
							href={resolve(item.href)}
							class={cn(
								'block w-full border-b border-accent/20 py-3 font-serif text-3xl leading-tight text-foreground transition-colors outline-none hover:text-secondary focus-visible:ring-[3px] focus-visible:ring-ring/50',
								active && navLinkActiveClass
							)}
							aria-current={active ? 'page' : undefined}
							onclick={handleCloseMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<a
				href="https://wa.me/524311098145"
				target="_blank"
				rel="noopener noreferrer"
				onclick={normalHeader.closeMenu}
				class="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary py-4 text-xs tracking-widest text-primary-foreground uppercase transition-colors hover:bg-secondary"
			>
				<MessageCircleIcon class="size-4" strokeWidth={1.6} />
				WhatsApp · {COMPANY_DATA.PHONE}
			</a>
		</nav>
	</DrawerContent>
</Drawer>
