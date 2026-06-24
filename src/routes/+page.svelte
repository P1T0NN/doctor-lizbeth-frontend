<script lang="ts">
	// COMPONENTS
	import HeroSection from '@/shared/components/pages/(unprotected)/root/hero-section.svelte';
	import ServicesSection from '@/shared/components/pages/(unprotected)/root/services-section/services-section.svelte';
	import AboutSection from '@/shared/components/pages/(unprotected)/root/about-section.svelte';
	import BookingSection from '@/shared/components/pages/(unprotected)/root/booking-section.svelte';
	import GallerySection from '@/shared/components/pages/(unprotected)/root/gallery-section.svelte';
	import TestimonialsSection from '@/shared/components/pages/(unprotected)/root/testimonials-section.svelte';
	import ContactSection from '@/shared/components/pages/(unprotected)/root/contact-section/contact-section.svelte';
	import WhatsappFloatingIcon from '@/shared/components/pages/(unprotected)/root/whatsapp-floating-icon.svelte';
	import SvelteHead from '@/shared/components/ui/svelte-head/svelte-head.svelte';
</script>

<SvelteHead
	title="Dra. Lizbeth Razo — Medicina Estética & Regenerativa"
	description="Medicina estética con enfoque regenerativo en Jalostotitlán, Jalisco."
/>

<div class="min-h-screen bg-background text-foreground">
	<main>
		<HeroSection />

		<ServicesSection />

		<AboutSection />

		<BookingSection />

		<GallerySection />

		<TestimonialsSection />

		<ContactSection />
	</main>

	<WhatsappFloatingIcon />
</div>
