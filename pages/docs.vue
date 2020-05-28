<template>
  <div class="container">
    <div>
      <h1 class="title">
        components board
      </h1>
      <h3>
        modal
      </h3>
      <div>
        <a-button
          type="primary"
          @click="showModal"
        >
          Open Modal with async logic
        </a-button>
        <a-modal
          title="Title"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>
            {{ ModalText }}
          </p>
        </a-modal>
      </div>
      <h3>
        Button
      </h3>
      <div>
        <a-button>
          just btn
        </a-button>
      </div>
      <h3>
        tabs
      </h3>
      <div>
        <a-tabs default-active-key="1">
          <a-tab-pane
            key="1"
            tab="Tab 1"
          >
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane
            key="2"
            tab="Tab 2"
            force-render
          >
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane
            key="3"
            tab="Tab 3"
          >
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </div>
      <h3>
        popover
      </h3>
      <div>
        <a-popover title="Title">
          <template slot="content">
            <p>
              Content
            </p>
            <p>
              Content
            </p>
          </template>
          <a-button type="primary">
            Hover me
          </a-button>
        </a-popover>
      </div>
      <h3>
        slider btns
      </h3>
      <div>
        <a-slider
          id="test"
          :default-value="30"
        />
        <a-slider
          range
          :default-value="[20, 50]"
        />
      </div>
      <h3>
        checkbox
      </h3>
      <div>
        <a-checkbox>
          Checkbox
        </a-checkbox>
      </div>
      <h3>
        input
      </h3>
      <div>
        <a-input />
      </div>
      <h3>
        select
      </h3>
      <div>
        <a-select style="width: 120px">
          <a-select-option
            v-for="city in cities"
            :key="city"
          >
            {{ city }}
          </a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      cities: ['Saint-Petersburg', 'Moscow', 'Kyiv', 'Minsk'],
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },

    handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },

    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 900px;
}

h3 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
