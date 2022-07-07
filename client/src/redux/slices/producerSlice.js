import { createSlice } from '@reduxjs/toolkit'

export const producerSlice = createSlice({
  name: 'producer',
  initialState: {
    value: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0
    },
  },
  reducers: {
    addProducer: (state, producer) => {
      state.value[producer.payload] += 1
    },
  },
})

export const { addProducer } = producerSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducer = (state) => state.producer.value

export default producerSlice.reducer
