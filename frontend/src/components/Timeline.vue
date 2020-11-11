<!--
The component for visualizing the timeline of a series of events.

Currently this component only support vertical timeline from the up to the bottom, with event notes appearing on both sides of the central line.

Each event in this component happens exactly at some time point. This component does not support events which last for a time interval.
-->
<template>
  <div class="timeline">
    <div
      class="event"
      :class="{ 'event--left': event.side === 'left', 'event--right': event.side === 'right', 'ended': event.ended }"
      v-for="(event, index) in eventArray"
      v-bind:key="index">
      <div class="event__header" :class="{ 'left': (event.side === 'left') && (!event.ended), 'right': (event.side === 'right') && (!event.ended), 'ended': event.ended }">
        <h3 class="event__time" :class="{ 'ended': event.ended }">{{ event.timeString === undefined ? Date.parse(event.timeMillis) : event.timeString }}</h3>
        <h2 class="event__title" :class="{ 'ended': event.ended }">{{ event.title }}</h2>
      </div>
      <div class="event__body">
        <p class="event__note" :class="{ 'ended': event.ended }">{{ event.note }}</p>
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
     * - ended: Boolean, true if the event is ended and false otherwise.
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

  transform: translateX(-50%);
}

.event {
  width: 45%;
  margin: 16px 0 16px 0;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.1);
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

.event--left.ended::before {
  border-left: 10px solid #bdc3c7;
}

/* The central circle. */
.event--left::after {
  content: "";
  position: absolute;
  right: -30px;
  top: 30px;
  width: 16px;
  height: 16px;
  border: 4px solid #aea8d3;
  border-radius: 50%;
  background: #674172;

  transform: translate(50%, -50%);
}

.event--right::before {
  content: "";
  position: absolute;
  left: -9px;
  top: 30px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ee4d4d;

  transform: translateY(-50%);
}

.event--right.ended::before {
  border-right: 10px solid #bdc3c7;
}

/* The central circle. */
.event--right::after {
  content: "";
  position: absolute;
  left: -30px;
  top: 30px;
  width: 16px;
  height: 16px;
  border: 4px solid #aea8d3;
  border-radius: 50%;
  background: #674172;

  transform: translate(-50%, -50%);
}

.event__header.left {
  background: #2c82c9ff;
}

.event__header.left > *::selection {
  background: #aaaaaa;
}

.event__header.right {
  background: #ee4d4d;
}

.event__header.right > *::selection {
  background: #aaaaaa;
}

.event__header.ended {
  background: #bdc3c7;
}

.event__header.ended > *::selection {
  background: #89c4f466;
}

.event__title {
  font-family: "Roboto";
  font-size: 28px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  color: #fafafa;
  padding: 0 12px 8px 12px;
  margin: 0;
}

.event__title.ended {
  color: #ffffff;
}

.event__time {
  font-family: "OpenSans";
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  color: #fafafa;
  padding: 8px 12px 2px 12px;
  margin: 0;
}

.event__time.ended {
  color: #ffffff;
}

.event__body {
  background: white;
}

.event__body > *::selection {
  background: #89c4f466;
}

.event__note {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 300;
  color: #202124;
  padding: 12px;
  margin: 0;
}

.event__note.ended {
  color: #666666;
}
</style>
