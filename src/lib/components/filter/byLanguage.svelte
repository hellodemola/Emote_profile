<script>
	import SelectButton from "../buttons/selectButton.svelte";
     let languages = [
    { id: 0, lang: 'English' },
    { id: 1, lang: 'Mandarin' },
    { id: 0, lang: 'French' },
    { id: 0, lang: 'Italian' },
    { id: 0, lang: 'Punjabi' },
    { id: 0, lang: 'Russian' },
    { id: 0, lang: 'Spanish' },
    { id: 0, lang: 'German' },
  ];
</script>
<div id="appointmentType" class="my-6">
      <div id="header" class="flex justify-between item mb-4">
        <h1 class="text-primary font-medium">Language</h1>
        <img src="arrow_down.svg" alt="dropdown" />
      </div>
      <div class="grid grid-cols-3 gap-4">
        {#each languages as language}
        <SelectButton>
         {language.lang}
        </SelectButton>
        {/each}
        </div>
    </div>
