<script lang="ts">
	import Bio from '$lib/components/profile/singleprofile/bio.svelte';
	import Call from '$lib/components/profile/singleprofile/call.svelte';
	import CancelPolicy from '$lib/components/profile/singleprofile/cancelPolicy.svelte';
	import ClientFocus from '$lib/components/profile/singleprofile/clientFocus.svelte';
	import Metrics from '$lib/components/profile/singleprofile/metrics.svelte';
	import Photo from '$lib/components/profile/singleprofile/photo.svelte';
	import ProfileHeader from '$lib/components/profile/singleprofile/profileHeader.svelte';
	import Rates from '$lib/components/profile/singleprofile/rates.svelte';
	import Ratings from '$lib/components/profile/singleprofile/ratings.svelte';
	import Schdule from '$lib/components/profile/singleprofile/schdule.svelte';
	import Video from '$lib/components/profile/singleprofile/video.svelte';
</script>

<div class="bg-[#f9f7f5] w-screen h-full lg:p-12 p-3">
	<div class="lg:grid grid-cols-6 gap-6">
		<div class="col-span-4">
			<ProfileHeader />
			<Bio />
			<Metrics />
			<Rates />
			<ClientFocus />
			<Photo />
			<Ratings />
		</div>
		<div class="col-span-2">
			<Call />
			<Video />
			<Schdule />
			<CancelPolicy />
		</div>
	</div>
</div>
