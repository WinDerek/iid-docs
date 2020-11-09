<!--
Component for interested conferences.
1. ICML
2. AAAI
3. NIPS
4. ICC
5. VTC
6. Sigmetrics
7. INCOFOM
8. GLOBECOM
9. ICDCS
 -->
<template>
  <div class="conferences SubPage">
    <div class="content_container">
      <h1 class="content__title">Conferences</h1>
      <p>The timeline for some conferences.</p>

      <div id="timelineContainer">
        <timeline :eventArray="eventArray"></timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'Conferences',
  components: {
    Timeline
  },
  props: {
  },
  data: function () {
    return {
      eventArray: []
    }
  },
  created () {
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "xxxx.xx.xx",
      title: "AAAI 2022",
      note: "AAAI conference 2022.",
      side: "left"
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "xxxx.xx.xx",
      title: "ICC 2022",
      note: "ICC conference 2022.",
      side: "right"
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "xxxx.xx.xx",
      title: "NIPS 2022",
      note: "NeurIPS conference 2022.",
      side: "left"
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "xxxx.xx.xx",
      title: "GLOBECOM 2022",
      note: "GLOBECOM conference 2022.",
      side: "right"
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "xxxx.xx.xx",
      title: "ICML 2022",
      note: "ICML conference 2022.",
      side: "left"
    });
  },
  methods: {}
}
</script>

<style scoped>
#timelineContainer {
  padding: 12px 12px 24px 12px;
}
</style>
