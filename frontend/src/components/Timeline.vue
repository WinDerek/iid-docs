<!--
The component for visualizing the timeline of a series of events.

Currently this component only support vertical timeline from the up to the bottom, with event notes appearing on both sides of the central line.

Each event in this component happens exactly at some time point. This component does not support events which last for a time interval.
-->
<template>
  <div class="timeline">
    <div
      class="event"
      :class="{ 'event--left': event.side === 'left', 'event--right': event.side === 'right' }"
      v-for="(event, index) in eventArray"
      v-bind:key="index">
      <div class="event__header" :class="{ 'left': event.side === 'left', 'right': event.side === 'right' }">
        <h2 class="event__title">{{ event.title }}</h2>
        <h3
          class="event__time"
        >{{ event.timeString === undefined ? Date.parse(event.timeMillis) : event.timeString }}</h3>
      </div>
      <div class="event__body">
        <p class="event__note">{{ event.note }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  model: {},
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
  created() {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 2800px;
  position: relative;
}

.timeline::before {
  content: "";
  width: 5px;
  height: 100%;
  background: #aea8d3;
  position: absolute;
  left: 50%;
  top: 0;
}

.event {
  width: 45%;
  margin: 16px 0 16px 0;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}

.event--left {
  transform: translateX(-50%);
  left: -30px;
}

.event--right {
  transform: translateX(50%);
  left: 30px;
}

.event--left::before {
  content: "";
  position: absolute;
  right: -9px;
  top: 30px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #2c82c9ff;

  transform: translateY(-50%);
}

.event--left::after {
  content: "";
  position: absolute;
  right: -32.5px;
  top: 30px;
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background: #674172;

  transform: translate(50%, -50%);
}

.event--right::before {
  content: "";
  position: absolute;
  left: -9px;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ee4d4d;
}

.event--right::after {
  content: "";
  position: absolute;
  left: -27.5px;
  top: 30px;
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background: #674172;

  transform: translate(-50%, -50%);
}

.event__header.left {
  background: #2c82c9ff;
}

.event__header.right {
  background: #ee4d4d;
}

.event__title {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  color: white;
  padding: 12px;
  margin: 0;
}

.event__time {
  font-family: "OpenSans";
  font-size: 22px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  color: white;
  padding: 0 12px 12px 12px;
  margin: 0;
}

.event__body {
  background: white;
}

.event__note {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 300;
  color: #202124;
  padding: 12px;
  margin: 0;
}
</style>
