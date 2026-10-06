/** Demo references so the tracking screen can be previewed. Not a live fleet feed. */
export const demoShipments = {
  'SS-24018': {
    reference: 'SS-24018',
    route: 'Bengaluru to Pune',
    type: 'Household',
    status: 'On the road',
    updated: 'This morning',
    steps: [
      { title: 'Survey & quote confirmed', done: true },
      { title: 'Packed in Indiranagar', done: true },
      { title: 'Left Bengaluru', done: true },
      { title: 'Due in Pune', done: false },
      { title: 'Unloading & placement', done: false },
    ],
  },
}
