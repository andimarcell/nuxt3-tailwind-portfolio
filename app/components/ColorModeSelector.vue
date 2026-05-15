<script setup>
const colorMode = useColorMode();
const modes = ['system', 'light', 'dark'];
const nextModeIcons = {
	system: '🌓',
	light: '🌕',
	dark: '🌑',
};
const showNextModeLabel = ref(false);
const nextMode = computed(() => {
	const currentModeIndex = modes.indexOf(colorMode.preference);
	let nextModeIndex = null;
	if (currentModeIndex + 1 === modes.length) {
		nextModeIndex = 0;
	} else {
		nextModeIndex = currentModeIndex + 1;
	}
	return modes[nextModeIndex];
});
const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

function toggleMode() {
	colorMode.preference = nextMode.value;
}
</script>

<template>
    <div class="flex space-x-2 items-center">
		<div class="text-gray-600 text-xs" v-if="showNextModeLabel">
			Change to {{ nextMode }}
		</div>
		<button
			@click="toggleMode"
			class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
			@mouseenter="() => (showNextModeLabel = true)"
			@mouseleave="() => (showNextModeLabel = false)"
		>
			{{ nextModeIcon }}
		</button>
	</div>
</template>