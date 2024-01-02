<script>

	import Avatar from "$lib/components/avatar.svelte";
	import Button from "$lib/components/buttons/button.svelte";

</script>
<div class="lg:p-[18px] rounded-[16px] lg:border lg:border-[#F1F1F1] lg:bg-white h-fit lg:shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]">
                <div class="lg:flex justify-between items-center lg:my-6 lg:py-3 " >
                    <div class="lg:flex items-center gap-4">
                    <div class="flex justify-center lg:bloc">
                    <div class="bg-white w-fit p-1 rounded-full lg:p-0 lg:bg-none">
                    <Avatar
                     hasIntroVideo={false}
                    url="https://s3-alpha-sig.figma.com/img/dc36/5232/ce9cf859ee7b5347c2c4481b56725138?Expires=1704672000&Signature=Vdw9X7tBvJrgiXXaRQDL08vozNN0XGRPU~ogFZpqC9lF~5lo6q5JsyzoETwUBKGfyWjctSlAXz1j9lAFsKX68kkNiuIdnXj88lXPlDuM64VtYekd5siZ5~OOO7Y3Xkt6HrZ3RKV0EKA~8np9wh5s0-FtejRKjm5JL2OTqPsR0ZGIQhn8VRhalP1Xhvh5SEZQGdEzLclUMmkSH8bzKYdz5yOwrxRp4zDqJHzKK8CWjvpD57Ekw660dzrI8-2iZMiIHbItFzyk4rQhUx3znT-rbEc231GaARQYDWD2WKzf9qbp-nhlgimFvbVVWpGQfr-7aPPIB3qBO5rszbJ3iJPo8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

                    />
                    </div>
                    </div>
                    <h1 class="font-medium text-primary lg:text-[1.5rem] text-[18px] text-center lg:text-left">Romina Andrade</h1>
                    </div>
                    <div class="lg:flex hidden gap-8 items-center">
                    <div class="flex gap-3">
                        <img alt="check" src="check_icon.svg" />
                        <h3 class="text-blue">verified by emote Care</h3>
                    </div>
                    <div class="w-[2.5em] h-[2.5em] p-2 rounded-full flex justify-center border border-[#DDDAD0] bg-white shadow shadow-[0px_3.077px_3.077px_0px rgba(0, 0, 0, 0.05)]">
                        <img alt="love" src="love.svg" />
                    </div>
                    </div>
                </div>
                <div class="lg:flex text-center lg:text-left justify-between lg:my-4">
                    <div>
                        <div class="flex justify-center lg:justify-normal gap-2 items-center lg:my-1">
        <img src="experience_icon.svg" alt="experience" />
        <p class="text-primary text-[14px] lg:text-[16px]">19 year of experience</p>
    </div>

     <div class="lg:hidden justify-center flex gap-1 my-3 items-center">
                        <img alt="check" src="check_icon.svg" />
                        <p class="text-[#425DB6] text-[12px]">verified by emote Care</p>
                    </div>

<div class="flex lg:gap-5 gap-2 items-center justify-center mt-2">
     <div class="flex gap-2 items-center">
        <img src="location_icon.svg" alt="location" />
        <p class="text-gray text-[12px] lg:text-[16px]"> Canada, GMT -7</p>
        </div>

        <div class="flex gap-2">

<img src="globle.svg" alt="location" />
        <p class="text-gray text-[12px] lg:text-[16px]">English, Spanish</p>


        </div>
        </div>


                    </div>
                    <div class="lg:hidden flex my-2 justify-between items-center">
                        <button class="text-[14px] text-primary border border-[#DDDAD0] bg-[#fff] p-2 px-4 rounded-[50px] flex gap-2 h-fit shadow shadow-(0px_4px_4px_0px_rgba(0, 0, 0, 0.03))">
                            Book a free 15-min session
                            <img src="arrow_forward_black.svg" alt="arrow-left" />
                        </button>
                        <div class="p-2 bg-white rounded-full w-[2.5em] h-[2.5em] flex justify-center shadow shadow-(0px_4px_4px_0px_rgba(0, 0, 0, 0.03))">
                            <img src="love.svg" alt="heart"/>
                        </div>

                    </div>
                    <div class="lg:flex hidden gap-2 items-center">
                    <img alt="chat" src="chat.svg" />
<p class="text-primary">Ask a question</p>
</div>
                </div>
            </div>
