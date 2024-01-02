<script>
    let color = '#8A8987';
    let background = '#fff';

   function handleOnClick () {
        if (color === '#203136') {
            color = '#8A8987';
        } else {
            color = '#203136';
        }
        if (background === '#BFD962'){
            background = '#fff'
        } else {
            background = '#BFD962';
        }
    };
</script>

<button
    style:color={color}
    style:background={background}
    on:click={handleOnClick}
    class="rounded-[16px] border p-[4px] border-[#DDDAD0] px-[20px] flex items-center gap-2 w-full justify-center">
    <slot />
</button>
