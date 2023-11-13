<script lang="ts">
	import { AppBar, AppShell, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import ProfileImage from '$lib/assets/profile.jpg';
	import Task from '$lib/Task.svelte';
	import { languages } from '$lib/languages';
	import { onMount } from 'svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let email: string = 'gbogarin@proton.me';
	let name: string;
	let subject: string;
	let message: string;

	let ready = false;

	let selectedLang = 0;
	let updateTasks = false;

	$: lang = languages[selectedLang];
	$: lang, changeFlagValue();

	// To update the terminals.
	function changeFlagValue() {
		updateTasks = !updateTasks;
	}

	let tasksWidths = ['40%', '60%', '50%', '50%', 'full'];
	let themes = [
		'dracula',
		'tomorrow-night-blue',
		'shades-of-purple',
		'paraiso-dark',
		'green-screen'
	];

	onMount(() => {
		const index = languages.findIndex((l) => navigator.language.includes(l.lang));
		selectedLang = index >= 0 ? index : 0;
		ready = true;
	});

	function mailto() {
		window.location.href = `mailto:${email}?subject=${
			subject || 'I need something'
		}&body=${name} here. ${message}`;
	}
</script>

<div class="md:w-[40%] md:w-[60%] md:w-[50%]" />

{#if ready}
	<AppShell regionPage="relative" slotHeader="sticky top-0 z-10">
		<svelte:fragment slot="header">
			<AppBar slotTrail="place-content-end" padding="p-1" background="bg-transparent">
				<svelte:fragment slot="trail">
					<LightSwitch />

					<RadioGroup padding="px-2">
						<RadioItem bind:group={selectedLang} name="en" value={0}>en</RadioItem>
						<RadioItem bind:group={selectedLang} name="es" value={1}>es</RadioItem>
					</RadioGroup>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<section class="flex flex-col px-[10%] md:px-[20%] md:py-20 justify-center">
			<p class="block text-7xl font-bold">
				<span class="block" in:fade={{ delay: 300, duration: 300 }}>{lang.title1}</span>
				<span class="block text-primary-500">{lang.title2}</span>
			</p>
			<p class="block text-3xl font-semibold text-left md:ml-[35%] md:p-4 p-5">
				<span>{lang.description1}</span>
				<span class="font-bold text-primary-500">{lang.description2}</span>
			</p>
		</section>
		<section class="flex flex-col justify-center p-[5%]">
			<img src={ProfileImage} alt="Profile" class="filter grayscale rounded-xl" />
		</section>
		<section>
			<div class="flex flex-col px-[10%] md:px-[20%] md:pb-10 justify-center">
				<p class="block text-5xl font-semibold text-center md:p-4 p-5">{lang.soWhatCanIDoForYou}</p>
			</div>
			<div class="px-[5%] flex flex-wrap">
				{#key updateTasks}
					{#each lang.tasks as task, index}
						<Task
							question={task.question}
							answer={task.answer}
							width={tasksWidths[index]}
							theme={themes[index]}
						/>
					{/each}
				{/key}
			</div>
			<div class="p-5" />

			<div class="flex flex-col justify-center items-center text-2xl">
				<p class="block text-5xl font-semibold text-center p-10">{lang.letsGetInTouch}</p>
				<form class="w-[70%]" on:submit|preventDefault={mailto}>
					<label class="label space-y-2 space-y-reverse">
						<span>{lang.name}</span>
						<input
							id="name"
							class="input"
							type="text"
							placeholder={lang.name}
							bind:value={name}
							required
							autocomplete="name"
						/>
					</label>
					<label class="label space-y-2 space-y-reverse">
						<span>{lang.subject}</span>
						<input
							id="subject"
							class="input"
							type="text"
							placeholder={lang.iNeedSomething}
							bind:value={subject}
						/>
					</label>
					<label class="label space-y-2 space-y-reverse">
						<span>{lang.message}</span>
						<textarea id="message" class="textarea" rows="4" bind:value={message} required />
					</label>
					<div class="flex justify-center">
						<button id="button" class="btn btn-xl variant-filled-primary" type="submit">
							<span class="font-bold">{lang.sendEmail}</span>
						</button>
					</div>
				</form>
			</div>
		</section>
		<svelte:fragment slot="pageFooter">
			<footer class="text-center pt-20 pb-5">
				<p>Gustavo Bogarín · 2023</p>
			</footer>
		</svelte:fragment>
	</AppShell>
{/if}
