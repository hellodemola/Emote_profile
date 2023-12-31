<script>
    export let height = '';
</script>

<div style:height={height}  class="p-[32px] rounded-[16px] border border-[#F1F1F1] bg-white min:h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-8">
    <slot />
</div>
