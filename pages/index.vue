<template>
  <div class="gridz">
    <Visualization title="Second" :progress="store.nextSecond" variant="line" />
    <Visualization title="Minute" :progress="store.nextMinute" variant="line" />
    <Visualization title="Hour" :progress="store.nextHour" variant="line" />
    <Visualization title="Day" :progress="store.nextDay" variant="line" />
    <Visualization title="Week" :progress="store.nextWeek" variant="line" />
    <Visualization title="Month" :progress="store.nextMonth" variant="line" />
    <Visualization title="Year" :progress="store.nextYear" variant="line" />
    <Visualization title="Decade" :progress="store.nextDecade" variant="line" />
    <Visualization
      title="Century"
      :progress="store.nextCentury"
      variant="line"
    />
    <Visualization
      title="Millennium"
      :progress="store.nextMillennium"
      variant="line"
    />

    <!--  -->
    <Visualization
      title="Decasecond"
      :progress="store.nextDecasecond"
      variant="line"
    />
    <Visualization
      title="HectoSecond"
      :progress="store.nextHectosecond"
      variant="line"
    />
    <Visualization
      title="KiloSecond"
      :progress="store.nextKilosecond"
      variant="line"
    />
    <Visualization
      title="MegaSecond"
      :progress="store.nextMegasecond"
      variant="line"
    />
    <Visualization
      title="GigaSecond"
      :progress="store.nextGigasecond"
      variant="line"
    />
    <Visualization
      title="TeraSecond"
      :progress="store.nextTerasecond"
      variant="line"
    />
  </div>
</template>

<script setup>
import { useTimeStore } from "@/stores/time";
const store = useTimeStore();
</script>

<style>
.gridz {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 0.5rem;
  padding: 0.5rem;
}
</style>
