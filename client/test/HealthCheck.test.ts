import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, ref } from 'vue'

// Placeholder smoke test exercising the actual client test stack
// (Vitest + @vue/test-utils). Once real components exist under
// app/components, prefer importing and testing those directly
// instead of this inline component.
const Counter = defineComponent({
  setup() {
    const count = ref(0)
    return { count, increment: () => count.value++ }
  },
  render() {
    return h('button', { onClick: this.increment }, `Count: ${this.count}`)
  },
})

describe('Counter (smoke test)', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toBe('Count: 0')
  })

  it('increments count on click', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toBe('Count: 1')
  })
})