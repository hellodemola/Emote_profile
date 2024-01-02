<script>
      let metrics = [
        { label: 'Joined emote Care', item: '1 year ago', icon: 'plus.svg' },
        { label: 'Respond time', item: '4 hours', icon: 'response.svg' },
        { label: 'Total sessions', item: '123 session', icon: 'counselling.svg' },
        { label: 'Return clients', item: '23 clients', icon: 'client.svg' },

    ];
</script>


<div id="grid" class="grid lg:grid-cols-4 grid-cols-2 gap-6">
             {#each metrics as stats}
                <div class="lg:p-[18px] p-[12px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]">

                <div class="lg:p-[2em] p-[1em]">
                    <img src={stats.icon} class="m-auto lg:m-0" alt=""/>
                </div>
                <div class="text-center lg:text-left">
                     <h4 class="lg:text-primary lg:text-[14px] text-gray text-[12px]">{stats.label}</h4>
                    <p class="text-primary font-medium lg:text-[18px] text-[12px]">{stats.item}</p>
                </div>

                </div>
            {/each}
            </div>
