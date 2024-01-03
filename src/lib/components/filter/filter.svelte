<script>

	import Dropdown from "../buttons/dropdown.svelte";
	import ByAppointmentType from "./byAppointmentType.svelte";
	import ByCountry from "./byCountry.svelte";
	import ByExperience from "./byExperience.svelte";
	import ByIssues from "./byIssues.svelte";
	import ByLanguage from "./byLanguage.svelte";
	import ByPrice from "./byPrice.svelte";
	import BySex from "./bySex.svelte";
	import ByTherapistType from "./byTherapistType.svelte";
</script>

  <div class="flex justify-between items-baseline w-full">
    <Dropdown label="Filter by" />
  <h2>Clear all</h2>
    </div>

    <div class="p-[24px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-8 hidden lg:block">
    <ByAppointmentType />
    <ByPrice />
    <ByExperience />
    <BySex />
    <ByIssues />
    <ByTherapistType />
    <ByCountry />
    <ByLanguage />
  </div>
