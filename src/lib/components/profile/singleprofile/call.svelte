<script>

	import Dropdown from "$lib/components/buttons/dropdown.svelte";

</script>
  <div class="p-[18px] py-[36px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] hidden lg:block">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-gray line-through">£64 GBP</p>
                <h2 class="text-primary text-[32px] font-medium">£23</h2>

                    </div>
                    <div class="flex gap-1">
                        <p class="text-primary text-right font-medium">per individual session using Credits</p>
                        <img alt="drop" src="arrow_down.svg" />
                    </div>

                </div>
                <div class="my-[2em]">
                        <div>
                            <div class="flex gap-2">
                            <img src="calendar_gray.svg" alt="calendar"/>
                            <h3 class="text-gray">Next available date</h3>

                            </div>
                            <p class="text-primary">Sept 6, 2023 9:00 am</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <Dropdown label="Book a free 15-min session" link="arrow_for_dark.svg" />
                    </div>
            </div>
