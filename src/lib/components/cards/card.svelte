<script>
    export let height = '';
</script>

<div style:min-height={height}  class="lg:p-[32px] p-[8px] py-[12px] rounded-[16px] border border-[#F1F1F1] bg-white min:h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-2">
    <slot />
</div>
