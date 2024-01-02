<script>
    let clientFocus = [
    { title: 'age', label: 'Children, Preteen, Teen, Adults, Elders', color: '#BFD962' },
    { title: 'Participants', label: 'Individuals, Couples', color: '#ACE7F2' },
    { title: 'Communities', label: 'Bisexual Allied, Body Positivity, Cancer, Gay Allied, HIV/AIDS Allied, Intersex Allied, Lesbian Allied, Non-Binary Allied', color: '#FDBD48' }
];
</script>

<div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h3 class="text-primary font-medium text-[1.125rem] my-4">Client focus</h3>
                <div class="">
                    {#each clientFocus as focus (focus.color)}
                    <div style:border-left={`5px solid ${focus?.color}`} class={`flex flex-col gap-2 border-l-[6px]  border-[${focus?.color}] my-2 p-4 text-primary`}>
                        <h4 class="font-medium lg:text-[18px] text-[1rem] capitalize">{focus.title}</h4>
                        <p class="lg:text-[1rem] text-[14px] font-light">{focus.label}</p>
                    </div>
                    {/each}
                </div>
            </div>
