<script setup>
import { ref } from 'vue';

// Données
const searchText = ref('');
const result = ref(0);

// Props
const props = defineProps({
	show: Boolean,
	imageId: String,
});

const emit = defineEmits(['close']);

const closeModal = () => {
	emit('close');
};

</script>

<template>
	<div v-if="props.show" @click.self="closeModal" class="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
		<div class="w-[600px] h-[600px] rounded-md bg-white p-5">
			<!--   # Region  titre-->
			<div class="w-full h-auto text-3xl font-medium mb-5">Add to Collections</div>
			<!--  End region -->

			<!--    Region  search-->
			<div class="relative h-[50px] rounded-lg duration-300 transition">
				<input
					v-model="searchText"
					class="duration-300 transition w-full h-full rounded-lg p-6 border-2 border-outilineInput border-solid dark:border-bgLinkDark dark:bg-bgLinkDark dark:text-greyCustom"
					type="text"
					name="search"
					id="search" />

				<svg
					class="absolute right-5 top-[14px] cursor-pointer"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="11" cy="11" r="7" stroke="#E5E7EB" stroke-width="2" />
					<path d="M20 20L17 17" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round" />
				</svg>
			</div>
			<!--  End  Region  -->

			<!--    Region  -->
			<div class="my-5">{{ result }} matches</div>

			<!--  End  Region  -->


      


		</div>
	</div>
</template>

