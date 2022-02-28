import { Dispenser } from './dispenser'
import { sceneMessageBus } from './messageBus'

let POAPBooth = new Dispenser(
  {
    position: new Vector3(8, 0, 8),
    rotation: Quaternion.Euler(0, 0, 0),
  },
  'poapapi.dcl.guru',
  '30677',
  'NO WAR',
  1080,
  1080
)

sceneMessageBus.on('activatePoap', () => {
  POAPBooth.activate()
  log('activated')
})

