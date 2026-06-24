<script lang="ts">
	// SVELTEKIT
	import { resolve } from '$app/paths';

	// CONFIG
	import { COMPANY_DATA } from '@/shared/constants.js';

	// CLASSES
	import { footerLinkClass, footerLinkGroups } from './footer.svelte.ts';

	// COMPONENTS
	import Logo from '@/shared/components/ui/logo/logo.svelte';

	// UTILS
	import { cn } from '@/shared/utils/utils.js';

	// LUCIDE ICONS
	import MessageCircleIcon from '@lucide/svelte/icons/message-circle';

	type Props = {
		class?: string;
		/** Show [`Logo`](@/shared/components/ui/logo/logo.svelte); if false, use the company name link. */
		hasLogo?: boolean;
		/** Render [`footerLinkGroups`](./footer.svelte.ts). */
		showNav?: boolean;
	};

	let { class: className, hasLogo = true, showNav = true }: Props = $props();

	const year = new Date().getFullYear();
</script>

<footer
	class={cn(
		'w-full max-w-full overflow-x-clip bg-primary pt-20 pb-10 text-primary-foreground',
		className
	)}
>
	<div class="mx-auto grid w-full gap-12 px-5 md:grid-cols-3 lg:px-10">
		<div>
			<div class="min-w-0">
				{#if hasLogo}
					<Logo 
						src="/logo/opt/logo_white-1280w.webp"
						size="md" 
						inverse 
					/>
				{:else}
					<a
						href={resolve('/#top')}
						class="font-serif text-[15px] tracking-wide text-primary-foreground"
					>
						{COMPANY_DATA.NAME}
					</a>
				{/if}

				<p class="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
					{COMPANY_DATA.DESCRIPTION}
				</p>
			</div>
		</div>

		{#if showNav}
			{#each footerLinkGroups as group (group.id)}
				<nav aria-label={group.heading} class="min-w-0">
					<h2 class="font-sans text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
						{group.heading}
					</h2>

					<ul class="mt-5 flex flex-col gap-2.5">
						{#each group.links as item (item.href)}
							<li>
								<a href={resolve(item.href)} class={footerLinkClass}>
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/each}
		{/if}

		<div>
			<h2 class="font-sans text-xs font-medium uppercase tracking-widest text-primary-foreground/60">Síguenos</h2>

			<div class="mt-5 flex items-center gap-3">
				<a
					href={COMPANY_DATA.INSTAGRAM_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					class="inline-flex size-11 items-center justify-center border border-primary-foreground/25 transition-colors hover:bg-background hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
				>
					<span class="text-[11px] font-medium tracking-widest">IG</span>
				</a>

				<a
					href={COMPANY_DATA.FACEBOOK_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					class="inline-flex size-11 items-center justify-center border border-primary-foreground/25 transition-colors hover:bg-background hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
				>
					<span class="font-serif text-xl leading-none">f</span>
				</a>

				<a
					href={COMPANY_DATA.WHATSAPP_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					class="inline-flex size-11 items-center justify-center border border-primary-foreground/25 transition-colors hover:bg-background hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
				>
					<MessageCircleIcon class="size-[18px]" strokeWidth={1.6} />
				</a>
			</div>

			<p class="mt-6 text-sm text-primary-foreground/70">@dra.lizbethrazo</p>
		</div>
	</div>

	<div
		class="mx-auto mt-16 flex w-full flex-col justify-between gap-4 border-t border-primary-foreground/15 px-5 pt-6 text-xs text-primary-foreground/55 sm:flex-row lg:px-10"
	>
		<span>
			© {year}
			{COMPANY_DATA.NAME}. Todos los derechos reservados.
		</span>

		<a href={resolve('/#top')} class="transition-colors hover:text-primary-foreground">
			Aviso de Privacidad (LFPDPPP)
		</a>
	</div>
</footer>
