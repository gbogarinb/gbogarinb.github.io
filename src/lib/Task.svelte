<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import powershell from 'highlight.js/lib/languages/powershell';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let text: string;
	export let width: string | undefined;
	export let theme: string;
	export let index: number;

	let code: HTMLElement;
	let className = `task${index}`;

	hljs.registerLanguage('powershell', powershell);

	onMount(() => {
		hljs.highlightAll();
		code.style.display = 'flex';
		code.style.alignItems = 'center';
		code.style.justifyContent = 'center';
		code.style.textAlign = 'center';

		setTimeout(() => {
			const tl = gsap.timeline();
			tl.from(`.${className}`, {
				scrollTrigger: {
					trigger: `.${className}`,
					scrub: 1
				},
				scale: 0.8
			});
		}, 1);
	});
</script>

<div class="p-2 w-full md:w-[{width}] {className}">
	<pre class={theme} style="white-space:pre-wrap"><code
			bind:this={code}
			class="h-72 rounded-xl shadow-xl text-3xl md:text-4xl 2xl:text-5xl language-powershell"
			>"{text}"</code
		></pre>
</div>
