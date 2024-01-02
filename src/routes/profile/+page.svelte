<script lang="ts">
	import Avatar from "$lib/components/avatar.svelte";
	import Dropdown from "$lib/components/buttons/dropdown.svelte";
    const identities = ['Female', 'Cisgender', 'Atheist', 'White'];
    const experises = ['Anxiety', 'Relationship Issues', 'Depression'];
    const theories = ['Evidence-based therapy', 'Client-centered Therapy']
    const metrics = [
        { label: 'Joined emote Care', item: '1 year ago', icon: 'plus.svg' },
        { label: 'Respond time', item: '4 hours', icon: 'response.svg' },
        { label: 'Total sessions', item: '123 session', icon: 'counselling.svg' },
        { label: 'Return clients', item: '23 clients', icon: 'client.svg' },

    ];

  const rates = [
        { age: 'FREE', time: '15-min consultation', price: '£0', isAvaliable: true },
        { age: '18+', time: 'Adults/18+ Individual 50-min session', price: '£64', isAvaliable: true },
        { age: '16-18', time: 'Young adults (16-18)', price: '£80', isAvaliable: true },
    ];

let clientFocus = [
    { title: 'age', label: 'Children, Preteen, Teen, Adults, Elders', color: '#BFD962' },
    { title: 'Participants', label: 'Individuals, Couples', color: '#ACE7F2' },
    { title: 'Communities', label: 'Bisexual Allied, Body Positivity, Cancer, Gay Allied, HIV/AIDS Allied, Intersex Allied, Lesbian Allied, Non-Binary Allied', color: '#FDBD48' }
];

let imgs = [0,1,2,4];

let rating = [
    { title: 'Heartfelt Harmony', score: '500+', },
    { title: 'Empathy Explorer', score: '10' },
    { title: 'Soulful Connection', score: '100' },
    { title: 'Inspiration Instigator', score: '250' },
    { title: 'Caring Catalyst', score: '500+' },
    { title: 'Mindful Maestro', score: '10' },
    { title: 'Healing Artisan', score: '100' },
    { title: 'Joyful Guidepost', score: '250' },
    { title: 'Gratitude Guru', score: '500+' },
    { title: 'Resilience Maestro', score: '10' },
    { title: 'Mindful Muse', score: '100' },
    { title: 'Soulful Symphony', score: '250' },
    { title: 'Vulnerability Virtuoso', score: '500+' },
    { title: 'Mind-Map Maestro', score: '10' },
    { title: 'Energetic Empath', score: '100' },
    { title: 'Authenticity Architect', score: '250' },
];

let choseColor = (score: string) => {

    if (score === '500+'){
      return  {
            textColor: '#fff',
            bgColor: '#BFD962'
        }
    };
    if (score === '10') return {
            textColor: '#203136',
            bgColor: '#ACE7F2'
        }
        if (score === '100') return {
            textColor: '#203136',
            bgColor: '#FDBD48'
        }
        if (score === '250') return  {
            textColor: '#fff',
            bgColor: '#425DB6'
        }
};

const headers = [
    { label: 'Mon', time: '6.09', isSelected: false },
    { label: 'Tue', time: '7.09', isSelected: true },
    { label: 'Wed', time: '8.09', isSelected: false },
];

const time = ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00'];


