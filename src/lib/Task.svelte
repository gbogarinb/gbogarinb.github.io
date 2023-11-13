<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import powershell from 'highlight.js/lib/languages/powershell';
	import { onMount } from 'svelte';

	export let question: string;
	export let answer: string;
	export let width: string | undefined;
	export let theme: string;

	hljs.registerLanguage('powershell', powershell);

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<div class="p-2 w-full md:w-[{width}]">
	<pre class={theme} style="white-space:pre-wrap"><code
			class="h-72 rounded-xl shadow-xl text-xl 2xl:text-2xl language-powershell">
user@host:~$ "{question}"
user@host:~$ "{answer}"</code
		></pre>
</div>
