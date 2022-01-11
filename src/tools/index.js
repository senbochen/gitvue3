import { h, defineComponent, renderSlot } from 'vue'


const Boom = defineComponent({
  name: 'Boom',
  setup (props, { slots }) {

    const create = () => {
      return h('div', {
        style: {
          color: '#ffd'
        }
      },
        renderSlot(slots, 'class-name', {

        })
      )
    }
    return {
      create
    }
  },
  render () {
    const { create } = this
    return (
      <div class="">
        {create()}
      </div>
    )
  }
})



export default Boom
