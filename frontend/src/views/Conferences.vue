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
      timeString: "2020.2.6",
      title: "ICML 2020",
      note: "ICML conference 2020. Ended.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.3.25",
      title: "MobiCom 2020",
      note: "MobiCom conference 2020. Ended.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.5.29",
      title: "GLOBECOM 2020",
      note: "GLOBECOM conference 2020. Ended.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.6.5",
      title: "NIPS 2020",
      note: "NeurIPS conference 2020. Ended.",
      side: "left",
      ended: true
    });
    
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.9.9",
      title: "AAAI 2021",
      note: "AAAI conference 2021. Ended.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.10.31",
      title: "ICC 2021",
      note: "ICC conference 2021. Ended.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.1.19",
      title: "IJCAI 2021",
      note: "IJCAI conference 2021.",
      side: "left",
      ended: false
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.2.5",
      title: "ICML 2021",
      note: "ICML conference 2021.",
      side: "left",
      ended: false
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "TBD",
      title: "NIPS 2021",
      note: "NeurIPS conference 2021.",
      side: "left",
      ended: false
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "TBD",
      title: "AAAI 2022",
      note: "AAAI conference 2022.",
      side: "left",
      ended: false
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "TBD",
      title: "ICC 2022",
      note: "ICC conference 2022.",
      side: "right",
      ended: false
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "TBD",
      title: "ICML 2022",
      note: "ICML conference 2022.",
      side: "left",
      ended: false
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
