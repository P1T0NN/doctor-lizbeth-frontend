// TYPES
import type { Component } from 'svelte';

type IconComponent = Component<{ class?: string; size?: number; strokeWidth?: number }>;

/**
 * Universal result for remote commands and API-style calls (`success`, `message`, optional `data`).
 */
export type typesApiResult<TData = unknown> = {
	success: boolean;
	message: string;
	data?: TData;
};

/** One inline validation message per field key. */
export type FieldErrors<T extends string = string> = Partial<Record<T, string>>;

export type Service = {
	name: string;
	description: string;
	longDescription: string;
	duration: string;
	icon: IconComponent;
};
