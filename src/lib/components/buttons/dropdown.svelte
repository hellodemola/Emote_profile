<script>
    export let label = "";
      export let   alt = '';
      export let link = '';
      export let  bgColor = '#fff';
      export let isArr = false


</script>

<button class={`py-[10px] px-[48px] rounded-full bg-[${bgColor}] text-primary flex gap-3 border border-[#DDDAD0] shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] justify-between`}>

      <p>{label}</p>
      <img alt={alt} src={link}/>
      {#if isArr}
      <img alt="arrow" src="arrow_down.svg" />
      {/if}
</button>
