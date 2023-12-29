<script>
      export let label = "";
      export let alt = '';
      export let link = '';
      export let  bgColor = '#BFD962';
      export let color = 'primary';


</script>

<button class={`py-[10px] px-[48px] rounded-full bg-[${bgColor}] text-${color} flex gap-3`}>
      <img alt={alt} src={link}/>
      <p>{label}</p>
</button>
