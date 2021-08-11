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

      <!-- The button to change the visibility of the ended events -->
      <my-button @click="onChangeEndedEventsVisibility">{{buttonTextChangeEndedEventsVisibility}}</my-button>

      <div id="timelineContainer">
        <timeline :eventArray="eventArray"></timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';
import MyButton from '@/components/MyButton.vue';
import anime from 'animejs';

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
  computed: {
    buttonTextChangeEndedEventsVisibility: function() {
      if (this.endedEventsVisible) {
        return "Hide Ended Events";
      } else {
        return "Show Ended Events";
      }
    }
  },
  data: function() {
    return {
      eventArray: [],
      endedEventsVisible: true,
      animationRunning: false,
      hideAnimationRunning: false,
      showAnimationRunning: false
    }
  },
  created() {
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.1.13",
      title: "ICDCS 2020",
      note: "ICDCS conference 2020.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.2.6",
      title: "ICML 2020",
      note: "ICML conference 2020.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.3.25",
      title: "MobiCom 2020",
      note: "MobiCom conference 2020. CCF A.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.5.29",
      title: "GLOBECOM 2020",
      note: "GLOBECOM conference 2020.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.6.6",
      title: "NeurIPS 2020",
      note: "NeurIPS conference 2020.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.8.15",
      title: "INFOCOM 2020",
      note: "INFOCOM conference 2020. CCF A.",
      side: "right",
      ended: true,
      visible: true
    });
    
    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.9.9",
      title: "AAAI 2021",
      note: "AAAI conference 2021.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.10.31",
      title: "ICC 2021",
      note: "ICC conference 2021.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2020.12.19",
      title: "MobiHoc 2021",
      note: "MobiHoc conference 2021. CCF B.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.1.13",
      title: "ICDCS 2021",
      note: "ICDCS conference 2021.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.1.19",
      title: "IJCAI 2021",
      note: "IJCAI conference 2021.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.2.5",
      title: "ICML 2021",
      note: "ICML conference 2021.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.2.22",
      title: "IWQoS 2021",
      note: "IWQoS conference 2021.",
      side: "right",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.5.27",
      title: "NeurIPS 2021",
      note: "NeurIPS conference 2021.",
      side: "left",
      ended: true,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.7.24",
      title: "INFOCOM 2022",
      note: "INFOCOM conference 2022.",
      side: "right",
      ended: false,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.9.9",
      title: "AAAI 2022",
      note: "AAAI conference 2022.",
      side: "left",
      ended: false,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "2021.10.11",
      title: "ICC 2022",
      note: "ICC conference 2022.",
      side: "right",
      ended: false,
      visible: true
    });

    this.eventArray.push({
      timeMillis: Date.now(),
      timeString: "TBD",
      title: "ICML 2022",
      note: "ICML conference 2022.",
      side: "left",
      ended: false,
      visible: true
    });
  },
  methods: {
    /**
     * Scrolls to and highlights the first not ended event.
     */
    handleClick: function(event) {
      // Get the first not ended event element
      let notEndedEventElementArray = document.querySelectorAll(".event:not(.ended)");
      if (this.animationRunning || (notEndedEventElementArray.length == 0)) {
        return;
      }
      let firstNotEndedEventElement = notEndedEventElementArray[0];

      let viewModel = this;
      // Smooth scroll to.
      // Reference: https://stackoverflow.com/a/20670662
      var EPPZScrollTo = {
          documentVerticalScrollPosition: function() {
              if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari.
              if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
              if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8.
              return 0; // None of the above.
          },

          viewportHeight: function() {
            return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
          },

          documentHeight: function() {
            return (document.height !== undefined) ? document.height : document.body.offsetHeight;
          },

          documentMaximumScrollPosition: function() {
            return this.documentHeight() - this.viewportHeight();
          },

          elementVerticalClientPosition: function(element) {
              var rectangle = element.getBoundingClientRect();
              return rectangle.top;
          },

          /**
           * Animation tick.
           */
          scrollVerticalTickToPosition: function(currentPosition, targetPosition) {
              var filter = 0.2;
              var fps = 60;
              var difference = parseFloat(targetPosition) - parseFloat(currentPosition);

              // Snap, then stop if arrived.
              var arrived = (Math.abs(difference) <= 0.5);
              // let arrived = difference <= 0.0;
              if (arrived) {
                  // Apply target.
                  window.scrollTo(0.0, targetPosition);

                  // Animate the first not ended event
                  viewModel.startFirstNotEndedEventAnimation();

                  return;
              }

              // Filtered position.
              currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);

              // Apply target.
              window.scrollTo(0.0, Math.round(currentPosition));

              // Schedule next tick.
              setTimeout(function() {
                EPPZScrollTo.scrollVerticalTickToPosition(currentPosition, targetPosition);
              }, 1000 / fps);
          },

          /**
           * For public use.
           *
           * @param element The element to scroll to.
           * @param padding Top padding to apply above element.
           */
          scrollVerticalToElement: function(element, padding) {
              if (null == element) {
                  console.warn("element is null");
                  return;
              }

              var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPosition(element) - padding;
              var currentPosition = this.documentVerticalScrollPosition();

              // Clamp.
              // var maximumScrollPosition = this.documentMaximumScrollPosition();
              // if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;

              // Start animation.
              this.scrollVerticalTickToPosition(currentPosition, targetPosition);
          }
      };

      // Scroll to that element
      // lastEndedEventElement.scrollIntoView(true, { behavior: "smooth", block: "end", inline: "nearest" }); // scrollIntoView is not really smooth
      EPPZScrollTo.scrollVerticalToElement(firstNotEndedEventElement, 20);
    },
    startFirstNotEndedEventAnimation: function() {
      let notEndedEventElementArray = document.querySelectorAll(".event:not(.ended)");
      if (!this.animationRunning && (notEndedEventElementArray.length > 0)) {
        let firstNotEndedEventElement = notEndedEventElementArray[0];
        let firstNotEndedEventHeaderElement = firstNotEndedEventElement.children[0];
        let firstNotEndedEventBodyElement = firstNotEndedEventElement.children[1];
        let viewModel = this;
        viewModel.animationRunning = true;
        let animationTimeline = anime.timeline({
          easing: 'easeInOutQuad',
          duration: 500,
          direction: "alternate",
          loop: 4,
          complete: function(anim) {
            viewModel.animationRunning = false;
          }
        });
        animationTimeline
        .add({
          targets: [ firstNotEndedEventElement ],
          borderRadius: "20px"
        }, 0)
        .add({
          targets: [ firstNotEndedEventHeaderElement ],
          borderRadius: "20px 20px 0 0"
        }, 0)
        .add({
          targets: [ firstNotEndedEventBodyElement ],
          borderRadius: "0 0 20px 20px"
        }, 0)
        .add({
          targets: [ firstNotEndedEventElement ],
          opacity: 0.1
        }, 0);
      }
    },
    hideEndedEvents: function() {
      this.hideAnimationRunning = true;

      let endedEventIndexArray = [];
      for (let i = 0; i < this.eventArray.length; i++) {
        if (this.eventArray[i].ended) {
          endedEventIndexArray.push(i);
        }
      }

      // Hide the ended events one by one in the order of [ 0, 1, ..., n-1 ], where n is the number of ended events.
      let viewModel = this;
      function hideEvent(i) {
        let index = endedEventIndexArray[i];
        viewModel.eventArray[index].visible = false;

        if ((i + 1) < endedEventIndexArray.length) {
          setTimeout(function() {
            hideEvent(i + 1);
          }, 60);
        } else {
          viewModel.hideAnimationRunning = false;
          viewModel.endedEventsVisible = false;

          return;
        }
      }
      hideEvent(0);

      // for (let i = 0; i < this.eventArray.length; i++) {
      //   this.eventArray[i].visible = !this.eventArray[i].ended;
      // }
    },
    showEndedEvents: function() {
      this.showAnimationRunning = true;

      let endedEventIndexArray = [];
      for (let i = 0; i < this.eventArray.length; i++) {
        if (this.eventArray[i].ended) {
          endedEventIndexArray.push(i);
        }
      }

      // Show the ended events one by one in the order of [ n-1, n-2, ..., 0], where n is the number of ended events.
      let viewModel = this;
      function showEvent(i) {
        let index = endedEventIndexArray[i];
        viewModel.eventArray[index].visible = true;

        if ((i - 1) >= 0) {
          setTimeout(function() {
            showEvent(i - 1);
          }, 60);
        } else {
          viewModel.showAnimationRunning = false;
          viewModel.endedEventsVisible = true;

          return;
        }
      }
      showEvent(endedEventIndexArray.length - 1);

      // for (let i = 0; i < this.eventArray.length; i++) {
      //   this.eventArray[i].visible = true;
      // }
    },
    onChangeEndedEventsVisibility: function(event) {
      if (this.endedEventsVisible && !this.hideAnimationRunning) {
        this.hideEndedEvents();
      } else if (!this.endedEventsVisible && !this.showAnimationRunning) {
        this.showEndedEvents();
      }
    }
  }
}
</script>

<style scoped>
#timelineContainer {
  padding: 12px 24px 24px 24px;
}
</style>
