<template>
  <div class="container">
    <div class="p-4 mx-auto">
      <app-accordion class="mb-4">
        <template v-slot:title>
          <span class="font-semibold text-xl">Accordion 1</span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </app-accordion>

      <app-accordion class="mb-4">
        <template v-slot:title>
          <span class="font-semibold text-xl">Accordion 2</span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </app-accordion>

      <app-accordion class="mb-4">
        <template v-slot:title>
          <span class="font-semibold text-xl">Accordion 1</span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </app-accordion>

      <app-accordion class="mb-4">
        <template v-slot:title>
          <span class="font-semibold text-xl">Accordion 1</span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </app-accordion>

      <app-accordion class="mb-4">
        <template v-slot:title>
          <span class="font-semibold text-xl">Accordion 1</span>
        </template>
        <template v-slot:content>
          <p>
            <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
        </template>
      </app-accordion>
    </div>
  </div>
</template>

<script>
import AppAccordion from "../Components/AppAccordion";

export default {
  name: "FAQ",
  components: {
    AppAccordion,
  },
};
</script>

<style >
/* FAQ */

.FAQ_header {
  text-align: center;
}

.FAQ_block p {
  margin: 0px;
  display: inline-block;
}

.FAQ_block h3 {
  margin: 0px;
}


.FAQ_elem {
  width: 100%;
  margin: 10px 0;
}

.FAQ_elem.active {
  width: 100%;
  border-color: coral;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
}

.FAQ_body {
  width: 100%;
}
</style>