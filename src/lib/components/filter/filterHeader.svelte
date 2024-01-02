  <script lang="ts">
    export let heading: string;
    export let isMb = true;
  </script>

  <div style:margin-bottom={isMb ? '10px' : '0em'} id="header" class="flex justify-between item">
        <h1 class="text-primary font-medium mb-2">{heading}</h1>
        <img src="arrow_down.svg" alt="dropdown" />
    </div>
