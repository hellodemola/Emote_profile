<script>
      export let label = "";
      export let alt = '';
      export let link = '';
      export let  bgColor = '#BFD962';
      export let color = 'primary';


</script>

<button class={`py-[10px] px-[48px] rounded-full bg-[${bgColor}] text-${color} hover:bg-primary hover:text-[#fff] flex gap-3 w-full justify-center group`}>
      <img alt={alt} class="group-hover:invert" src={link}/>
      <p>{label}</p>
</button>

