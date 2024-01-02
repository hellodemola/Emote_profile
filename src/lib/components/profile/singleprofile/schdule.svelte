 <script>
    const headers = [
    { label: 'Mon', time: '6.09', isSelected: false },
    { label: 'Tue', time: '7.09', isSelected: true },
    { label: 'Wed', time: '8.09', isSelected: false },
];

const time = ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00'];
 </script>

 <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h2 class="text-primary font-medium text-[18px]">Book a session with Romina</h2>
                <div class="flex gap-2">
                    <img src="alert.svg" alt="alert" />
                    <p class="text-gray text-[14px]">All times listed are in your local timezone</p>
                </div>

                <div class="my-[2em]">
                    <div class="grid grid-cols-3 gap-6" id="header">
                        {#each headers as header}
                        <div class={`rounded-[16px] items-center px-[16px] py-[8px] bg-[${header.isSelected ? '#BFD962' : '#F1F1F1'}] w-full flex justify-center flex-col`}>
                            <p class="font-medium text-primary">{header.time}</p>
                            <h6 class="text-primary">{header.label}</h6>
                        </div>
                        {/each}
                    </div>
                    <div class="my-[1em] grid grid-cols-3 gap-6" id="body">
                        {#each time as hr}
                        <div class="rounded-[16px] items-center px-[16px] py-[8px] border border-[#F1F1F1] w-full flex justify-center flex-col">
                        <p class="text-primary">{hr}</p>

                        </div>
                        {/each}
                    </div>

                </div>

                <div>
                    <div class="my-[2em] flex gap-2 justify-center">
                        <img src="calendar_blue.svg" alt="calendar" />
                        <h3 class="text-blue font-medium">Open full calendar</h3>
                    </div>
                    <div class="h-[1px] bg-[#f1f1f1] my-[2em]" />
                    <div>
                        <h2 class="text-primary font-medium text-[18px]">Your selection</h2>
                        <div class="my-4">
                            <div class="flex justify-between items-end">
                                <p>
                                    Friday, <br /> September 6, 2023
                                </p>
                                <p>
                                    10:00-10:50 am
                                </p>
                            </div>
                            <div class="mt-[0.5em] w-full flex justify-center">
                                <button class="bg-[#203136] text-white mt-12 p-[10px] px-[15px] rounded-[50px] w-full flex justify-center gap-2 cursor-pointer">
                Book now
                <img alt="arrow" src="arrow_forward.svg"/>
            </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
