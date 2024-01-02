 <script>
    let imgs = [0,1,2,4];
 </script>

 <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h3 class="text-primary font-medium text-[1.125rem] lg:my-4">Photos</h3>
                <div class="lg:grid lg:grid-cols-5 flex gap-2 overflow-auto">
                    {#each imgs as img (img)}
                    <div class="rounded w-full">
                        <img src={`img/${img}.svg`} class="lg:w-[150px] lg:h-[150px] h-[10em] w-[10em]"  alt="clients" />
                    </div>
                    {/each}
                </div>
            </div>