</script>
<div class="bg-[#f9f7f5] w-screen h-full lg:p-12 p-3">
    <div class="lg:grid grid-cols-6 gap-6">
        <div class="col-span-4">
            <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]">
                <div class="flex justify-between items-center my-6 py-3" >
                    <div class="flex items-center gap-4">
                    <Avatar
                     hasIntroVideo={false}
                    url="https://s3-alpha-sig.figma.com/img/dc36/5232/ce9cf859ee7b5347c2c4481b56725138?Expires=1704672000&Signature=Vdw9X7tBvJrgiXXaRQDL08vozNN0XGRPU~ogFZpqC9lF~5lo6q5JsyzoETwUBKGfyWjctSlAXz1j9lAFsKX68kkNiuIdnXj88lXPlDuM64VtYekd5siZ5~OOO7Y3Xkt6HrZ3RKV0EKA~8np9wh5s0-FtejRKjm5JL2OTqPsR0ZGIQhn8VRhalP1Xhvh5SEZQGdEzLclUMmkSH8bzKYdz5yOwrxRp4zDqJHzKK8CWjvpD57Ekw660dzrI8-2iZMiIHbItFzyk4rQhUx3znT-rbEc231GaARQYDWD2WKzf9qbp-nhlgimFvbVVWpGQfr-7aPPIB3qBO5rszbJ3iJPo8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

                    />
                    <h1 class="font-medium text-primary text-[1.5rem]">Romina Andrade</h1>
                    </div>
                    <div class="flex gap-8 items-center">
                    <div class="flex gap-3">
                        <img alt="check" src="check_icon.svg" />
                        <h3 class="text-blue">verified by emote Care</h3>
                    </div>
                    <div class="w-[2.5em] h-[2.5em] p-2 rounded-full flex justify-center border border-[#DDDAD0] bg-white shadow shadow-[0px_3.077px_3.077px_0px rgba(0, 0, 0, 0.05)]">
                        <img alt="love" src="love.svg" />
                    </div>
                    </div>
                </div>
                <div class="flex justify-between my-4">
                    <div>
                        <div class="flex gap-2 items-center my-1">
        <img src="experience_icon.svg" alt="experience" />
        <p class="text-primary">19 year of experience</p>
    </div>

<div class="flex gap-5">
     <div class="flex gap-2">
        <img src="location_icon.svg" alt="location" />
        <p class="text-gray"> Canada, GMT -7, GMT -7</p>
        </div>

        <div class="flex gap-2">

<img src="globle.svg" alt="location" />
        <p class="text-gray">English, Spanish</p>


        </div>
        </div>


                    </div>
                    <div class="flex gap-2 items-center">
                    <img alt="chat" src="chat.svg" />
<p class="text-primary">Ask a question</p>
</div>
                </div>
            </div>

          <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
            <h2 class="font-medium text-primary">My bio</h2>
            <p class="text-primary leading-[22.4px] my-4">
                Welcome to my therapy profile!
                </p>
 <p class="text-primary leading-[22.4px] my-4">
I'm Romina, an experienced therapist dedicated to supporting individuals through life's challenges. With 19 years of expertise, I specialize in areas such as anxiety, depression, and relationship issues. My approach integrates evidence-based therapies with a client-centered focus, tailored to meet your unique needs.
</p>
 <p class="text-primary leading-[22.4px] my-4">

In our sessions, I provide a safe and non-judgmental space for you to explore your thoughts and emotions. Together, we'll work towards building resilience, enhancing coping skills, and achieving positive changes.
            </p>

