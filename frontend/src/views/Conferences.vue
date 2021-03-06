<!--
Component for interested conferences.
1. ICML
2. AAAI
3. NIPS
4. ICC
5. MobiCom
6. Sigmetrics
7. INCOFOM
8. GLOBECOM
9. ICDCS
10. MobiHoc
 -->
<template>
  <div class="conferences SubPage">
    <div class="content_container">
      <h1 class="content__title">Conferences</h1>
      <p>Following is a timeline for some conferences.</p>

      <p>There is another website for AI conferences deadlines: <a href="http://aideadlin.es/" target="_blank">aideadlin.es</a></p>

      <!-- The button to scroll to the earliest deadline -->
      <my-button @click="handleClick">Go to the Earliest Deadline</my-button>

      <div id="timelineContainer">
        <timeline :eventArray="eventArray"></timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';
import MyButton from '@/components/MyButton.vue';

export default {
  name: 'conferences',
  metaInfo: {
    title: "Conferences"
  },
  components: {
    Timeline, MyButton
  },
  props: {
  },
  data: function() {
    return {
      eventArray: []
    }
  },
  created() {
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.1.13",
      title: "ICDCS 2020",
      note: "ICDCS conference 2020.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.2.6",
      title: "ICML 2020",
      note: "ICML conference 2020.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.3.25",
      title: "MobiCom 2020",
      note: "MobiCom conference 2020. CCF A.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.5.29",
      title: "GLOBECOM 2020",
      note: "GLOBECOM conference 2020.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.6.6",
      title: "NeurIPS 2020",
      note: "NeurIPS conference 2020.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.8.15",
      title: "INFOCOM 2020",
      note: "INFOCOM conference 2020. CCF A.",
      side: "right",
      ended: true
    });
    
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.9.9",
      title: "AAAI 2021",
      note: "AAAI conference 2021.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.10.31",
      title: "ICC 2021",
      note: "ICC conference 2021.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.12.19",
      title: "MobiHoc 2021",
      note: "MobiHoc conference 2021. CCF B.",
      side: "right",
      ended: true
    });


    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.1.13",
      title: "ICDCS 2021",
      note: "ICDCS conference 2021.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.1.19",
      title: "IJCAI 2021",
      note: "IJCAI conference 2021.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.2.5",
      title: "ICML 2021",
      note: "ICML conference 2021.",
      side: "left",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.2.22",
      title: "IWQoS 2021",
      note: "IWQoS conference 2021.",
      side: "right",
      ended: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.5.27",
      title: "NeurIPS 2021",
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
  methods: {
    handleClick: function(event) {
      // Scroll to the last ended event
      
      // Get the last ended event element
      let endedEventElementArray = document.querySelectorAll(".event.ended");
      let lastEndedEventElement = endedEventElementArray[endedEventElementArray.length - 1];

      // Scroll to that element
      lastEndedEventElement.scrollIntoView(true, { behavior: "smooth", block: "end", inline: "nearest" });
    }
  }
}
</script>

<style scoped>
#timelineContainer {
  padding: 12px 24px 24px 24px;
}
</style>
