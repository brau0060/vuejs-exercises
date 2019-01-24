export default {
  name: 'PlayGround',
  data () {
    return {
      backgroundClassName: 'red-background',
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="http:://google.ca"> {{ message }}</a>',
      nameInput: 'No Named',
    };
  },
  computed: {
    reversMessage() {
      return this.message.split('').reverse().join('');
    }
  },

  watch: {
nameInput(newValue, oldValue) {
  /* eslint-disable*/
  console.log ('old value', oldValue);
  console.log ('new value', newValue);
}
  },
  methods: {
    handleClick() {
    /* eslint-disable */
    // gets rid of console.log error
      this.counter++;
      //string interpolation
      this.message = `you are clicking this ${this.counter} times!`
      this.backgroundClassName = this.counter % 2 === 0 ? 'green-background' : 'red-background';
     
      // if (this.counter % 2 === 0){
      //     this.backgroundClassName = 'green-background'
      // } else {
      //    this.backgroundClassName = 'red-background'
      // }

      this.message = this.nameInput
    },
  }
};