<div class=" flex gap-2 items-center my-6">
            <h5 class="text-blue">Read more</h5>
            <img src="arrow_down.svg" alt="arrow" />
            </div>

            <div class="flex text-[12px] lg:text-[1rem] my-2 lg:my-0 gap-2 lg:gap-4">
            {#each identities as identity}
             <div class="rounded-full bg-[#F1F1F1] w-fit lg:p-6 lg:py-3 p-2 cursor-pointer">
                <p class="text-primary">{identity}</p>
            </div>
            {/each}
            </div>

            <div class="border border-[#F1F1F1] my-[3em]" />

            <div class="lg:my-[2em]">
                <h3 class="text-primary font-medium text-[1.125rem]">Specialities and expertise</h3>
                <div class="flex text-[12px] lg:text-[1rem] my-2 lg:my-0 gap-2 lg:gap-4">
            {#each experises as expertise}
             <div class="rounded-full bg-[#F1F1F1] w-fit lg:p-6 lg:py-3 p-2 cursor-pointer">
                <p class="text-primary">{expertise}</p>
            </div>
            {/each}
            </div>

            </div>

            <div class="border border-[#F1F1F1] my-[3em]" />

            <div class="my-[2em]">
                <div class="lg:flex justify-between">
                <h3 class="text-primary font-medium text-[1.125rem]">Types of therapy</h3>
                <div>
                <div class="flex gap-2 items-center text-[14px]">
                <img alt="" src="play_gray.svg"/>
                <p class="text-gray">What is types of therapy</p>
                </div>
                </div>
                </div>
                <div class="lg:flex gap-4 my-[2em]">
            {#each theories as theory}
             <div class="rounded-full lg:bg-[#F1F1F1] w-fit lg:p-6 py-2 cursor-pointer underline">
                <p class="text-primary">{theory}</p>
            </div>
            {/each}
            </div>

            </div>

            </div>

            <div id="grid" class="grid lg:grid-cols-4 grid-cols-2 gap-6">
             {#each metrics as stats}
                <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]">

                <div class="p-[2em]">
                    <img src={stats.icon} alt=""/>
                </div>
                    <h4 class="text-primary text-[14px]">{stats.label}</h4>
                    <p class="text-primary font-medium text-[18px]">{stats.item}</p>
                </div>
            {/each}
            </div>

            <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-[2em] ">
                <div class="flex justify-between items-center my-2">
                <h2 class="text-primary text-[18px] font-medium">Rates</h2>
                <p class="text-gray text-normal">GBP £</p>
                </div>
                   {#each rates as rate}
                <div class="flex justify-between my-6">
                <div class="w-full grid grid-cols-6">
                    <div class="w-full col-span-1  lg:display hidden">
                        <div class="bg-primary rounded-full w-fit p-4 py-2 text-whit">
                    <p>{rate.age}</p>

                        </div>
                    </div>
                    <div class="col-span-5">
                    <p>{rate.time}</p>
                    </div>
                </div>
                    <p>{rate.price}</p>
                </div>
                {/each}






            </div>

            <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h3 class="text-primary font-medium text-[1.125rem] my-4">Client focus</h3>
                <div class="">
                    {#each clientFocus as focus (focus.color)}
                    <div style:border-left={`5px solid ${focus?.color}`} class={`flex flex-col gap-2 border-l-[6px]  border-[${focus?.color}] my-2 p-4 text-primary`}>
                        <h4 class="font-medium text-[18px] capitalize">{focus.title}</h4>
                        <p class="">{focus.label}</p>
                    </div>
                    {/each}
                </div>
            </div>

            <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h3 class="text-primary font-medium text-[1.125rem] my-4">Photos</h3>
                <div class="grid grid-cols-5">
                    {#each imgs as img (img)}
                    <div class="rounded w-full">
                        <img src={`img/${img}.svg`} width="150px" height="150px"  alt="clients" />
                    </div>
                    {/each}
                </div>
            </div>

             <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <h3 class="text-primary font-medium text-[1.125rem] my-4">Ratings</h3>
                <div class="lg:grid grid-cols-4 flex overflow-auto gap-4">
                    {#each rating as rate}
                    <div class="rounded w-full">
                        <div class="w-full">
                            <div class="w-full my-5 flex justify-center">
                                <div class="relative">
                                <div style:border={`5px solid ${choseColor(rate.score)?.bgColor}`} class="rounded-full w-[7em] h-[7em] border-[5px]"/>
                                <div style:background={choseColor(rate.score)?.bgColor} class="rounded-full h-[2.5em] w-[2.5em] p-3 b-3 b-[#fff] flex items-center justify-center absolute bottom-0 right-0">

                                    <p style:color={choseColor(rate.score)?.textColor} class="text-[12px]">{rate.score}</p>
                                    </div>
                                </div>
                            </div>
                            <p class="font-medium text-primary text-[1rem] text-center">
                                {rate.title}
                            </p>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>


        </div>
        <div class="col-span-2">
            <div class="p-[18px] py-[36px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]">
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

            <div class="my-[2em] p-[18px] py-[36px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] h-[588px] bg-[url(bg_image.svg)] bg-cover bg-no-repeat flex justify-center items-center">
                <div>
                    <img alt="play" src="play.svg" />
                </div>
            </div>

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

            <div class="p-[18px] rounded-[16px] border border-[#F1F1F1] bg-white h-fit shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)] my-6">
                <div class="flex justify-between">
                    <h2 class="font-medium text-primary text-[18px]">Cancellation policy</h2>
                    <p class="text-[#FD813B] font-medium text-[18px]">Within 48 hours</p>
                </div>
                <div class="my-[2em]">
                    <p class="text-primary">
                        Balanced flexibility with reasonable refunds for your convenience within 48 hours prior the session time
                    </p>
                </div>

                <div class="flex gap-2 items-start">
                    <img alt="alert" src="alert.svg" />
                    <p class="text-gray text-[14px]">
                        <span class="text-blue cursor-pointer">Click here</span> to read our cancellation and payment terms and conditions
                    </p>
                </div>

            </div>

        </div>

    </div>
</div>
