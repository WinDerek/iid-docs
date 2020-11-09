<!--
The component for visualizing the timeline of a series of events.

Currently this component only support vertical timeline from the up to the bottom, with event notes appearing on both sides of the central line.

Each event in this component happens exactly at some time point. This component does not support events which last for a time interval.
-->
<template>
  <div class="timeline">
    
  </div>
</template>

<script>
export default {
  name: "Timeline",
  model: {
  },
  props: {
    /**
     * The array of all the events.
     * 
     * Each element of this array is an event (Object):
     * - timeMillis: Number, the time millis when the event happens.
     * - timeString: String, the string representation of the time when the event happens.
     * - title: String, the title of the event.
     * - note: String, the additional note for the event.
     * - side: String, legal values: [ 'left', 'right' ].
     */
    eventArray: {
      type: Array,
      required: true
    },
    beginTimeMillis: {
      type: Number,
      required: false,
      default: undefined
    },
    endTimeMillis: {
      type: Number,
      required: false,
      default: undefined
    }
  },
  data: function() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}
</style>
